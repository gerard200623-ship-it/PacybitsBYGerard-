# -*- coding: utf-8 -*-
"""
generate_database_js.py
=======================
Genera database.js con PLAYERS_DB + PACKS_CONFIG para Pacybits FC 27.
- Incluye los 59 Iconos y 24 Héroes originales.
- Incluye los 21 jugadores Oficiales de Hall of FUT de EA SPORTS FC 27 con sus caras y precios en fichas moradas.
- Incluye todas las cartas reales de clubes de FC 27 procedentes de SQLite corregido.
- Genera cartas TOTW oficiales.
"""

import sqlite3
import os
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(SCRIPT_DIR, "ui", "fc_database.db")
JS_PATH = os.path.join(SCRIPT_DIR, "ui", "database.js")
LEGACY_JSON_PATH = os.path.join(SCRIPT_DIR, "legacy_icons_heroes.json")

# Mapeo de clubes a ID numérico para escudos locales
CLUBS_MAP = {
    "Real Madrid": {"name": "Real Madrid", "id": 86},
    "FC Barcelona": {"name": "FC Barcelona", "id": 81},
    "Manchester City": {"name": "Manchester City", "id": 65},
    "Liverpool": {"name": "Liverpool", "id": 64},
    "Bayern München": {"name": "Bayern München", "id": 5},
    "Arsenal": {"name": "Arsenal", "id": 57},
    "Chelsea": {"name": "Chelsea", "id": 61},
    "Manchester United": {"name": "Manchester United", "id": 66},
    "Paris Saint-Germain": {"name": "Paris Saint-Germain", "id": 524},
    "Paris SG": {"name": "Paris Saint-Germain", "id": 524},
    "Inter": {"name": "Inter", "id": 108},
    "Lombardia FC": {"name": "Inter", "id": 108},
    "AC Milan": {"name": "AC Milan", "id": 98},
    "Milano FC": {"name": "AC Milan", "id": 98},
    "Atlético de Madrid": {"name": "Atlético de Madrid", "id": 78},
    "Atlético Madrid": {"name": "Atlético de Madrid", "id": 78},
    "Bayer Leverkusen": {"name": "Bayer Leverkusen", "id": 3},
    "Bayer 04 Leverkusen": {"name": "Bayer Leverkusen", "id": 3},
    "Leverkusen": {"name": "Bayer Leverkusen", "id": 3},
    "Juventus": {"name": "Juventus", "id": 109},
    "Borussia Dortmund": {"name": "Borussia Dortmund", "id": 4},
    "Tottenham Hotspur": {"name": "Tottenham Hotspur", "id": 73},
    "Spurs": {"name": "Tottenham Hotspur", "id": 73},
    "Roma": {"name": "Roma", "id": 100},
    "AS Roma": {"name": "Roma", "id": 100},
    "Napoli": {"name": "Napoli", "id": 113},
    "SSC Napoli": {"name": "Napoli", "id": 113},
    "Newcastle United": {"name": "Newcastle United", "id": 67},
    "Aston Villa": {"name": "Aston Villa", "id": 2},
    "Brighton": {"name": "Brighton", "id": 1808},
    "Athletic Club": {"name": "Athletic Club", "id": 77},
    "Real Betis": {"name": "Real Betis", "id": 90},
    "Sevilla FC": {"name": "Sevilla", "id": 559},
    "Sevilla": {"name": "Sevilla", "id": 559},
    "Real Sociedad": {"name": "Real Sociedad", "id": 92},
    "Villarreal": {"name": "Villarreal", "id": 94},
    "Girona": {"name": "Girona", "id": 298},
    "Atalanta": {"name": "Atalanta", "id": 102},
    "Lazio": {"name": "Lazio", "id": 110},
    "Fulham": {"name": "Fulham", "id": 63},
    "Wolverhampton": {"name": "Wolverhampton", "id": 76},
    "Everton": {"name": "Everton", "id": 62},
    "West Ham": {"name": "West Ham", "id": 563},
    "Marseille": {"name": "Marseille", "id": 516},
    "Monaco": {"name": "Monaco", "id": 548},
    "RB Leipzig": {"name": "RB Leipzig", "id": 721},
    "Eintracht Frankfurt": {"name": "Eintracht Frankfurt", "id": 19},
    "Frankfurt": {"name": "Eintracht Frankfurt", "id": 19},
    "Porto": {"name": "Porto", "id": 503},
    "FC Porto": {"name": "Porto", "id": 503},
    "Sporting CP": {"name": "Sporting CP", "id": 1903},
    "Benfica": {"name": "Benfica", "id": 234},
    "SL Benfica": {"name": "Benfica", "id": 234},
    "Ajax": {"name": "Ajax", "id": 678},
    "PSV": {"name": "PSV", "id": 674},
    "Feyenoord": {"name": "Feyenoord", "id": 675},
    "Galatasaray": {"name": "Galatasaray", "id": 610},
    "Fenerbahce": {"name": "Fenerbahce", "id": 611},
    "Fenerbahçe": {"name": "Fenerbahce", "id": 611},
    "Como": {"name": "Como", "id": "como"},
    "River Plate": {"name": "River Plate", "id": "river"},
    "Boca Juniors": {"name": "Boca Juniors", "id": "boca"},
    "Palmeiras": {"name": "Palmeiras", "id": "palmeiras"},
    "Inter Miami": {"name": "Inter Miami", "id": "inter_miami"},
    "Inter Miami CF": {"name": "Inter Miami", "id": "inter_miami"},
    "Al Nassr": {"name": "Al Nassr", "id": "al_nassr"},
    "Al Hilal": {"name": "Al Hilal", "id": "al_hilal"},
    "Al Ittihad": {"name": "Al Ittihad", "id": "al_ittihad"},
}

