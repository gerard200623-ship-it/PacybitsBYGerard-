# -*- coding: utf-8 -*-
"""
sync_official_fc25.py
=====================
Descarga la base de datos oficial completa de EA SPORTS FC 25 desde el CDN oficial
de EA (drop-api.ea.com), mapea clubes, posiciones, nacionalidades, estadísticas
y fotos en alta resolución, y actualiza fc_database.db y database.js.
"""

import os
import sys
import json
import sqlite3
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(SCRIPT_DIR, "ui", "fc_database.db")
CSV_PATH = os.path.join(SCRIPT_DIR, "ui", "players.csv")
JS_PATH = os.path.join(SCRIPT_DIR, "ui", "database.js")
FACES_DIR = os.path.join(SCRIPT_DIR, "ui", "assets", "faces")

# Mapeo de posiciones EN -> ES
POS_MAP = {
    "ST": "DEL", "CF": "SD", "LW": "EI", "RW": "ED",
    "CAM": "MCO", "CM": "MC", "CDM": "MCD",
    "LM": "MI", "RM": "MD",
    "CB": "DFC", "LB": "LI", "RB": "LD", "LWB": "CAI", "RWB": "CAD",
    "GK": "POR", "SW": "LIB"
}

# Mapeo de clubes genéricos de EA (por licencias) a nombres oficiales conocidos
CLUB_NAME_NORMALIZE = {
    "Paris SG": "Paris Saint-Germain",
    "FC Bayern München": "Bayern München",
    "Bayern Munich": "Bayern München",
    "Lombardia FC": "Inter",
    "Milano FC": "AC Milan",
    "Man Utd": "Manchester United",
    "Manchester Utd": "Manchester United",
    "Bayer 04 Leverkusen": "Bayer Leverkusen",
    "Atlético Madrid": "Atlético de Madrid",
    "Spurs": "Tottenham Hotspur",
    "Inter Miami CF": "Inter Miami",
    "Borussia Dortmund": "Borussia Dortmund",
    "Real Madrid": "Real Madrid",
    "FC Barcelona": "FC Barcelona",
    "Manchester City": "Manchester City",
    "Liverpool": "Liverpool",
    "Arsenal": "Arsenal",
    "Chelsea": "Chelsea",
    "Juventus": "Juventus",
}

# Mapeo de nombres de países en inglés a código ISO
NATION_CODE_MAP = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad",
    "Angola": "ao", "Antigua and Barbuda": "ag", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az",
    "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb", "Belarus": "by",
    "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm",
    "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw",
    "Brazil": "br", "Bulgaria": "bg", "Burkina Faso": "bf", "Burundi": "bi",
    "Cabo Verde": "cv", "Cameroon": "cm", "Canada": "ca", "Central African Republic": "cf",
    "Chad": "td", "Chile": "cl", "China PR": "cn", "Colombia": "co", "Comoros": "km",
    "Congo": "cg", "Congo DR": "cd", "Costa Rica": "cr", "Croatia": "hr",
    "Cuba": "cu", "Curaçao": "cw", "Cyprus": "cy", "Czechia": "cz", "Czech Republic": "cz",
    "Denmark": "dk", "Dominican Republic": "do", "Ecuador": "ec", "Egypt": "eg",
    "El Salvador": "sv", "England": "gb-eng", "Equatorial Guinea": "gq", "Eritrea": "er",
    "Estonia": "ee", "Eswatini": "sz", "Ethiopia": "et", "Faroe Islands": "fo",
    "Fiji": "fj", "Finland": "fi", "France": "fr", "Gabon": "ga", "Gambia": "gm",
    "Georgia": "ge", "Germany": "de", "Ghana": "gh", "Gibraltar": "gi",
    "Greece": "gr", "Grenada": "gd", "Guatemala": "gt", "Guinea": "gn",
    "Guinea-Bissau": "gw", "Guyana": "gy", "Haiti": "ht", "Honduras": "hn",
    "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is", "India": "in",
    "Indonesia": "id", "Iran": "ir", "Iraq": "iq", "Israel": "il", "Italy": "it",
    "Ivory Coast": "ci", "Jamaica": "jm", "Japan": "jp", "Jordan": "jo",
    "Kazakhstan": "kz", "Kenya": "ke", "Korea Republic": "kr", "Kosovo": "xk",
    "Kuwait": "kw", "Kyrgyzstan": "kg", "Latvia": "lv", "Lebanon": "lb",
    "Liberia": "lr", "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Madagascar": "mg", "Malawi": "mw", "Malaysia": "my",
    "Mali": "ml", "Malta": "mt", "Mauritania": "mr", "Mauritius": "mu",
    "Mexico": "mx", "Moldova": "md", "Montenegro": "me", "Morocco": "ma",
    "Mozambique": "mz", "Namibia": "na", "Netherlands": "nl", "New Zealand": "nz",
    "Nicaragua": "ni", "Niger": "ne", "Nigeria": "ng", "North Macedonia": "mk",
    "Northern Ireland": "gb-nir", "Norway": "no", "Oman": "om", "Pakistan": "pk",
    "Palestine": "ps", "Panama": "pa", "Paraguay": "py", "Peru": "pe",
    "Philippines": "ph", "Poland": "pl", "Portugal": "pt", "Puerto Rico": "pr",
    "Qatar": "qa", "Republic of Ireland": "ie", "Romania": "ro", "Russia": "ru",
    "Rwanda": "rw", "Saudi Arabia": "sa", "Scotland": "gb-sct", "Senegal": "sn",
    "Serbia": "rs", "Sierra Leone": "sl", "Singapore": "sg", "Slovakia": "sk",
    "Slovenia": "si", "Somalia": "so", "South Africa": "za", "South Sudan": "ss",
    "Spain": "es", "Sudan": "sd", "Suriname": "sr", "Sweden": "se",
    "Switzerland": "ch", "Syria": "sy", "Tanzania": "tz", "Thailand": "th",
    "Togo": "tg", "Trinidad and Tobago": "tt", "Tunisia": "tn", "Turkey": "tr",
    "Türkiye": "tr", "Uganda": "ug", "Ukraine": "ua", "United Arab Emirates": "ae",
    "United States": "us", "Uruguay": "uy", "Uzbekistan": "uz", "Venezuela": "ve",
    "Vietnam": "vn", "Wales": "gb-wls", "Zambia": "zm", "Zimbabwe": "zw"
}

