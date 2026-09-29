# -*- coding: utf-8 -*-
"""
migrate_csv_to_sqlite.py
========================
Lee players.csv y crea fc_database.db (SQLite) con todos los jugadores
mapeados al formato que usa la app PacyBits FC 27.
"""

import csv
import sqlite3
import os
import json

# ── Rutas ──────────────────────────────────────────────────────────────────
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(SCRIPT_DIR, "ui", "players.csv")
DB_PATH = os.path.join(SCRIPT_DIR, "ui", "fc_database.db")

# ── Mínimo rating para incluir (mantiene el JS manejable) ─────────────────
MIN_RATING = 60

# ── Mapeo posiciones EN → ES ──────────────────────────────────────────────
POS_MAP = {
    "ST": "DEL",
    "GK": "POR",
    "CM": "MC",
    "CB": "DFC",
    "LW": "EI",
    "RW": "ED",
    "LB": "LI",
    "RB": "LD",
    "CDM": "MCD",
    "CAM": "MCO",
    "LM": "MI",
    "RM": "MD",
    "CF": "SD",
    "RWB": "CAD",
    "LWB": "CAI",
    "SW": "LIB",
}

# ── Mapeo nombre de país → código ISO 3166-1 alpha-2 (minúsculas) ─────────
NATION_CODE_MAP = {
    "Afghanistan": "af", "Albania": "al", "Algeria": "dz", "Andorra": "ad",
    "Angola": "ao", "Antigua and Barbuda": "ag", "Argentina": "ar",
    "Armenia": "am", "Australia": "au", "Austria": "at", "Azerbaijan": "az",
    "Bahrain": "bh", "Bangladesh": "bd", "Barbados": "bb", "Belarus": "by",
    "Belgium": "be", "Belize": "bz", "Benin": "bj", "Bermuda": "bm",
    "Bolivia": "bo", "Bosnia and Herzegovina": "ba", "Botswana": "bw",
    "Brazil": "br", "Brunei Darussalam": "bn", "Bulgaria": "bg",
    "Burkina Faso": "bf", "Burundi": "bi", "Cabo Verde": "cv",
    "Cambodia": "kh", "Cameroon": "cm", "Canada": "ca",
    "Central African Republic": "cf", "Chad": "td", "Chile": "cl",
    "China PR": "cn", "Colombia": "co", "Comoros": "km",
    "Congo": "cg", "Congo DR": "cd", "Costa Rica": "cr",
    "Croatia": "hr", "Cuba": "cu", "Curaçao": "cw",
    "Cyprus": "cy", "Czechia": "cz", "Czech Republic": "cz",
    "Denmark": "dk", "Djibouti": "dj",
    "Dominican Republic": "do", "Ecuador": "ec", "Egypt": "eg",
    "El Salvador": "sv", "England": "gb-eng",
    "Equatorial Guinea": "gq", "Eritrea": "er", "Estonia": "ee",
    "Eswatini": "sz", "Ethiopia": "et", "Faroe Islands": "fo",
    "Fiji": "fj", "Finland": "fi", "France": "fr",
    "Gabon": "ga", "Gambia": "gm", "Georgia": "ge",
    "Germany": "de", "Ghana": "gh", "Gibraltar": "gi",
    "Greece": "gr", "Grenada": "gd", "Guam": "gu",
    "Guatemala": "gt", "Guinea": "gn", "Guinea-Bissau": "gw",
    "Guyana": "gy", "Haiti": "ht", "Honduras": "hn",
    "Hong Kong": "hk", "Hungary": "hu", "Iceland": "is",
    "India": "in", "Indonesia": "id", "Iran": "ir",
    "Iraq": "iq", "Ireland": "ie", "Republic of Ireland": "ie",
    "Israel": "il", "Italy": "it", "Ivory Coast": "ci",
    "Côte d'Ivoire": "ci",
    "Jamaica": "jm", "Japan": "jp", "Jordan": "jo",
    "Kazakhstan": "kz", "Kenya": "ke", "Korea DPR": "kp",
    "Korea Republic": "kr", "Kosovo": "xk", "Kuwait": "kw",
    "Kyrgyzstan": "kg", "Laos": "la", "Latvia": "lv",
    "Lebanon": "lb", "Lesotho": "ls", "Liberia": "lr",
    "Libya": "ly", "Liechtenstein": "li", "Lithuania": "lt",
    "Luxembourg": "lu", "Madagascar": "mg", "Malawi": "mw",
    "Malaysia": "my", "Maldives": "mv", "Mali": "ml",
    "Malta": "mt", "Martinique": "mq", "Mauritania": "mr",
    "Mauritius": "mu", "Mexico": "mx", "Moldova": "md",
    "Mongolia": "mn", "Montenegro": "me", "Montserrat": "ms",
    "Morocco": "ma", "Mozambique": "mz", "Myanmar": "mm",
    "Namibia": "na", "Nepal": "np", "Netherlands": "nl",
    "New Caledonia": "nc", "New Zealand": "nz", "Nicaragua": "ni",
    "Niger": "ne", "Nigeria": "ng", "North Macedonia": "mk",
    "Northern Ireland": "gb-nir", "Norway": "no",
    "Oman": "om", "Pakistan": "pk", "Palestine": "ps",
    "Panama": "pa", "Papua New Guinea": "pg", "Paraguay": "py",
    "Peru": "pe", "Philippines": "ph", "Poland": "pl",
    "Portugal": "pt", "Puerto Rico": "pr", "Qatar": "qa",
    "Romania": "ro", "Russia": "ru", "Rwanda": "rw",
    "Saint Kitts and Nevis": "kn", "Saint Lucia": "lc",
    "Samoa": "ws", "San Marino": "sm", "São Tomé and Príncipe": "st",
    "Saudi Arabia": "sa", "Scotland": "gb-sct", "Senegal": "sn",
    "Serbia": "rs", "Sierra Leone": "sl", "Singapore": "sg",
    "Slovakia": "sk", "Slovenia": "si", "Solomon Islands": "sb",
    "Somalia": "so", "South Africa": "za", "South Sudan": "ss",
    "Spain": "es", "Sri Lanka": "lk", "Sudan": "sd",
    "Suriname": "sr", "Sweden": "se", "Switzerland": "ch",
    "Syria": "sy", "Chinese Taipei": "tw", "Taiwan": "tw",
    "Tajikistan": "tj", "Tanzania": "tz", "Thailand": "th",
    "Timor-Leste": "tl", "Togo": "tg", "Tonga": "to",
    "Trinidad and Tobago": "tt", "Tunisia": "tn", "Turkey": "tr",
    "Türkiye": "tr",
    "Turkmenistan": "tm", "Uganda": "ug", "Ukraine": "ua",
    "United Arab Emirates": "ae", "United States": "us",
    "Uruguay": "uy", "Uzbekistan": "uz", "Vanuatu": "vu",
    "Venezuela": "ve", "Vietnam": "vn", "Wales": "gb-wls",
    "Yemen": "ye", "Zambia": "zm", "Zimbabwe": "zw",
    # Variantes especiales de EA FC
    "Cape Verde Islands": "cv", "Cape Verde": "cv",
    "Korea, South": "kr", "Korea, North": "kp",
    "Brunei": "bn", "Chinese Taipei": "tw",
    "DR Congo": "cd", "FYR Macedonia": "mk",
    "Guadeloupe": "gp", "French Guiana": "gf",
    "Réunion": "re", "Tahiti": "pf",
    "Antigua & Barbuda": "ag", "St Kitts Nevis": "kn",
    "Swaziland": "sz", "Burma": "mm",
}