# ── 21 Jugadores Oficiales de Hall of FUT (EA SPORTS FC 27) ──
HOF_PLAYERS = [
    {
        "id": "hof_hulk", "name": "Hulk", "fullName": "Givanildo Vieira de Sousa",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Liga Portugal", "badge": "hof"},
        "stats": {"pac": 88, "sho": 92, "pas": 80, "dri": 86, "def": 45, "phy": 91},
        "faceUrl": "assets/faces/hof_hulk.webp", "quickSell": 50000, "tokenPrice": 750
    },
    {
        "id": "hof_balotelli", "name": "Balotelli", "fullName": "Mario Barwuah Balotelli",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 85, "sho": 88, "pas": 78, "dri": 86, "def": 34, "phy": 85},
        "faceUrl": "assets/faces/hof_balotelli.webp", "quickSell": 48000, "tokenPrice": 700
    },
    {
        "id": "hof_pato", "name": "Alexandre Pato", "fullName": "Alexandre Rodrigues da Silva",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 91, "sho": 86, "pas": 77, "dri": 88, "def": 36, "phy": 74},
        "faceUrl": "assets/faces/hof_pato.webp", "quickSell": 48000, "tokenPrice": 700
    },
    {
        "id": "hof_david_luiz", "name": "David Luiz", "fullName": "David Luiz Moreira Marinho",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DFC",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 78, "sho": 68, "pas": 79, "dri": 76, "def": 86, "phy": 85},
        "faceUrl": "assets/faces/hof_david_luiz.webp", "quickSell": 45000, "tokenPrice": 650
    },
    {
        "id": "hof_fellaini", "name": "Fellaini", "fullName": "Marouane Fellaini-Bakkioui",
        "rating": 85, "cardType": "hall_of_fut", "pos": "MC",
        "nation": {"name": "Bélgica", "code": "be"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 74, "sho": 81, "pas": 78, "dri": 79, "def": 78, "phy": 90},
        "faceUrl": "assets/faces/hof_fellaini.webp", "quickSell": 45000, "tokenPrice": 650
    },
    {
        "id": "hof_walcott", "name": "Theo Walcott", "fullName": "Theo James Walcott",
        "rating": 85, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 96, "sho": 81, "pas": 78, "dri": 85, "def": 38, "phy": 68},
        "faceUrl": "assets/faces/hof_walcott.webp", "quickSell": 45000, "tokenPrice": 650
    },
    {
        "id": "hof_valencia", "name": "Antonio Valencia", "fullName": "Luis Antonio Valencia Mosquera",
        "rating": 85, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Ecuador", "code": "ec"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 92, "sho": 76, "pas": 82, "dri": 84, "def": 81, "phy": 86},
        "faceUrl": "assets/faces/hof_valencia.webp", "quickSell": 42000, "tokenPrice": 600
    },
    {
        "id": "hof_blaszczykowski", "name": "Błaszczykowski", "fullName": "Jakub Błaszczykowski",
        "rating": 85, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Polonia", "code": "pl"},
        "club": {"name": "Bundesliga", "badge": "hof"},
        "stats": {"pac": 93, "sho": 78, "pas": 80, "dri": 84, "def": 60, "phy": 77},
        "faceUrl": "assets/faces/hof_blaszczykowski.webp", "quickSell": 42000, "tokenPrice": 600
    },
    {
        "id": "hof_richards", "name": "Micah Richards", "fullName": "Micah Lincoln Richards",
        "rating": 85, "cardType": "hall_of_fut", "pos": "LD",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 85, "sho": 58, "pas": 71, "dri": 75, "def": 85, "phy": 89},
        "faceUrl": "assets/faces/hof_richards.webp", "quickSell": 40000, "tokenPrice": 550
    },
    {
        "id": "hof_akinfenwa", "name": "Akinfenwa", "fullName": "Adebayo Akinfenwa",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "EFL", "badge": "hof"},
        "stats": {"pac": 70, "sho": 83, "pas": 68, "dri": 76, "def": 42, "phy": 99},
        "faceUrl": "assets/faces/hof_akinfenwa.webp", "quickSell": 38000, "tokenPrice": 500
    },
    {
        "id": "hof_ibarbo", "name": "Victor Ibarbo", "fullName": "Segundo Víctor Ibarbo Guerrero",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Colombia", "code": "co"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 94, "sho": 79, "pas": 74, "dri": 84, "def": 45, "phy": 86},
        "faceUrl": "assets/faces/hof_ibarbo.webp", "quickSell": 38000, "tokenPrice": 500
    },
    {
        "id": "hof_doumbia", "name": "Seydou Doumbia", "fullName": "Seydou Doumbia",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Costa de Marfil", "code": "ci"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 93, "sho": 84, "pas": 72, "dri": 83, "def": 35, "phy": 79},
        "faceUrl": "assets/faces/hof_doumbia.webp", "quickSell": 38000, "tokenPrice": 500
    },
    {
        "id": "hof_dos_santos", "name": "G. dos Santos", "fullName": "Giovani dos Santos Ramírez",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "México", "code": "mx"},
        "club": {"name": "LaLiga", "badge": "hof"},
        "stats": {"pac": 88, "sho": 81, "pas": 82, "dri": 88, "def": 38, "phy": 68},
        "faceUrl": "assets/faces/hof_dos_santos.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_remy", "name": "Loïc Rémy", "fullName": "Loïc Alex Teliere Hubert Rémy",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Francia", "code": "fr"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 91, "sho": 84, "pas": 73, "dri": 82, "def": 35, "phy": 77},
        "faceUrl": "assets/faces/hof_remy.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_gervinho", "name": "Gervinho", "fullName": "Gervais Lombe Yao Kouassi",
        "rating": 84, "cardType": "hall_of_fut", "pos": "EI",
        "nation": {"name": "Costa de Marfil", "code": "ci"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 93, "sho": 78, "pas": 76, "dri": 87, "def": 34, "phy": 72},
        "faceUrl": "assets/faces/hof_gervinho.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_emenike", "name": "Emmanuel Emenike", "fullName": "Emmanuel Chinenye Emenike",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Nigeria", "code": "ng"},
        "club": {"name": "Süper Lig", "badge": "hof"},
        "stats": {"pac": 91, "sho": 83, "pas": 68, "dri": 78, "def": 36, "phy": 92},
        "faceUrl": "assets/faces/hof_emenike.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_elia", "name": "Eljero Elia", "fullName": "Eljero George Rinaldo Elia",
        "rating": 84, "cardType": "hall_of_fut", "pos": "EI",
        "nation": {"name": "Países Bajos", "code": "nl"},
        "club": {"name": "Bundesliga", "badge": "hof"},
        "stats": {"pac": 92, "sho": 78, "pas": 77, "dri": 87, "def": 36, "phy": 70},
        "faceUrl": "assets/faces/hof_elia.webp", "quickSell": 32000, "tokenPrice": 400
    },
    {
        "id": "hof_guarin", "name": "Fredy Guarín", "fullName": "Fredy Alejandro Guarín Vásquez",
        "rating": 84, "cardType": "hall_of_fut", "pos": "MC",
        "nation": {"name": "Colombia", "code": "co"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 78, "sho": 86, "pas": 82, "dri": 80, "def": 77, "phy": 88},
        "faceUrl": "assets/faces/hof_guarin.webp", "quickSell": 32000, "tokenPrice": 400
    },
    {
        "id": "hof_layun", "name": "Miguel Layún", "fullName": "Miguel Arturo Layún Prado",
        "rating": 84, "cardType": "hall_of_fut", "pos": "LI",
        "nation": {"name": "México", "code": "mx"},
        "club": {"name": "Liga Portugal", "badge": "hof"},
        "stats": {"pac": 87, "sho": 78, "pas": 81, "dri": 80, "def": 78, "phy": 80},
        "faceUrl": "assets/faces/hof_layun.webp", "quickSell": 30000, "tokenPrice": 350
    },
    {
        "id": "hof_florenzi", "name": "Florenzi", "fullName": "Alessandro Florenzi",
        "rating": 84, "cardType": "hall_of_fut", "pos": "LD",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "Serie A", "badge": "hof"},
        "stats": {"pac": 85, "sho": 77, "pas": 82, "dri": 83, "def": 81, "phy": 78},
        "faceUrl": "assets/faces/hof_florenzi.webp", "quickSell": 30000, "tokenPrice": 350
    },
    {
        "id": "hof_mcgeady", "name": "Aiden McGeady", "fullName": "Aiden John McGeady",
        "rating": 84, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Irlanda", "code": "ie"},
        "club": {"name": "Premier League", "badge": "hof"},
        "stats": {"pac": 89, "sho": 76, "pas": 80, "dri": 88, "def": 38, "phy": 66},
        "faceUrl": "assets/faces/hof_mcgeady.webp", "quickSell": 28000, "tokenPrice": 300
    }
]

