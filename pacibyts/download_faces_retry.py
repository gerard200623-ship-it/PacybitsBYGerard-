# -*- coding: utf-8 -*-
"""
download_faces_retry.py
=======================
Descargador Robusto y Multi-Fuente de Caras Reales para PacyBits FC 27.
- Descarga a 'assets/faces/{id}.png' y sincroniza en 'ui/assets/faces/{id}.png'.
- Estrategia Multi-URL en cascada:
    1. EA Sports Web App CDN:
       https://www.easports.com/fifa/ultimate-team/web-app/content/24B23FDE-7835-41C2-87A2-F45385E8628B/2024/fut/items/images/mobile/portraits/{id}.png
    2. SoFIFA CDN (formato por bloques de 3 dígitos con zfill(6)):
       https://cdn.sofifa.net/players/{p1}/{p2}/25_120.png (y fallback 24_120.png)
    3. EA Sports Pulse CDN Oficial (FC 25):
       https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p{id}.png?padding=0.7
- Comprobación de integridad:
    * Solo guarda con HTTP 200 y tamaño > 3000 bytes (> 3 KB) para evitar guardar páginas HTML.
    * Omite archivos que ya existan localmente y pesen > 3 KB.
- Priorización inteligente:
    * Fase 1: Descarga prioritaria de jugadores con rating >= 78 (Estrellas, Walkouts y Oro Top).
    * Fase 2: Descarga del resto de jugadores (rating < 78).
- Concurrencia con ThreadPoolExecutor y cabeceras de navegador realistas.
"""

import os
import sys
import csv
import json
import time
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(SCRIPT_DIR, "ui", "players.csv")
TARGET_DIR_ROOT = os.path.join(SCRIPT_DIR, "assets", "faces")
TARGET_DIR_UI = os.path.join(SCRIPT_DIR, "ui", "assets", "faces")
TARGET_DIR_DIST = os.path.join(SCRIPT_DIR, "dist", "ui", "assets", "faces")
MANIFEST_PATH = os.path.join(SCRIPT_DIR, "ui", "local_faces_manifest.json")

HEADERS_BASE = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
}

HEADERS_SOFIFA = {
    **HEADERS_BASE,
    "Referer": "https://sofifa.com/",
    "Origin": "https://sofifa.com",
}

MIN_IMG_BYTES = 3000  # Más de 3 KB para descartar respuestas HTML o iconos de error

def get_candidate_urls(pid, custom_face_url=""):
    """Genera la lista ordenada de URLs candidatas para un jugador"""
    sid = str(pid).zfill(6)
    p1, p2 = sid[:3], sid[3:]
    
    urls = [
        # Fuente 1: EA Sports CDN Mobile Portraits
        (f"https://www.easports.com/fifa/ultimate-team/web-app/content/24B23FDE-7835-41C2-87A2-F45385E8628B/2024/fut/items/images/mobile/portraits/{pid}.png", HEADERS_BASE),
        # Fuente 2: SoFIFA CDN 25_120
        (f"https://cdn.sofifa.net/players/{p1}/{p2}/25_120.png", HEADERS_SOFIFA),
        # Fuente 2b: SoFIFA CDN 24_120 (fallback)
        (f"https://cdn.sofifa.net/players/{p1}/{p2}/24_120.png", HEADERS_SOFIFA),
        # Fuente 3: EA Pulse CDN Oficial
        (f"https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p{pid}.png?padding=0.7", HEADERS_BASE)
    ]

    # Si el CSV incluye una URL específica adicional no contemplada arriba
    if custom_face_url and custom_face_url.startswith("http") and not any(custom_face_url in u[0] for u in urls):
        urls.append((custom_face_url, HEADERS_BASE))

    return urls

import io
from PIL import Image

def is_already_downloaded(pid):
    """Comprueba si el jugador ya está descargado válidamente en formato .webp o .png"""
    for ext in (".webp", ".png"):
        path_root = os.path.join(TARGET_DIR_ROOT, f"{pid}{ext}")
        path_ui = os.path.join(TARGET_DIR_UI, f"{pid}{ext}")
        
        if os.path.exists(path_root) and os.path.getsize(path_root) > 500:
            if not os.path.exists(path_ui) or os.path.getsize(path_ui) <= 500:
                try:
                    import shutil
                    shutil.copy2(path_root, path_ui)
                except Exception:
                    pass
            return True

        if os.path.exists(path_ui) and os.path.getsize(path_ui) > 500:
            if not os.path.exists(path_root) or os.path.getsize(path_root) <= 500:
                try:
                    import shutil
                    shutil.copy2(path_ui, path_root)
                except Exception:
                    pass
            return True

    return False

