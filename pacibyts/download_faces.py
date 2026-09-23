# -*- coding: utf-8 -*-
"""
Descargador de caras oficiales para Marc Casadó, Iconos y Héroes de Pacybits FC 27.
Descarga y guarda los assets en pacibyts/ui/assets/faces/
"""

import os
import urllib.request
import time

FACES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ui", "assets", "faces")
os.makedirs(FACES_DIR, exist_ok=True)

# Mapeo de IDs de jugadores a IDs de EA Sports / SoFIFA
PLAYERS_FACES_MAP = {
    # Marc Casadó
    "bronze_casado": [272600],
    "silver_casado": [272600],

    # Iconos
    "icon_pele": [237067],
    "icon_maradona": [190043],
    "icon_r9": [37576],
    "icon_zidane": [1397],
    "icon_cruyff": [242519],
    "icon_ronaldinho": [28130],
    "icon_maldini": [1075],
    "icon_henry": [1625],
    "icon_gullit": [214100],
    "icon_yashin": [238380],
    "icon_zico": [273391],
    "icon_muller": [264024],
    "icon_van_basten": [190044],
    "icon_baresi": [190042],
    "icon_puskas": [258884],
    "icon_baggio": [190041],
    "icon_eusebio": [242517],
    "icon_carlos_alberto": [242518],
    "icon_cafu": [1093],
    "icon_roberto_carlos": [1092],
    "icon_casillas": [5479],
    "icon_buffon": [1179],
    "icon_xavi": [10535],
    "icon_iniesta_icon": [10741],
    "icon_pirlo": [7763],
    "icon_matthaus": [1076],
    "icon_vieira": [1081],
    "icon_kaka": [138449],
    "icon_cantona": [190045],
    "icon_shevchenko": [1085],
    "icon_del_piero": [1077],
    "icon_nedved": [1078],
    "icon_bergkamp": [1079],
    "icon_puyol": [1082],
    "icon_cannavaro": [1083],
    "icon_schmeichel": [1084],
    "icon_van_der_sar": [1086],
    "icon_cech": [111165],
    "icon_drogba": [140184],
    "icon_torres": [1627],
    "icon_eto_o": [9676],
    "icon_raul": [1088],
    "icon_hierro": [1089],
    "icon_koeman": [1090],
    "icon_blanc": [1091],
    "icon_desailly": [1094],
    "icon_ferdinand": [1097],
    "icon_lahm": [121944],
    "icon_zanetti": [1098],
    "icon_scholes": [241],
    "icon_gerrard": [13743],
    "icon_lampard": [5462],
    "icon_rivaldo": [1095],
    "icon_figo": [1096],
    "icon_best": [242516],
    "icon_garrincha": [247346],
    "icon_jairzinho": [264023],
    "icon_ribery": [156616],
    "icon_robben": [9014],

    # Héroes
    "hero_ginola": [264875],
    "hero_toure": [167948],
    "hero_yaya_toure": [167948],
    "hero_lucio": [258885],
    "hero_forlan": [268000],
    "hero_di_natale": [264876],
    "hero_morientes": [264878],
    "hero_cordoba": [264874],
    "hero_kompany": [152999],
    "hero_carvalho": [135507],
    "hero_capdevila": [136138],
    "hero_marchisio": [173221],
    "hero_milito": [264882],
    "hero_kewell": [264883],
    "hero_govou": [264884],
    "hero_park_ji_sung": [264885],
    "hero_smolarek": [264886],
    "hero_kohler": [264887],
    "hero_tevez": [143001],
    "hero_ramires": [187936],
    "hero_futre": [264889],
    "hero_sneijder": [173731],
    "hero_hazard": [183277],
    "hero_maicon": [157427]
}

def download_face(player_key, sofifa_ids):
    dest_path = os.path.join(FACES_DIR, f"{player_key}.png")
    
    versions = ["25_120.png", "24_120.png", "23_120.png", "22_120.png", "21_120.png", "20_120.png", "19_120.png"]
    
    for sid in sofifa_ids:
        sid_str = str(sid).zfill(6)
        part1 = sid_str[:3]
        part2 = sid_str[3:]
        
        for ver in versions:
            url = f"https://cdn.sofifa.net/players/{part1}/{part2}/{ver}"
            try:
                req = urllib.request.Request(
                    url,
                    headers={
                        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
                        "Referer": "https://sofifa.com/"
                    }
                )
                with urllib.request.urlopen(req, timeout=4) as response:
                    data = response.read()
                    if len(data) > 1000:
                        with open(dest_path, "wb") as f:
                            f.write(data)
                        print(f"[OK] {player_key} descargado desde {ver} ({len(data)} bytes)")
                        return True
            except Exception:
                continue

    print(f"[FALLO] No se pudo descargar la cara para {player_key}")
    return False

def main():
    print(f"Iniciando descarga de {len(PLAYERS_FACES_MAP)} caras oficiales...")
    success = 0
    failed = 0
    for key, ids in PLAYERS_FACES_MAP.items():
        if download_face(key, ids):
            success += 1
        else:
            failed += 1
        time.sleep(0.05) # Pequeña pausa para cortesía del servidor
    print(f"\nFinalizado. Exitosos: {success}, Fallidos: {failed}")

if __name__ == "__main__":
    main()