# ── Mapeo nombre de país EN → ES ─────────────────────────────────────────
NATION_NAME_ES = {
    "Afghanistan": "Afganistán", "Albania": "Albania", "Algeria": "Argelia",
    "Andorra": "Andorra", "Angola": "Angola",
    "Antigua and Barbuda": "Antigua y Barbuda", "Argentina": "Argentina",
    "Armenia": "Armenia", "Australia": "Australia", "Austria": "Austria",
    "Azerbaijan": "Azerbaiyán", "Bahrain": "Baréin",
    "Bangladesh": "Bangladés", "Barbados": "Barbados", "Belarus": "Bielorrusia",
    "Belgium": "Bélgica", "Belize": "Belice", "Benin": "Benín",
    "Bermuda": "Bermudas", "Bolivia": "Bolivia",
    "Bosnia and Herzegovina": "Bosnia y Herzegovina", "Botswana": "Botsuana",
    "Brazil": "Brasil", "Brunei Darussalam": "Brunéi", "Bulgaria": "Bulgaria",
    "Burkina Faso": "Burkina Faso", "Burundi": "Burundi",
    "Cabo Verde": "Cabo Verde", "Cambodia": "Camboya",
    "Cameroon": "Camerún", "Canada": "Canadá",
    "Central African Republic": "Rep. Centroafricana", "Chad": "Chad",
    "Chile": "Chile", "China PR": "China", "Colombia": "Colombia",
    "Comoros": "Comoras", "Congo": "Congo", "Congo DR": "RD Congo",
    "Costa Rica": "Costa Rica", "Croatia": "Croacia", "Cuba": "Cuba",
    "Curaçao": "Curazao", "Cyprus": "Chipre", "Czechia": "Chequia",
    "Czech Republic": "Chequia", "Denmark": "Dinamarca",
    "Dominican Republic": "Rep. Dominicana", "Ecuador": "Ecuador",
    "Egypt": "Egipto", "El Salvador": "El Salvador",
    "England": "Inglaterra", "Equatorial Guinea": "Guinea Ecuatorial",
    "Eritrea": "Eritrea", "Estonia": "Estonia", "Eswatini": "Esuatini",
    "Ethiopia": "Etiopía", "Faroe Islands": "Islas Feroe",
    "Fiji": "Fiyi", "Finland": "Finlandia", "France": "Francia",
    "Gabon": "Gabón", "Gambia": "Gambia", "Georgia": "Georgia",
    "Germany": "Alemania", "Ghana": "Ghana", "Gibraltar": "Gibraltar",
    "Greece": "Grecia", "Grenada": "Granada", "Guatemala": "Guatemala",
    "Guinea": "Guinea", "Guinea-Bissau": "Guinea-Bisáu",
    "Guyana": "Guyana", "Haiti": "Haití", "Honduras": "Honduras",
    "Hong Kong": "Hong Kong", "Hungary": "Hungría", "Iceland": "Islandia",
    "India": "India", "Indonesia": "Indonesia", "Iran": "Irán",
    "Iraq": "Irak", "Ireland": "Irlanda", "Republic of Ireland": "Irlanda",
    "Israel": "Israel", "Italy": "Italia",
    "Ivory Coast": "Costa de Marfil", "Côte d'Ivoire": "Costa de Marfil",
    "Jamaica": "Jamaica", "Japan": "Japón", "Jordan": "Jordania",
    "Kazakhstan": "Kazajistán", "Kenya": "Kenia",
    "Korea DPR": "Corea del Norte", "Korea Republic": "Corea del Sur",
    "Kosovo": "Kosovo", "Kuwait": "Kuwait",
    "Kyrgyzstan": "Kirguistán", "Latvia": "Letonia",
    "Lebanon": "Líbano", "Liberia": "Liberia", "Libya": "Libia",
    "Liechtenstein": "Liechtenstein", "Lithuania": "Lituania",
    "Luxembourg": "Luxemburgo", "Madagascar": "Madagascar",
    "Malawi": "Malaui", "Malaysia": "Malasia", "Mali": "Mali",
    "Malta": "Malta", "Mauritania": "Mauritania", "Mauritius": "Mauricio",
    "Mexico": "México", "Moldova": "Moldavia", "Mongolia": "Mongolia",
    "Montenegro": "Montenegro", "Morocco": "Marruecos",
    "Mozambique": "Mozambique", "Namibia": "Namibia", "Nepal": "Nepal",
    "Netherlands": "Países Bajos", "New Zealand": "Nueva Zelanda",
    "Nicaragua": "Nicaragua", "Niger": "Níger", "Nigeria": "Nigeria",
    "North Macedonia": "Macedonia del Norte",
    "Northern Ireland": "Irlanda del Norte", "Norway": "Noruega",
    "Oman": "Omán", "Pakistan": "Pakistán", "Palestine": "Palestina",
    "Panama": "Panamá", "Paraguay": "Paraguay", "Peru": "Perú",
    "Philippines": "Filipinas", "Poland": "Polonia", "Portugal": "Portugal",
    "Puerto Rico": "Puerto Rico", "Qatar": "Catar",
    "Romania": "Rumanía", "Russia": "Rusia", "Rwanda": "Ruanda",
    "Saudi Arabia": "Arabia Saudita", "Scotland": "Escocia",
    "Senegal": "Senegal", "Serbia": "Serbia", "Sierra Leone": "Sierra Leona",
    "Singapore": "Singapur", "Slovakia": "Eslovaquia",
    "Slovenia": "Eslovenia", "Somalia": "Somalia",
    "South Africa": "Sudáfrica", "South Sudan": "Sudán del Sur",
    "Spain": "España", "Sri Lanka": "Sri Lanka", "Sudan": "Sudán",
    "Suriname": "Surinam", "Sweden": "Suecia", "Switzerland": "Suiza",
    "Syria": "Siria", "Tanzania": "Tanzania", "Thailand": "Tailandia",
    "Togo": "Togo", "Trinidad and Tobago": "Trinidad y Tobago",
    "Tunisia": "Túnez", "Turkey": "Turquía", "Türkiye": "Turquía",
    "Uganda": "Uganda", "Ukraine": "Ucrania",
    "United Arab Emirates": "Emiratos Árabes", "United States": "Estados Unidos",
    "Uruguay": "Uruguay", "Uzbekistan": "Uzbekistán",
    "Venezuela": "Venezuela", "Vietnam": "Vietnam", "Wales": "Gales",
    "Zambia": "Zambia", "Zimbabwe": "Zimbabue",
    "Cape Verde Islands": "Cabo Verde", "Cape Verde": "Cabo Verde",
    "DR Congo": "RD Congo", "Guam": "Guam",
    "Djibouti": "Yibuti", "Lesotho": "Lesoto",
    "Maldives": "Maldivas", "Myanmar": "Myanmar",
    "San Marino": "San Marino", "Turkmenistan": "Turkmenistán",
    "Tajikistan": "Tayikistán", "Chinese Taipei": "Taipéi Chino",
    "Papua New Guinea": "Papúa Nueva Guinea",
    "New Caledonia": "Nueva Caledonia", "Martinique": "Martinica",
    "Montserrat": "Montserrat",
    "Saint Kitts and Nevis": "San Cristóbal y Nieves",
    "Saint Lucia": "Santa Lucía",
    "Samoa": "Samoa", "Solomon Islands": "Islas Salomón",
    "São Tomé and Príncipe": "Santo Tomé y Príncipe",
    "Timor-Leste": "Timor Oriental", "Tonga": "Tonga",
    "Vanuatu": "Vanuatu", "Yemen": "Yemen",
}