# Lista estricta de TOTWs oficiales que salieron en el juego oficial de EA SPORTS FC
# NUNCA generar TOTWs automáticos para jugadores que no han salido en TOTW oficial (como Kevin De Bruyne, Rodri, etc.)
OFFICIAL_TOTW_MAP = {
    # TOTW 1
    158023: {"ovr": 89, "face": ""},  # Lionel Messi (Inter Miami)
    232656: {"ovr": 88, "face": ""},  # Theo Hernández (AC Milan)
    231443: {"ovr": 87, "face": ""},  # Ousmane Dembélé (Paris Saint-Germain)
    165153: {"ovr": 87, "face": ""},  # Karim Benzema (Al-Ittihad)
    232580: {"ovr": 87, "face": ""},  # Gabriel (Arsenal)
    247635: {"ovr": 86, "face": ""},  # Khvicha Kvaratskhelia (Napoli)
    277643: {"ovr": 84, "face": "assets/faces/totw_yamal.webp"},  # Lamine Yamal (FC Barcelona)
    247679: {"ovr": 84, "face": ""},  # Victor Boniface (Bayer Leverkusen)
    251852: {"ovr": 82, "face": ""},  # Karim Adeyemi (Borussia Dortmund)
    215316: {"ovr": 82, "face": ""},  # Gerónimo Rulli (Marseille)
    244778: {"ovr": 82, "face": ""},  # Francisco Trincão (Sporting CP)

    # TOTW 2
    238794: {"ovr": 91, "face": "assets/faces/totw_vinicius.webp"},  # Vini Jr. (Real Madrid)
    256630: {"ovr": 89, "face": ""},  # Florian Wirtz (Bayer Leverkusen)
    200104: {"ovr": 88, "face": ""},  # Heung-min Son (Tottenham Hotspur)
    239580: {"ovr": 87, "face": ""},  # Bremer (Juventus)
    233419: {"ovr": 86, "face": ""},  # Raphinha (FC Barcelona)
    241084: {"ovr": 86, "face": ""},  # Luis Díaz (Liverpool)
    247827: {"ovr": 84, "face": ""},  # Michael Olise (Bayern München)

    # TOTW 3
    231478: {"ovr": 90, "face": ""},  # Lautaro Martínez (Inter)
    257534: {"ovr": 86, "face": "assets/faces/totw_palmer.webp"},  # Cole Palmer (Chelsea)
    240130: {"ovr": 86, "face": ""},  # Éder Militão (Real Madrid)
    251566: {"ovr": 86, "face": ""},  # Gabriel Martinelli (Arsenal)
    264453: {"ovr": 84, "face": ""},  # Micky van de Ven (Tottenham Hotspur)
    243630: {"ovr": 84, "face": ""},  # Jonathan David (LOSC Lille)
    256675: {"ovr": 82, "face": ""},  # Omar Marmoush (Eintracht Frankfurt)

    # TOTW 4
    239053: {"ovr": 89, "face": ""},  # Federico Valverde (Real Madrid)
    188545: {"ovr": 89, "face": ""},  # Robert Lewandowski (FC Barcelona)
    246669: {"ovr": 88, "face": ""},  # Bukayo Saka (Arsenal)
    208722: {"ovr": 86, "face": ""},  # Sadio Mané (Al Nassr)
    207410: {"ovr": 85, "face": ""},  # Mateo Kovačić (Manchester City)
    192505: {"ovr": 84, "face": ""},  # Romelu Lukaku (Napoli)
    241850: {"ovr": 84, "face": ""},  # Mateo Retegui (Atalanta)
    205186: {"ovr": 84, "face": ""},  # Paulo Gazzaniga (Girona)

    # TOTW 5
    215441: {"ovr": 86, "face": ""},  # Serhou Guirassy (Borussia Dortmund)
    207421: {"ovr": 85, "face": ""},  # Leandro Trossard (Arsenal)
    236772: {"ovr": 84, "face": ""},  # Dominik Szoboszlai (Liverpool)
    233096: {"ovr": 84, "face": ""},  # Denzel Dumfries (Inter)

    # TOTW 6
    202126: {"ovr": 91, "face": ""},  # Harry Kane (Bayern München)
    251854: {"ovr": 87, "face": ""},  # Pedri (FC Barcelona)
    241852: {"ovr": 85, "face": ""},  # Moussa Diaby (Al Ittihad)
    251517: {"ovr": 85, "face": ""},  # Joško Gvardiol (Manchester City)
    204638: {"ovr": 85, "face": ""},  # Willi Orbán (RB Leipzig)
    201399: {"ovr": 85, "face": ""},  # Mauro Icardi (Galatasaray)
    213648: {"ovr": 83, "face": ""},  # Pierre-Emile Højbjerg (Marseille)

    # TOTWs reales adicionales
    246430: {"ovr": 85, "face": ""},  # Dušan Vlahović (Juventus)
    241651: {"ovr": 86, "face": ""},  # Viktor Gyökeres (Sporting CP)
}


