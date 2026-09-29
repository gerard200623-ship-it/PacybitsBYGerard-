# -*- coding: utf-8 -*-
"""
convert_faces_to_webp.py
========================
Convierte masivamente todas las imágenes de caras de futbolistas de .png a .webp.
- Optimiza el espacio en disco reduciendo el peso en ~75%.
- Preserva canales alfa / transparencia RGBA y máxima fidelidad visual.
- Procesa:
    * ui/assets/faces/
    * assets/faces/
    * dist/ui/assets/faces/ (si existe)
- Verificación de integridad: solo elimina el archivo .png original si el .webp
  se generó correctamente y tiene un tamaño válido (> 500 bytes).
"""

import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DIRECTORIES = [
    os.path.join(SCRIPT_DIR, "ui", "assets", "faces"),
    os.path.join(SCRIPT_DIR, "assets", "faces"),
    os.path.join(SCRIPT_DIR, "dist", "ui", "assets", "faces")
]

def convert_single_image(png_path):
    """Convierte un único archivo PNG a WEBP y elimina el PNG si es exitoso"""
    webp_path = os.path.splitext(png_path)[0] + ".webp"
    try:
        orig_size = os.path.getsize(png_path)
        if orig_size < 500:
            # Archivo dañado o vacío, omitir o eliminar
            return {"status": "error", "error": "file too small"}

        # Si ya existe el webp y tiene buen tamaño
        if os.path.exists(webp_path) and os.path.getsize(webp_path) > 500:
            new_size = os.path.getsize(webp_path)
            try:
                os.remove(png_path)
            except Exception:
                pass
            return {"status": "already_webp", "orig": orig_size, "new": new_size}

        with Image.open(png_path) as im:
            # Preservar modo RGBA o convertir a RGBA si tiene transparencia
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA")
            im.save(webp_path, format="WEBP", quality=85, method=4)

        new_size = os.path.getsize(webp_path)
        if new_size > 500:
            # Eliminar original PNG
            try:
                os.remove(png_path)
            except Exception:
                pass
            return {"status": "converted", "orig": orig_size, "new": new_size}
        else:
            return {"status": "error", "error": "webp output too small"}

    except Exception as e:
        return {"status": "error", "error": str(e), "path": png_path}

def process_directory(directory, workers=24):
    if not os.path.exists(directory):
        return

    print(f"\nProcesando directorio: {directory}")
    png_files = [
        os.path.join(directory, f) for f in os.listdir(directory)
        if f.lower().endswith(".png")
    ]

    total_files = len(png_files)
    print(f"  * Total archivos .png a convertir: {total_files:,}")
    if total_files == 0:
        return

    start_time = time.time()
    converted_count = 0
    error_count = 0
    total_orig_bytes = 0
    total_new_bytes = 0

    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(convert_single_image, p): p for p in png_files}

        for i, future in enumerate(as_completed(futures), 1):
            res = future.result()
            if res["status"] in ("converted", "already_webp"):
                converted_count += 1
                total_orig_bytes += res.get("orig", 0)
                total_new_bytes += res.get("new", 0)
            else:
                error_count += 1

            if i % 2500 == 0 or i == total_files:
                pct = (i / total_files) * 100
                print(f"    Progreso: {i:,}/{total_files:,} ({pct:.1f}%) ...", flush=True)

    elapsed = time.time() - start_time
    saved_bytes = total_orig_bytes - total_new_bytes
    saved_mb = saved_bytes / (1024 * 1024)
    pct_saved = (saved_bytes / total_orig_bytes * 100) if total_orig_bytes > 0 else 0

    print(f"  -> Completado en {elapsed:.1f}s.")
    print(f"  -> Convertidas con exito: {converted_count:,} imagenes")
    if error_count > 0:
        print(f"  -> Errores: {error_count}")
    print(f"  -> Espacio original: {total_orig_bytes / (1024*1024):.2f} MB")
    print(f"  -> Espacio nuevo:    {total_new_bytes / (1024*1024):.2f} MB")
    print(f"  -> Espacio ahorrado: {saved_mb:.2f} MB ({pct_saved:.1f}% de reduccion)")

def main():
    print("=" * 70)
    print("      CONVERSION MASIVA DE CARAS A .WEBP - PACYBITS FC 27")
    print("=" * 70)

    total_start = time.time()
    for d in DIRECTORIES:
        process_directory(d)

    total_elapsed = time.time() - total_start
    print("\n" + "=" * 70)
    print(f"CONVERSION FINALIZADA EN {total_elapsed:.1f}s")
    print("======================================================================\n")

if __name__ == "__main__":
    main()