# ── Asignar cardType según rating ─────────────────────────────────────────
def get_card_type(rating):
    if rating >= 89:
        return "gold_rare"   # Top tier sin llegar a icon (reservados)
    elif rating >= 85:
        return "gold_rare"
    elif rating >= 75:
        return "gold_rare"
    elif rating >= 65:
        return "silver"
    else:
        return "bronze"

# ── quickSell según rating ────────────────────────────────────────────────
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

# ── URL de la cara en CDN de EA/SoFIFA ────────────────────────────────────
def get_face_url(player_id):
    sid = str(player_id).zfill(6)
    p1, p2 = sid[:3], sid[3:]
    return f"https://cdn.sofifa.net/players/{p1}/{p2}/25_120.png"


def main():
    if not os.path.exists(CSV_PATH):
        print(f"ERROR: No se encuentra {CSV_PATH}")
        return

    # Leer CSV
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"CSV leído: {len(rows)} filas totales")

    # Filtrar por rating mínimo
    rows = [r for r in rows if int(r["overall_rating"]) >= MIN_RATING]
    print(f"Tras filtro rating >= {MIN_RATING}: {len(rows)} jugadores")

    # Crear / recrear DB
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE players (
            player_id      INTEGER PRIMARY KEY,
            common_name    TEXT,
            first_name     TEXT,
            last_name      TEXT,
            display_name   TEXT,
            full_name      TEXT,
            overall_rating INTEGER,
            position       TEXT,
            position_es    TEXT,
            alternate_positions TEXT,
            card_type      TEXT,
            club_name      TEXT,
            league         TEXT,
            nationality    TEXT,
            nation_name_es TEXT,
            nation_code    TEXT,
            gender         TEXT,
            pace           INTEGER,
            shooting       INTEGER,
            passing        INTEGER,
            dribbling      INTEGER,
            defending      INTEGER,
            physicality    INTEGER,
            gk_diving      INTEGER,
            gk_handling    INTEGER,
            gk_kicking     INTEGER,
            gk_positioning INTEGER,
            gk_reflexes    INTEGER,
            face_url       TEXT,
            quick_sell     INTEGER,
            skill_moves    INTEGER,
            weak_foot      INTEGER,
            preferred_foot TEXT,
            height_cm      TEXT,
            weight_kg      TEXT,
            birthdate      TEXT,
            playstyles     TEXT
        )
    """)

    # Track unknown nations
    unknown_nations = set()

    inserted = 0
    for row in rows:
        pid = int(row["player_id"])
        rating = int(row["overall_rating"])

        # Nombre para mostrar
        common = row["common_name"].strip()
        first = row["first_name"].strip()
        last = row["last_name"].strip()
        display_name = common if common else (last if last else first)
        full_name = f"{first} {last}".strip() if first and last else display_name

        # Posición
        pos_en = row["position"].strip()
        pos_es = POS_MAP.get(pos_en, pos_en)

        # Card type
        card_type = get_card_type(rating)

        # Nacionalidad
        nation_en = row["nationality"].strip()
        nation_es = NATION_NAME_ES.get(nation_en, nation_en)
        nation_code = NATION_CODE_MAP.get(nation_en, "")
        if not nation_code and nation_en:
            unknown_nations.add(nation_en)
            # Intentar generar código automáticamente
            nation_code = nation_en[:2].lower()

        # Stats (para GK se usan stats de GK en los campos pac/sho/pas/dri/def/phy del juego)
        is_gk = pos_en == "GK"

        pace = int(row["pace"]) if row["pace"] else 0
        shooting = int(row["shooting"]) if row["shooting"] else 0
        passing = int(row["passing"]) if row["passing"] else 0
        dribbling = int(row["dribbling"]) if row["dribbling"] else 0
        defending = int(row["defending"]) if row["defending"] else 0
        physicality = int(row["physicality"]) if row["physicality"] else 0

        gk_diving = int(row["goalkeeping_diving"]) if row["goalkeeping_diving"] else 0
        gk_handling = int(row["goalkeeping_handling"]) if row["goalkeeping_handling"] else 0
        gk_kicking = int(row["goalkeeping_kicking"]) if row["goalkeeping_kicking"] else 0
        gk_positioning = int(row["goalkeeping_positioning"]) if row["goalkeeping_positioning"] else 0
        gk_reflexes = int(row["goalkeeping_reflexes"]) if row["goalkeeping_reflexes"] else 0

        face_url = get_face_url(pid)
        quick_sell = get_quick_sell(rating)

        skill_moves = int(row["skill_moves"]) if row["skill_moves"] else 0
        weak_foot = int(row["weak_foot"]) if row["weak_foot"] else 0

        cur.execute("""
            INSERT OR REPLACE INTO players VALUES (
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                ?, ?, ?, ?, ?, ?, ?, ?, ?
            )
        """, (
            pid, common, first, last, display_name, full_name,
            rating, pos_en, pos_es, row.get("alternate_positions", ""),
            card_type, row["club"].strip(), row.get("league", "").strip(),
            nation_en, nation_es, nation_code, row.get("gender", "").strip(),
            pace, shooting, passing, dribbling, defending, physicality,
            gk_diving, gk_handling, gk_kicking, gk_positioning, gk_reflexes,
            face_url, quick_sell,
            skill_moves, weak_foot,
            row.get("preferred_foot", "").strip(),
            row.get("height_cm", ""), row.get("weight_kg", ""),
            row.get("birthdate", ""), row.get("playstyles", "")
        ))
        inserted += 1

    conn.commit()

    if unknown_nations:
        print(f"\n[!] Nacionalidades sin mapeo ISO conocido ({len(unknown_nations)}):")
        for n in sorted(unknown_nations):
            print(f"   - {n}")

    print(f"\n[OK] Base de datos creada: {DB_PATH}")
    print(f"   Jugadores insertados: {inserted}")

    # Verificar
    cur.execute("SELECT COUNT(*) FROM players")
    count = cur.fetchone()[0]
    print(f"   Verificacion SELECT COUNT(*): {count}")

    cur.execute("SELECT card_type, COUNT(*) FROM players GROUP BY card_type ORDER BY COUNT(*) DESC")
    print("\n   Distribucion por card_type:")
    for ct, cnt in cur.fetchall():
        print(f"      {ct}: {cnt}")

    conn.close()
    print("\nMigracion completada con exito!")


if __name__ == "__main__":
    main()