def main():
    # 1. Cargar Iconos y Héroes del JSON
    all_special = []
    if os.path.exists(LEGACY_JSON_PATH):
        with open(LEGACY_JSON_PATH, "r", encoding="utf-8") as f:
            legacy = json.load(f)
            all_special.extend(legacy.get("icons", []))
            all_special.extend(legacy.get("heroes", []))
            print(f"Cargados {len(legacy.get('icons', []))} Iconos y {len(legacy.get('heroes', []))} Héroes.")
    else:
        print(f"AVISO: No se encontró {LEGACY_JSON_PATH}")

    # 2. Añadir los 21 Hall of FUT Oficiales
    all_special.extend(HOF_PLAYERS)
    print(f"Añadidos {len(HOF_PLAYERS)} jugadores oficiales de Hall of FUT.")

    special_ids = {str(c["id"]) for c in all_special}

    # 3. Leer SQLite corregido
    if not os.path.exists(DB_PATH):
        print(f"ERROR: No se encuentra {DB_PATH}.")
        return

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute("SELECT * FROM players ORDER BY overall_rating DESC, player_id ASC")
    rows = cur.fetchall()
    conn.close()

    print(f"Jugadores leídos de SQLite: {len(rows)}")

    players_js = []
    # Añadir primero especiales (Iconos, Héroes, Hall of FUT)
    for s in all_special:
        players_js.append(s)

    totw_generated = 0
    # 5. Añadir jugadores de SQLite
    for row in rows:
        pid = row["player_id"]
        club_name = row["club_name"]
        club_data = {"name": club_name}
        if club_name in CLUBS_MAP:
            club_data["id"] = CLUBS_MAP[club_name]["id"]

        is_gk = row["position"] == "GK"
        base_stats = {
            "pac": row["gk_diving"] if is_gk else row["pace"],
            "sho": row["gk_handling"] if is_gk else row["shooting"],
            "pas": row["gk_kicking"] if is_gk else row["passing"],
            "dri": row["gk_reflexes"] if is_gk else row["dribbling"],
            "def": row["gk_positioning"] if is_gk else row["defending"],
            "phy": row["physicality"],
        }

        player_name = row["display_name"] or row["common_name"] or row["full_name"]
        player_obj = {
            "id": pid,
            "name": player_name,
            "fullName": row["full_name"],
            "rating": row["overall_rating"],
            "cardType": row["card_type"],
            "pos": row["position_es"],
            "gender": row["gender"] if "gender" in row.keys() else "Men's Football",
            "league": row["league"] if "league" in row.keys() else "",
            "nation": {
                "name": row["nation_name_es"],
                "code": row["nation_code"]
            },
            "club": club_data,
            "stats": base_stats,
            "faceUrl": row["face_url"],
            "quickSell": row["quick_sell"]
        }
        players_js.append(player_obj)

        # Generar carta TOTW ÚNICAMENTE si está en OFFICIAL_TOTW_MAP
        if pid in OFFICIAL_TOTW_MAP and str(pid) not in special_ids:
            totw_info = OFFICIAL_TOTW_MAP[pid]
            totw_rating = totw_info["ovr"]
            boost = max(1, totw_rating - row["overall_rating"])
            totw_stats = {
                k: min(99, v + boost) for k, v in base_stats.items()
            }
            totw_face = totw_info.get("face") or row["face_url"]

            totw_player = {
                "id": f"{pid}_totw",
                "basePlayerId": pid,
                "name": f"{player_name} TOTW",
                "fullName": row["full_name"],
                "rating": totw_rating,
                "cardType": "totw",
                "pos": row["position_es"],
                "gender": row["gender"] if "gender" in row.keys() else "Men's Football",
                "league": row["league"] if "league" in row.keys() else "",
                "nation": {
                    "name": row["nation_name_es"],
                    "code": row["nation_code"]
                },
                "club": club_data,
                "stats": totw_stats,
                "faceUrl": totw_face,
                "quickSell": int(row["quick_sell"] * 1.8 + 5000)
            }
            players_js.append(totw_player)
            totw_generated += 1

    print(f"Total cartas TOTW oficiales añadidas: {totw_generated}")
    print(f"Total cartas listas para database.js: {len(players_js)}")

    # 6. Escribir database.js
    players_json_str = json.dumps(players_js, ensure_ascii=False, indent=2)
    hof_json_str = json.dumps(HOF_PLAYERS, ensure_ascii=False, indent=2)

    # Configuración de sobres oficial esperada por app.js (formato Array)
    packs_config_str = """
const PACKS_CONFIG = [
    {
        id: "pack_free",
        name: "Sobre Gratis",
        price: 0,
        cardsCount: 9,
        color: "#10b981",
        description: "¡9 cartas gratis! Probabilidades muy bajas para cartas de élite, ideal para empezar.",
        guaranteed: "9 Cartas (Bronce / Plata / Oro Común)",
        weights: { bronze: 0.65, silver: 0.28, gold_rare: 0.068, totw: 0.0019, hero: 0.0001, icon: 0.0000 },
        badgeText: "GRATIS (9 CARTAS)"
    },
    {
        id: "pack_gold",
        name: "Sobre Oro",
        price: 5000,
        cardsCount: 9,
        color: "#fbbf24",
        description: "9 cartas con presencia balanceada de jugadores Oro Únicos.",
        guaranteed: "9 Cartas (Garantiza cartas Oro)",
        weights: { bronze: 0.15, silver: 0.35, gold_rare: 0.46, totw: 0.035, hero: 0.004, icon: 0.001 },
        badgeText: "ESTÁNDAR (9 CARTAS)"
    },
    {
        id: "pack_gold_premium",
        name: "Oro Premium",
        price: 15000,
        cardsCount: 9,
        color: "#f59e0b",
        description: "9 cartas de alta calidad con gran mayoría de jugadores Oro y Walkouts.",
        guaranteed: "9 Cartas (Altas Medias)",
        weights: { bronze: 0.03, silver: 0.12, gold_rare: 0.74, totw: 0.08, hero: 0.022, icon: 0.008 },
        badgeText: "POPULAR (9 CARTAS)"
    },
    {
        id: "pack_mega_top",
        name: "Mega Sobre Top Players",
        price: 50000,
        cardsCount: 9,
        color: "#8b5cf6",
        description: "¡9 cartas de primer nivel! Probabilidades muy altas de Walkouts (86+), TOTW e Iconos.",
        guaranteed: "9 Cartas Oro Único + Walkouts",
        weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.73, totw: 0.18, hero: 0.06, icon: 0.03 },
        badgeText: "86+ WALKOUT (9 CARTAS)"
    },
    {
        id: "pack_icon_legends",
        name: "Sobre Iconos & Héroes",
        price: 150000,
        cardsCount: 5,
        color: "#ec4899",
        description: "El sobre legendario exclusivo de 5 cartas. ¡Garantiza al menos un Icono o Héroe!",
        guaranteed: "1 Icono / Héroe 100% Asegurado",
        weights: { bronze: 0.0, silver: 0.0, gold_rare: 0.35, totw: 0.25, hero: 0.25, icon: 0.15 },
        badgeText: "LEGENDARIO (5 CARTAS)"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PLAYERS_DB, PACKS_CONFIG, HOF_PLAYERS };
}
"""

    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write("// Base de datos autogenerada para Pacybits FC 27\n")
        f.write("const PLAYERS_DB = ")
        f.write(players_json_str)
        f.write(";\n\n")
        f.write("const HOF_PLAYERS = ")
        f.write(hof_json_str)
        f.write(";\n\n")
        f.write(packs_config_str.strip())
        f.write("\n")

    print(f"database.js guardado exitosamente en: {JS_PATH}")
    print(f"Tamaño de database.js: {os.path.getsize(JS_PATH)} bytes")


if __name__ == "__main__":
    main()
