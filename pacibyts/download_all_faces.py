# -*- coding: utf-8 -*-
"""
download_all_faces.py
=====================
Descargador multihilo concurrente para descargar las caras de todos los
jugadores (o filtrados por rating) directamente al directorio local ui/assets/faces/
"""

import os
import sys
import sqlite3
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(SCRIPT_DIR, "ui", "fc_database.db")
FACES_DIR = os.path.join(SCRIPT_DIR, "ui", "assets", "faces")
os.makedirs(FACES_DIR, exist_ok=True)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Referer": "https://sofifa.com/"
}

VERSIONS = ["25_120.png", "24_120.png", "23_120.png", "22_120.png", "21_120.png", "20_120.png", "19_120.png"]

def download_single_face(player_id, face_url=None):
    dest_path = os.path.join(FACES_DIR, f"{player_id}.png")
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        return "EXISTE"

    sid_str = str(player_id).zfill(6)
    part1 = sid_str[:3]
    part2 = sid_str[3:]

    # Intentar con la URL directa provista o versiones de temporada
    urls_to_try = []
    if face_url:
        urls_to_try.append(face_url)
    
    for ver in VERSIONS:
        cand = f"https://cdn.sofifa.net/players/{part1}/{part2}/{ver}"
        if cand not in urls_to_try:
            urls_to_try.append(cand)

    for url in urls_to_try:
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=5) as res:
                if res.status == 200:
                    data = res.read()
                    if len(data) > 1000:
                        with open(dest_path, "wb") as f:
                            f.write(data)
                        return "DESCARGADO"
        except Exception:
            continue

    return "FALLIDO"

def main():
    if not os.path.exists(DB_PATH):
        print(f"[ERROR] No existe {DB_PATH}")
        return

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # Prioridad: Rating más alto primero
    cur.execute("SELECT player_id, face_url, overall_rating, display_name FROM players ORDER BY overall_rating DESC, player_id ASC")
    rows = cur.fetchall()
    conn.close()

    total = len(rows)
    print(f"=== INICIANDO DESCARGA CONCURRENTE DE CARAS ===")
    print(f"Total de jugadores en base de datos: {total}")
    print(f"Destino: {FACES_DIR}")
    print(f"Hilos concurrentes: 16")
    print("--------------------------------------------------")

    downloaded = 0
    already_had = 0
    failed = 0
    processed = 0

    start_time = time.time()

    with ThreadPoolExecutor(max_workers=16) as executor:
        future_map = {
            executor.submit(download_single_face, row[0], row[1]): (row[0], row[2], row[3])
            for row in rows
        }

        for future in as_completed(future_map):
            pid, rating, name = future_map[future]
            processed += 1
            try:
                result = future.result()
                if result == "DESCARGADO":
                    downloaded += 1
                elif result == "EXISTE":
                    already_had += 1
                else:
                    failed += 1
            except Exception:
                failed += 1

            if processed % 100 == 0 or processed == total:
                elapsed = time.time() - start_time
                rate = processed / elapsed if elapsed > 0 else 0
                remaining = (total - processed) / rate if rate > 0 else 0
                print(f"Progreso: {processed}/{total} ({processed*100//total}%) | Descargados: {downloaded} | Ya existían: {already_had} | Fallidos: {failed} | Restante: ~{int(remaining)}s")

    print("\n================ RESUMEN FINAL ================")
    print(f"Procesados: {processed}")
    print(f"Nuevas caras descargadas: {downloaded}")
    print(f"Caras ya presentes: {already_had}")
    print(f"Fallidos: {failed}")
    print(f"Tiempo total: {int(time.time() - start_time)} segundos.")

if __name__ == "__main__":
    main()