NATION_ES_MAP = {
    "Afghanistan": "Afganistán", "Albania": "Albania", "Algeria": "Argelia",
    "Andorra": "Andorra", "Angola": "Angola", "Argentina": "Argentina",
    "Armenia": "Armenia", "Australia": "Australia", "Austria": "Austria",
    "Azerbaijan": "Azerbaiyán", "Bahrain": "Baréin", "Belarus": "Bielorrusia",
    "Belgium": "Bélgica", "Bolivia": "Bolivia", "Bosnia and Herzegovina": "Bosnia y Herzegovina",
    "Brazil": "Brasil", "Bulgaria": "Bulgaria", "Cameroon": "Camerún",
    "Canada": "Canadá", "Chile": "Chile", "China PR": "China",
    "Colombia": "Colombia", "Costa Rica": "Costa Rica", "Croatia": "Croacia",
    "Cuba": "Cuba", "Cyprus": "Chipre", "Czechia": "República Checa",
    "Czech Republic": "República Checa", "Denmark": "Dinamarca", "Ecuador": "Ecuador",
    "Egypt": "Egipto", "England": "Inglaterra", "Finland": "Finlandia",
    "France": "Francia", "Georgia": "Georgia", "Germany": "Alemania",
    "Ghana": "Ghana", "Greece": "Grecia", "Hungary": "Hungría",
    "Iceland": "Islandia", "Iran": "Irán", "Iraq": "Irak",
    "Israel": "Israel", "Italy": "Italia", "Ivory Coast": "Costa de Marfil",
    "Japan": "Japón", "Korea Republic": "Corea del Sur", "Mexico": "México",
    "Morocco": "Marruecos", "Netherlands": "Países Bajos", "Nigeria": "Nigeria",
    "Northern Ireland": "Irlanda del Norte", "Norway": "Noruega", "Paraguay": "Paraguay",
    "Peru": "Perú", "Poland": "Polonia", "Portugal": "Portugal",
    "Republic of Ireland": "Irlanda", "Romania": "Rumanía", "Russia": "Rusia",
    "Saudi Arabia": "Arabia Saudita", "Scotland": "Escocia", "Senegal": "Senegal",
    "Serbia": "Serbia", "Slovakia": "Eslovaquia", "Slovenia": "Eslovenia",
    "South Africa": "Sudáfrica", "Spain": "España", "Sweden": "Suecia",
    "Switzerland": "Suiza", "Turkey": "Turquía", "Türkiye": "Turquía",
    "Ukraine": "Ucrania", "United States": "Estados Unidos", "Uruguay": "Uruguay",
    "Venezuela": "Venezuela", "Wales": "Gales"
}

def get_card_type(rating):
    if rating >= 75:
        return "gold_rare"
    elif rating >= 65:
        return "silver"
    else:
        return "bronze"

def get_quick_sell(rating):
    if rating >= 90:
        return 12000
    elif rating >= 87:
        return 8000
    elif rating >= 85:
        return 5000
    elif rating >= 82:
        return 3000
    elif rating >= 79:
        return 1500
    elif rating >= 75:
        return 800
    elif rating >= 70:
        return 400
    elif rating >= 65:
        return 200
    else:
        return 100

def fetch_page(offset):
    url = f"https://drop-api.ea.com/rating/ea-sports-fc?locale=en&limit=100&offset={offset}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=12) as res:
                data = json.loads(res.read())
                return data.get("items", []), data.get("totalItems", 0)
        except Exception as e:
            time.sleep(0.5 * (attempt + 1))
    return [], 0

def fetch_all_ea_players():
    print("Conectando con la API oficial de EA SPORTS FC 25...")
    first_page, total_items = fetch_page(0)
    print(f"Total jugadores oficiales encontrados en EA FC 25: {total_items}")
    
    all_items = list(first_page)
    offsets = list(range(100, total_items, 100))
    
    print(f"Descargando {len(offsets)} bloques de jugadores en paralelo...")
    t0 = time.time()
    with ThreadPoolExecutor(max_workers=12) as executor:
        future_to_offset = {executor.submit(fetch_page, off): off for off in offsets}
        for future in as_completed(future_to_offset):
            items, _ = future.result()
            all_items.extend(items)
            
    print(f"Descarga completada: {len(all_items)} jugadores en {time.time()-t0:.2f}s")
    # Ordenar por rating desc
    all_items.sort(key=lambda p: p.get("overallRating", 0), reverse=True)
    return all_items

if __name__ == "__main__":
    players = fetch_all_ea_players()
    print(f"Top 5 jugadores descargados:")
    for p in players[:5]:
        print(f"  {p.get('overallRating')} - {p.get('commonName') or p.get('lastName')} ({p.get('team', {}).get('label')})")