def save_image_bytes(pid, content):
    """Convierte los bytes a .webp de máxima calidad y guarda en assets/faces y ui/assets/faces"""
    path_root = os.path.join(TARGET_DIR_ROOT, f"{pid}.webp")
    path_ui = os.path.join(TARGET_DIR_UI, f"{pid}.webp")

    try:
        with Image.open(io.BytesIO(content)) as im:
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA")
            im.save(path_ui, format="WEBP", quality=85, method=4)

        # Copiar a root y dist
        import shutil
        shutil.copy2(path_ui, path_root)

        if os.path.exists(TARGET_DIR_DIST):
            path_dist = os.path.join(TARGET_DIR_DIST, f"{pid}.webp")
            shutil.copy2(path_ui, path_dist)
    except Exception:
        # Fallback directo si fallara Pillow
        with open(path_ui, "wb") as f:
            f.write(content)
        with open(path_root, "wb") as f:
            f.write(content)

def download_single_face(session, player):
    """Intenta descargar la cara de un jugador usando la estrategia multi-URL"""
    pid = player["player_id"]
    name = player.get("display_name", f"Player {pid}")
    rating = int(player.get("overall_rating", 0))

    if is_already_downloaded(pid):
        return {"status": "skipped", "pid": pid, "name": name, "rating": rating}

    candidate_urls = get_candidate_urls(pid, player.get("face_url", ""))

    for url, headers in candidate_urls:
        try:
            resp = session.get(url, headers=headers, timeout=6)
            if resp.status_code == 200 and len(resp.content) > MIN_IMG_BYTES:
                # Comprobar firma de imagen (PNG o WebP o JPEG)
                magic = resp.content[:8]
                is_png = magic.startswith(b"\x89PNG\r\n\x1a\n")
                is_jpeg = magic.startswith(b"\xff\xd8\xff")
                is_webp = b"WEBP" in resp.content[:16]

                if is_png or is_jpeg or is_webp:
                    save_image_bytes(pid, resp.content)
                    return {
                        "status": "success",
                        "pid": pid,
                        "name": name,
                        "rating": rating,
                        "bytes": len(resp.content),
                        "source": "EA Sports" if "easports" in url else ("SoFIFA" if "sofifa" in url else "EA Pulse")
                    }
        except requests.RequestException:
            continue

    return {"status": "failed", "pid": pid, "name": name, "rating": rating}

def update_manifest():
    """Actualiza local_faces_manifest.json y database.js con las caras actuales en disco"""
    if not os.path.exists(TARGET_DIR_UI):
        return 0

    valid_faces = [
        os.path.splitext(f)[0] for f in os.listdir(TARGET_DIR_UI)
        if (f.lower().endswith(".webp") or f.lower().endswith(".png")) and os.path.getsize(os.path.join(TARGET_DIR_UI, f)) > 500
    ]

    try:
        with open(MANIFEST_PATH, "w", encoding="utf-8") as f:
            json.dump(valid_faces, f)
    except Exception as e:
        print(f"[!] Error guardando manifiesto: {e}")

    return len(valid_faces)

