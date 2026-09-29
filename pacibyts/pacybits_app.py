# -*- coding: utf-8 -*-
"""
PacyBits FC 27 - Ultimate Desktop App
Servidor HTTP integrado con proxy para assets de cartas SoFIFA y PyWebView Edge Chromium
"""

import sys
import os
import json
import socket
import threading
import http.server
import socketserver
import urllib.request
import webview

class PacybitsAPI:
    def __init__(self, base_dir):
        self.base_dir = base_dir
        self.save_file = os.path.join(base_dir, "pacybits_fc27_save.json")
        self.cache_dir = os.path.join(base_dir, "assets", "players")
        os.makedirs(self.cache_dir, exist_ok=True)

    def load_save_data(self):
        """Carga la partida guardada desde el archivo JSON local"""
        if os.path.exists(self.save_file):
            try:
                with open(self.save_file, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception as e:
                print(f"[API] Error cargando partida: {e}")
        return None

    def save_data(self, data):
        """Guarda la colección, monedas y repetidas en disco local"""
        try:
            with open(self.save_file, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            return True
        except Exception as e:
            print(f"[API] Error guardando partida: {e}")
            return False

def get_resource_path(relative_path):
    """Obtiene la ruta a los recursos.
    Prioriza carpetas en el disco para que cualquier cambio en la UI se aplique
    instantáneamente sin necesidad de recompilar el EXE."""
    # 1. Comprobar en el directorio padre por si el exe está en dist/ (proyecto principal)
    if getattr(sys, 'frozen', False):
        exe_dir = os.path.dirname(sys.executable)
        parent_path = os.path.join(os.path.dirname(exe_dir), relative_path)
        if os.path.exists(parent_path):
            return parent_path
            
        local_path = os.path.join(exe_dir, relative_path)
        if os.path.exists(local_path):
            return local_path
            
    # 2. Comprobar junto al script .py
    script_dir = os.path.dirname(os.path.abspath(__file__))
    local_path = os.path.join(script_dir, relative_path)
    if os.path.exists(local_path):
        return local_path

    # 3. Fallback al desempaquetado interno de PyInstaller
    if hasattr(sys, '_MEIPASS'):
        return os.path.join(sys._MEIPASS, relative_path)
        
    return local_path

def find_free_port():
    """Encuentra un puerto libre en localhost"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        return s.getsockname()[1]

class PacybitsHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Maneja el servicio de la interfaz UI y actúa de proxy transparente para fotos de jugadores y escudos"""
    
    def log_message(self, format, *args):
        # Silenciar logs ruidosos en consola
        pass

    def do_GET(self):
        if self.path.startswith('/img-proxy/'):
            # Extracción y corrección de la URL de destino
            raw_url = self.path[len('/img-proxy/'):]
            if raw_url.startswith('https:/') and not raw_url.startswith('https://'):
                raw_url = raw_url.replace('https:/', 'https://', 1)
            elif raw_url.startswith('http:/') and not raw_url.startswith('http://'):
                raw_url = raw_url.replace('http:/', 'http://', 1)
            
            # 1. Intentar servir desde caché local en disco (assets/faces) si ya está descargada
            try:
                import re
                # Primero probar si el archivo ya existe con el nombre de la URL tal cual
                url_filename = raw_url.split('/')[-1]
                
                # Probar coincidencia de id numérico estándar .../players/XXX/YYY/...
                m = re.search(r'/players/(\d{3})/(\d{3})/', raw_url)
                m_ea = re.search(r'/p(\d+)\.png', raw_url)
                pid_str = None
                if m:
                    pid_str = str(int(m.group(1) + m.group(2)))
                elif m_ea:
                    pid_str = m_ea.group(1)

                if pid_str:
                    local_face = os.path.join(self.directory, "assets", "faces", f"{pid_str}.png")
                    if os.path.exists(local_face) and os.path.getsize(local_face) > 500:
                        with open(local_face, "rb") as f:
                            img_data = f.read()
                        self.send_response(200)
                        self.send_header('Content-Type', 'image/png')
                        self.send_header('Content-Length', str(len(img_data)))
                        self.send_header('Cache-Control', 'public, max-age=31536000')
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        self.wfile.write(img_data)
                        return
            except Exception:
                pass

            # 2. Descargar de la URL remota (con fallback a versiones de temporadas anteriores 24, 23, 22, 21...)
            VERSIONS = ["25_120.png", "24_120.png", "23_120.png", "22_120.png", "21_120.png", "20_120.png"]
            urls_to_try = [raw_url]
            m_ver = re.search(r'/players/(\d{3})/(\d{3})/', raw_url)
            if m_ver:
                p1, p2 = m_ver.group(1), m_ver.group(2)
                for v in VERSIONS:
                    v_url = f"https://cdn.sofifa.net/players/{p1}/{p2}/{v}"
                    if v_url not in urls_to_try:
                        urls_to_try.append(v_url)

            success_data = None
            success_content_type = 'image/png'

            for target_url in urls_to_try:
                try:
                    req = urllib.request.Request(
                        target_url,
                        headers={
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                            'Referer': 'https://sofifa.com/'
                        }
                    )
                    with urllib.request.urlopen(req, timeout=4) as response:
                        if response.status == 200:
                            data = response.read()
                            if len(data) > 500:
                                success_data = data
                                success_content_type = response.headers.get('Content-Type', 'image/png')
                                break
                except Exception:
                    continue

            if success_data:
                # Guardar automáticamente en disco para futuras peticiones ultra-rápidas
                try:
                    save_pid = None
                    if m_ver:
                        save_pid = str(int(m_ver.group(1) + m_ver.group(2)))
                    elif m_ea:
                        save_pid = m_ea.group(1)
                    if save_pid:
                        cache_file = os.path.join(self.directory, "assets", "faces", f"{save_pid}.png")
                        os.makedirs(os.path.dirname(cache_file), exist_ok=True)
                        with open(cache_file, "wb") as f:
                            f.write(success_data)
                except Exception:
                    pass

                self.send_response(200)
                self.send_header('Content-Type', success_content_type)
                self.send_header('Content-Length', str(len(success_data)))
                self.send_header('Cache-Control', 'public, max-age=604800')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(success_data)
                return

            # 3. Si falla la descarga remota o no hay conexión, servir assets/silhouette.png como fallback
            silhouette_path = os.path.join(self.directory, "assets", "silhouette.png")
            if os.path.exists(silhouette_path):
                with open(silhouette_path, "rb") as f:
                    img_data = f.read()
                self.send_response(200)
                self.send_header('Content-Type', 'image/png')
                self.send_header('Content-Length', str(len(img_data)))
                self.send_header('Cache-Control', 'no-cache')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(img_data)
                return

            self.send_response(404)
            self.end_headers()
            return

        return super().do_GET()

def start_local_server(ui_dir, port):
    """Inicia el servidor HTTP local en un hilo daemon"""
    handler = lambda *args, **kwargs: PacybitsHTTPRequestHandler(*args, directory=ui_dir, **kwargs)
    httpd = socketserver.TCPServer(('127.0.0.1', port), handler)
    thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    thread.start()
    return httpd

def main():
    if getattr(sys, 'frozen', False):
        base_dir = os.path.dirname(sys.executable)
    else:
        base_dir = os.path.dirname(os.path.abspath(__file__))

    api = PacybitsAPI(base_dir)
    ui_dir = get_resource_path("ui")
    port = find_free_port()

    # Iniciar servidor local con proxy de imágenes
    start_local_server(ui_dir, port)
    app_url = f"http://127.0.0.1:{port}/index.html"

    # Crear ventana desktop nativa
    window = webview.create_window(
        title="PacyBits FC 27 - Ultimate Desktop",
        url=app_url,
        js_api=api,
        width=1340,
        height=850,
        min_size=(1080, 720),
        background_color="#060913"
    )

    # Iniciar motor webview nativo (Edge Chromium en Windows 10/11)
    webview.start(debug=False)

if __name__ == "__main__":
    main()