def main():
    parser = argparse.ArgumentParser(description="Descargador robusto de caras de futbolistas FC 27")
    parser.add_argument("--workers", type=int, default=16, help="Número de hilos concurrentes (default: 16)")
    parser.add_argument("--priority-only", action="store_true", help="Descargar únicamente jugadores prioritarios (rating >= 78)")
    parser.add_argument("--rating-min", type=int, default=0, help="Rating mínimo a procesar")
    parser.add_argument("--limit", type=int, default=0, help="Límite máximo de nuevas descargas (0 = sin límite)")
    args = parser.parse_args()

    os.makedirs(TARGET_DIR_ROOT, exist_ok=True)
    os.makedirs(TARGET_DIR_UI, exist_ok=True)

    print("=" * 70)
    print("      DESCARGADOR ROBUSTO DE CARAS REALES - PACYBITS FC 27")
    print("=" * 70)
    print(f"  * Directorio Raiz:   {TARGET_DIR_ROOT}")
    print(f"  * Directorio UI:     {TARGET_DIR_UI}")
    print(f"  * Hilos paralelos:   {args.workers}")
    print(f"  * Filtro integridad: HTTP 200 y tamano > {MIN_IMG_BYTES} bytes")
    print("=" * 70)

    if not os.path.exists(CSV_PATH):
        print(f"[ERROR] No se encontró el CSV en: {CSV_PATH}")
        sys.exit(1)

    with open(CSV_PATH, "r", encoding="utf-8") as f:
        players = list(csv.DictReader(f))

    if args.rating_min > 0:
        players = [p for p in players if int(p.get("overall_rating", 0)) >= args.rating_min]

    # Separar en Fase 1 (Prioritarios rating >= 78) y Fase 2 (Resto)
    priority_players = [p for p in players if int(p.get("overall_rating", 0)) >= 78]
    priority_players.sort(key=lambda p: -int(p.get("overall_rating", 0)))

    standard_players = [p for p in players if int(p.get("overall_rating", 0)) < 78]
    standard_players.sort(key=lambda p: -int(p.get("overall_rating", 0)))

    print(f"\nTotal jugadores en cola: {len(players):,}")
    print(f"  -> FASE 1 (Prioritarios rating >= 78): {len(priority_players):,} estrellas y walkouts")
    print(f"  -> FASE 2 (Estandar rating < 78):      {len(standard_players):,} jugadores")

    session = requests.Session()
    session.mount("https://", requests.adapters.HTTPAdapter(pool_connections=args.workers * 2, pool_maxsize=args.workers * 2, max_retries=1))

    total_downloaded = 0
    total_skipped = 0
    total_failed = 0

    def process_batch(player_batch, phase_name):
        nonlocal total_downloaded, total_skipped, total_failed
        if not player_batch:
            return

        print(f"\n>>> INICIANDO {phase_name} ({len(player_batch):,} futbolistas) <<<")
        start_time = time.time()
        batch_downloaded = 0
        batch_skipped = 0
        batch_failed = 0

        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            future_to_player = {
                executor.submit(download_single_face, session, p): p for p in player_batch
            }

            for future in as_completed(future_to_player):
                res = future.result()
                status = res["status"]

                if status == "success":
                    batch_downloaded += 1
                    total_downloaded += 1
                    safe_name = res['name'].encode('ascii', 'replace').decode('ascii')
                    print(f"  [DESCARGADA] #{res['pid']} {safe_name} ({res['rating']}) - {res['bytes']:,} B ({res['source']})", flush=True)
                elif status == "skipped":
                    batch_skipped += 1
                    total_skipped += 1
                else:
                    batch_failed += 1
                    total_failed += 1

                if args.limit > 0 and total_downloaded >= args.limit:
                    print(f"\n[!] Limite de {args.limit} descargas alcanzado.", flush=True)
                    executor.shutdown(wait=False, cancel_futures=True)
                    break

        elapsed = time.time() - start_time
        print(f"\nResumen {phase_name}:", flush=True)
        print(f"  * Nuevas descargadas: {batch_downloaded}", flush=True)
        print(f"  * Omitidas (ya existian > 3KB): {batch_skipped}", flush=True)
        print(f"  * No disponibles: {batch_failed}", flush=True)
        print(f"  * Tiempo: {elapsed:.1f}s", flush=True)

    # Ejecutar Fase 1 (Prioritaria)
    process_batch(priority_players, "FASE 1: PRIORITARIOS (RATING >= 78)")

    # Ejecutar Fase 2 (Resto si no se especifico --priority-only y no se ha alcanzado el limite)
    if not args.priority_only and (args.limit == 0 or total_downloaded < args.limit):
        process_batch(standard_players, "FASE 2: ESTANDAR (RATING < 78)")

    # Actualizar Manifiesto y Database
    print("\n" + "=" * 70)
    print("               ACTUALIZACION DE MANIFIESTO Y REGISTROS")
    print("=" * 70)
    total_valid = update_manifest()
    print(f"  * Manifiesto actualizado en: {MANIFEST_PATH}")
    print(f"  * Total de caras locales activas y validas: {total_valid:,}")
    print("=" * 70)
    print(f"RESUMEN GLOBAL:")
    print(f"  * Descargas exitosas en esta sesion: {total_downloaded}")
    print(f"  * Omitidas previamente completadas: {total_skipped}")
    print(f"  * No encontradas en CDNs:            {total_failed}")
    print("======================================================================\n")

if __name__ == "__main__":
    main()
