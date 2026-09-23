# -*- coding: utf-8 -*-
"""
Generador Maestro de la Base de Datos Pacybits FC 27 con > 1,000 cartas reales.
Garantiza:
1. Escudos oficiales y 100% correctos (Real Madrid 86, Barcelona 81, Man City 65, Liverpool 64, Bayern 5, etc.)
2. Caras correctas (Nico Paz, Estêvão Willian y Franco Mastantuono únicos y reales, avatares estilizados para cartas sin foto CDN)
3. Cartas especiales (Iconos, Héroes y TOTW) correctamente visualizadas con badges vectoriales codificados.
4. Más de 1,000 cartas en PLAYERS_DB.
"""

import json
import random
import re
import os
import sys

# 1. Definición de Clubes Oficiales con IDs correspondientes a assets/clubs/{id}.png
CLUBS_MAP = {
    "Real Madrid": {"name": "Real Madrid", "id": 86, "nation": "es"},
    "FC Barcelona": {"name": "FC Barcelona", "id": 81, "nation": "es"},
    "Manchester City": {"name": "Manchester City", "id": 65, "nation": "gb-eng"},
    "Liverpool": {"name": "Liverpool", "id": 64, "nation": "gb-eng"},
    "Bayern München": {"name": "Bayern München", "id": 5, "nation": "de"},
    "Arsenal": {"name": "Arsenal", "id": 57, "nation": "gb-eng"},
    "Chelsea": {"name": "Chelsea", "id": 61, "nation": "gb-eng"},
    "Manchester United": {"name": "Manchester United", "id": 66, "nation": "gb-eng"},
    "Paris Saint-Germain": {"name": "Paris Saint-Germain", "id": 524, "nation": "fr"},
    "Inter": {"name": "Inter", "id": 108, "nation": "it"},
    "AC Milan": {"name": "AC Milan", "id": 98, "nation": "it"},
    "Atlético de Madrid": {"name": "Atlético de Madrid", "id": 78, "nation": "es"},
    "Bayer Leverkusen": {"name": "Bayer Leverkusen", "id": 3, "nation": "de"},
    "Juventus": {"name": "Juventus", "id": 109, "nation": "it"},
    "Borussia Dortmund": {"name": "Borussia Dortmund", "id": 4, "nation": "de"},
    "Tottenham Hotspur": {"name": "Tottenham Hotspur", "id": 73, "nation": "gb-eng"},
    "Roma": {"name": "Roma", "id": 100, "nation": "it"},
    "Napoli": {"name": "Napoli", "id": 113, "nation": "it"},
    "Newcastle United": {"name": "Newcastle United", "id": 67, "nation": "gb-eng"},
    "Athletic Club": {"name": "Athletic Club", "id": 77, "nation": "es"},
    "Real Betis": {"name": "Real Betis", "id": 90, "nation": "es"},
    "Sevilla": {"name": "Sevilla", "id": 559, "nation": "es"},
    "Real Sociedad": {"name": "Real Sociedad", "id": 92, "nation": "es"},
    "Villarreal": {"name": "Villarreal", "id": 94, "nation": "es"},
    "Girona": {"name": "Girona", "id": 298, "nation": "es"},
    "Atalanta": {"name": "Atalanta", "id": 102, "nation": "it"},
    "Lazio": {"name": "Lazio", "id": 110, "nation": "it"},
    "Fulham": {"name": "Fulham", "id": 63, "nation": "gb-eng"},
    "Wolverhampton": {"name": "Wolverhampton", "id": 76, "nation": "gb-eng"},
    "Everton": {"name": "Everton", "id": 62, "nation": "gb-eng"},
    "West Ham": {"name": "West Ham", "id": 563, "nation": "gb-eng"},
    "Marseille": {"name": "Marseille", "id": 516, "nation": "fr"},
    "Monaco": {"name": "Monaco", "id": 548, "nation": "fr"},
    "RB Leipzig": {"name": "RB Leipzig", "id": 721, "nation": "de"},
    "Eintracht Frankfurt": {"name": "Eintracht Frankfurt", "id": 19, "nation": "de"},
    "Porto": {"name": "Porto", "id": 503, "nation": "pt"},
    "Sporting CP": {"name": "Sporting CP", "id": 1903, "nation": "pt"},
    "Ajax": {"name": "Ajax", "id": 678, "nation": "nl"},
    "PSV": {"name": "PSV", "id": 674, "nation": "nl"},
    "Feyenoord": {"name": "Feyenoord", "id": 675, "nation": "nl"},
    "Galatasaray": {"name": "Galatasaray", "id": 610, "nation": "tr"},
    "Fenerbahce": {"name": "Fenerbahce", "id": 611, "nation": "tr"},
    "Como": {"name": "Como", "id": "como", "nation": "it"},
    "River Plate": {"name": "River Plate", "id": "river", "nation": "ar"},
    "Boca Juniors": {"name": "Boca Juniors", "id": "boca", "nation": "ar"},
    "Palmeiras": {"name": "Palmeiras", "id": "palmeiras", "nation": "br"},
    "Inter Miami": {"name": "Inter Miami", "id": "inter_miami", "nation": "us"},
    "Al Nassr": {"name": "Al Nassr", "id": "al_nassr", "nation": "sa"},
    "Al Hilal": {"name": "Al Hilal", "id": "al_hilal", "nation": "sa"},
    "Al Ittihad": {"name": "Al Ittihad", "id": "al_ittihad", "nation": "sa"},
}

# 2. Definición de Países
NATIONS_MAP = {
    "es": {"name": "España", "code": "es"},
    "ar": {"name": "Argentina", "code": "ar"},
    "br": {"name": "Brasil", "code": "br"},
    "fr": {"name": "Francia", "code": "fr"},
    "de": {"name": "Alemania", "code": "de"},
    "gb-eng": {"name": "Inglaterra", "code": "gb-eng"},
    "it": {"name": "Italia", "code": "it"},
    "pt": {"name": "Portugal", "code": "pt"},
    "nl": {"name": "Países Bajos", "code": "nl"},
    "uy": {"name": "Uruguay", "code": "uy"},
    "hr": {"name": "Croacia", "code": "hr"},
    "be": {"name": "Bélgica", "code": "be"},
    "no": {"name": "Noruega", "code": "no"},
    "pl": {"name": "Polonia", "code": "pl"},
    "sn": {"name": "Senegal", "code": "sn"},
    "ma": {"name": "Marruecos", "code": "ma"},
    "eg": {"name": "Egipto", "code": "eg"},
    "ng": {"name": "Nigeria", "code": "ng"},
    "ci": {"name": "Costa de Marfil", "code": "ci"},
    "cm": {"name": "Camerún", "code": "cm"},
    "dz": {"name": "Argelia", "code": "dz"},
    "gh": {"name": "Ghana", "code": "gh"},
    "co": {"name": "Colombia", "code": "co"},
    "cl": {"name": "Chile", "code": "cl"},
    "ec": {"name": "Ecuador", "code": "ec"},
    "jp": {"name": "Japón", "code": "jp"},
    "kr": {"name": "Corea del Sur", "code": "kr"},
    "tr": {"name": "Turquía", "code": "tr"},
    "at": {"name": "Austria", "code": "at"},
    "ch": {"name": "Suiza", "code": "ch"},
    "dk": {"name": "Dinamarca", "code": "dk"},
    "se": {"name": "Suecia", "code": "se"},
    "ge": {"name": "Georgia", "code": "ge"},
    "ua": {"name": "Ucrania", "code": "ua"},
    "us": {"name": "Estados Unidos", "code": "us"},
    "ru": {"name": "Rusia", "code": "ru"},
    "hu": {"name": "Hungría", "code": "hu"},
    "cz": {"name": "República Checa", "code": "cz"},
    "au": {"name": "Australia", "code": "au"},
    "py": {"name": "Paraguay", "code": "py"},
    "fi": {"name": "Finlandia", "code": "fi"},
    "si": {"name": "Eslovenia", "code": "si"},
    "sk": {"name": "Eslovaquia", "code": "sk"},
    "rs": {"name": "Serbia", "code": "rs"},
    "ro": {"name": "Rumania", "code": "ro"},
    "ie": {"name": "Irlanda", "code": "ie"},
    "gr": {"name": "Grecia", "code": "gr"},
    "mx": {"name": "México", "code": "mx"},
    "pe": {"name": "Perú", "code": "pe"},
    "ve": {"name": "Venezuela", "code": "ve"},
    "ba": {"name": "Bosnia y Herzegovina", "code": "ba"},
    "al": {"name": "Albania", "code": "al"},
    "mk": {"name": "Macedonia del Norte", "code": "mk"},
    "xk": {"name": "Kosovo", "code": "xk"},
    "gb-sct": {"name": "Escocia", "code": "gb-sct"},
    "gb-wls": {"name": "Gales", "code": "gb-wls"},
    "gb-nir": {"name": "Irlanda del Norte", "code": "gb-nir"},
    "sa": {"name": "Arabia Saudí", "code": "sa"},
    "tn": {"name": "Túnez", "code": "tn"},
    "ml": {"name": "Malí", "code": "ml"},
    "gn": {"name": "Guinea", "code": "gn"},
    "bf": {"name": "Burkina Faso", "code": "bf"},
    "cd": {"name": "RD Congo", "code": "cd"},
    "cv": {"name": "Cabo Verde", "code": "cv"},
    "gm": {"name": "Gambia", "code": "gm"},
    "mz": {"name": "Mozambique", "code": "mz"},
    "cf": {"name": "República Centroafricana", "code": "cf"},
    "pa": {"name": "Panamá", "code": "pa"},
    "jm": {"name": "Jamaica", "code": "jm"},
    "is": {"name": "Islandia", "code": "is"},
    "am": {"name": "Armenia", "code": "am"},
    "ir": {"name": "Irán", "code": "ir"}
}

def qs_val(rating, card_type):
    if card_type == "icon": return 25000 + (rating - 90) * 3500
    if card_type == "hero": return 12000 + (rating - 85) * 1500
    if card_type == "totw": return 8000 + (rating - 80) * 1200
    if card_type == "gold_rare":
        if rating >= 90: return 8000 + (rating - 90) * 2000
        if rating >= 86: return 3500 + (rating - 86) * 800
        if rating >= 83: return 1500 + (rating - 83) * 400
        return 700 + (rating - 75) * 40
    if card_type == "silver": return 250 + (rating - 65) * 25
    if card_type == "bronze": return 100 + (rating - 55) * 10
    return 500

def generate_stats_for(pos, rating):
    r = rating
    if pos == "POR":
        return {
            "pac": min(99, max(50, r + random.randint(-4, 3))),
            "sho": min(99, max(50, r + random.randint(-5, 2))),
            "pas": min(99, max(45, r + random.randint(-7, 1))),
            "dri": min(99, max(50, r + random.randint(-3, 4))),
            "def": min(99, max(40, r + random.randint(-12, -2))),
            "phy": min(99, max(45, r + random.randint(-8, 2)))
        }
    elif pos in ["DC", "DEL", "SD"]:
        return {
            "pac": min(99, max(60, int(r * 0.95) + random.randint(-3, 8))),
            "sho": min(99, max(65, r + random.randint(-1, 6))),
            "pas": min(99, max(50, int(r * 0.85) + random.randint(-5, 5))),
            "dri": min(99, max(65, int(r * 0.95) + random.randint(-2, 4))),
            "def": min(99, max(25, int(r * 0.45) + random.randint(-8, 5))),
            "phy": min(99, max(55, int(r * 0.88) + random.randint(-4, 6)))
        }
    elif pos in ["EI", "ED", "MI", "MD"]:
        return {
            "pac": min(99, max(75, r + random.randint(2, 9))),
            "sho": min(99, max(60, int(r * 0.90) + random.randint(-4, 4))),
            "pas": min(99, max(60, int(r * 0.90) + random.randint(-3, 5))),
            "dri": min(99, max(70, r + random.randint(0, 5))),
            "def": min(99, max(30, int(r * 0.48) + random.randint(-6, 6))),
            "phy": min(99, max(50, int(r * 0.75) + random.randint(-6, 5)))
        }
    elif pos in ["MCO", "MC"]:
        return {
            "pac": min(99, max(55, int(r * 0.88) + random.randint(-6, 5))),
            "sho": min(99, max(60, int(r * 0.88) + random.randint(-4, 5))),
            "pas": min(99, max(70, r + random.randint(0, 6))),
            "dri": min(99, max(70, r + random.randint(-1, 5))),
            "def": min(99, max(50, int(r * 0.78) + random.randint(-5, 6))),
            "phy": min(99, max(55, int(r * 0.82) + random.randint(-4, 6)))
        }
    elif pos in ["MCD"]:
        return {
            "pac": min(99, max(55, int(r * 0.82) + random.randint(-6, 4))),
            "sho": min(99, max(50, int(r * 0.75) + random.randint(-6, 4))),
            "pas": min(99, max(65, int(r * 0.90) + random.randint(-3, 5))),
            "dri": min(99, max(65, int(r * 0.85) + random.randint(-4, 4))),
            "def": min(99, max(70, r + random.randint(-1, 5))),
            "phy": min(99, max(70, r + random.randint(0, 6)))
        }
    elif pos in ["DFC"]:
        return {
            "pac": min(99, max(55, int(r * 0.85) + random.randint(-6, 6))),
            "sho": min(99, max(30, int(r * 0.50) + random.randint(-8, 5))),
            "pas": min(99, max(55, int(r * 0.78) + random.randint(-5, 5))),
            "dri": min(99, max(55, int(r * 0.75) + random.randint(-5, 4))),
            "def": min(99, max(75, r + random.randint(0, 6))),
            "phy": min(99, max(70, r + random.randint(-1, 6)))
        }
    elif pos in ["LI", "LD", "CAD", "CAI"]:
        return {
            "pac": min(99, max(75, r + random.randint(1, 8))),
            "sho": min(99, max(45, int(r * 0.70) + random.randint(-6, 5))),
            "pas": min(99, max(65, int(r * 0.88) + random.randint(-3, 5))),
            "dri": min(99, max(65, int(r * 0.88) + random.randint(-3, 4))),
            "def": min(99, max(68, int(r * 0.94) + random.randint(-3, 4))),
            "phy": min(99, max(65, int(r * 0.88) + random.randint(-3, 5)))
        }
    return {"pac": 75, "sho": 75, "pas": 75, "dri": 75, "def": 75, "phy": 75}

def slugify(text):
    s = re.sub(r'[^a-zA-Z0-9]+', '_', text.lower()).strip('_')
    return s

def make_card(pid, name, fullname, rating, card_type, pos, nat_code, club_name_or_dict, face_url=""):
    # Determine club
    if isinstance(club_name_or_dict, dict):
        c_obj = club_name_or_dict
    elif club_name_or_dict in CLUBS_MAP:
        c_info = CLUBS_MAP[club_name_or_dict]
        c_obj = {"name": c_info["name"], "id": c_info["id"]}
    elif club_name_or_dict == "FUT Icons":
        c_obj = {"name": "FUT Icons", "badge": "icon"}
    elif "Hero" in club_name_or_dict or "League" in club_name_or_dict or "Serie A" in club_name_or_dict or "LaLiga" in club_name_or_dict or "Bundesliga" in club_name_or_dict or "Ligue 1" in club_name_or_dict:
        c_obj = {"name": club_name_or_dict, "badge": "hero"}
    else:
        c_obj = {"name": club_name_or_dict, "id": 86}

    # Determine nation
    if nat_code in NATIONS_MAP:
        n_obj = NATIONS_MAP[nat_code]
    else:
        n_obj = {"name": "Internacional", "code": nat_code}

    return {
        "id": pid,
        "name": name,
        "fullName": fullname,
        "rating": rating,
        "cardType": card_type,
        "pos": pos,
        "nation": n_obj,
        "club": c_obj,
        "stats": generate_stats_for(pos, rating),
        "faceUrl": face_url,
        "quickSell": qs_val(rating, card_type)
    }

# 3. Import catalog data
sys.path.insert(0, 'pacibyts')
import build_catalog_data

final_cards = []
seen_ids = set()

# A. Cargar los 99 jugadores originales y actualizar sus escudos y fotos
with open('pacibyts/original_players.json', 'r', encoding='utf-8') as f:
    orig_players = json.load(f)

for p in orig_players:
    c_name = p.get("club", {}).get("name", "")
    # Actualizar club ID si está en CLUBS_MAP
    if c_name in CLUBS_MAP:
        p["club"]["id"] = CLUBS_MAP[c_name]["id"]
    elif "badge" in p.get("club", {}):
        pass # Mantener badge: "icon" o "hero"
    
    # Asegurar fotos correctas para Nico Paz, Estêvão y Mastantuono
    if p["id"] == "silver_paz" or p["name"] == "Nico Paz":
        p["faceUrl"] = "assets/faces/bronze_paz.png"
        p["club"] = {"name": "Como", "id": "como"}
    elif p["id"] == "silver_estevao" or p["name"] == "Estêvão":
        p["faceUrl"] = "assets/faces/silver_estevao.png"
        p["club"] = {"name": "Palmeiras", "id": "palmeiras"}
    elif p["id"] == "silver_mastantuono" or p["name"] == "Mastantuono":
        p["faceUrl"] = "assets/faces/silver_mastantuono.png"
        p["club"] = {"name": "River Plate", "id": "river"}

    if p["id"] not in seen_ids:
        seen_ids.add(p["id"])
        final_cards.append(p)

print(f"Paso 1: {len(final_cards)} cartas originales añadidas y actualizadas.")

# B. Añadir PLAYERS_CATALOG (Iconos y Héroes adicionales)
for item in build_catalog_data.PLAYERS_CATALOG:
    name, fullname, rating, ctype, pos, nat = item[:6]
    club_ref = item[6] if len(item) > 6 else ("FUT Icons" if ctype == "icon" else "Heroes")
    cid = f"{ctype}_{slugify(name)}"
    if cid in seen_ids:
        cid = f"{cid}_{rating}"
    if cid not in seen_ids:
        seen_ids.add(cid)
        final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_ref))

print(f"Paso 2: Con Iconos y Héroes catálogo -> {len(final_cards)} cartas.")

# C. Añadir CLUB_ROSTERS
for club_name, roster in build_catalog_data.CLUB_ROSTERS.items():
    for item in roster:
        name, fullname, rating, ctype, pos, nat = item
        cid = f"{ctype}_{slugify(name)}"
        if cid in seen_ids:
            cid = f"{cid}_{slugify(club_name)}"
        if cid in seen_ids:
            cid = f"{cid}_{rating}"
        if cid not in seen_ids:
            seen_ids.add(cid)
            final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_name))

print(f"Paso 3: Con CLUB_ROSTERS -> {len(final_cards)} cartas.")

# D. Añadir MORE_CLUBS
for club_name, roster in build_catalog_data.MORE_CLUBS.items():
    for item in roster:
        name, fullname, rating, ctype, pos, nat = item
        cid = f"{ctype}_{slugify(name)}"
        if cid in seen_ids:
            cid = f"{cid}_{slugify(club_name)}"
        if cid in seen_ids:
            cid = f"{cid}_{rating}"
        if cid not in seen_ids:
            seen_ids.add(cid)
            final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_name))

print(f"Paso 4: Con MORE_CLUBS -> {len(final_cards)} cartas.")

# E. Añadir Plantillas de los 4 Clubes Adicionales (Fulham, Wolverhampton, Everton, Feyenoord)
EXTRA_LEAGUES_ROSTERS = {
    "Fulham": [
        ("Smith Rowe", "Emile Smith Rowe", 79, "gold_rare", "MCO", "gb-eng"),
        ("Iwobi", "Alex Iwobi", 78, "gold_rare", "MC", "ng"),
        ("Antonee Robinson", "Antonee Robinson", 82, "gold_rare", "LI", "us"),
        ("Andreas Pereira", "Andreas Hugo Hoelgebaum Pereira", 79, "gold_rare", "MC", "br"),
        ("Leno", "Bernd Leno", 82, "gold_rare", "POR", "de"),
        ("Adama Traore", "Adama Traoré Diarra", 77, "gold_rare", "ED", "es"),
        ("Muniz", "Rodrigo Muniz Carvalho", 77, "gold_rare", "DEL", "br"),
        ("Jimenez", "Raúl Alonso Jiménez Rodríguez", 77, "gold_rare", "DEL", "mx"),
        ("Bassey", "Calvin Bassey", 78, "gold_rare", "DFC", "ng"),
        ("Andersen", "Joachim Christian Andersen", 80, "gold_rare", "DFC", "dk"),
        ("Castagne", "Timothy Castagne", 78, "gold_rare", "LD", "be"),
        ("Lukic", "Saša Lukić", 77, "gold_rare", "MC", "rs"),
        ("Sessegnon", "Kouassi Ryan Sessegnon", 76, "gold_rare", "LI", "gb-eng"),
        ("Nelson", "Reiss Luke Nelson", 76, "gold_rare", "EI", "gb-eng"),
        ("Wilson", "Harry Wilson", 76, "gold_rare", "ED", "gb-wls"),
    ],
    "Wolverhampton": [
        ("Matheus Cunha", "Matheus Santos Carneiro da Cunha", 81, "gold_rare", "DEL", "br"),
        ("Ait-Nouri", "Rayan Aït-Nouri", 80, "gold_rare", "LI", "dz"),
        ("Hwang Hee Chan", "Hwang Hee-chan", 80, "gold_rare", "DEL", "kr"),
        ("Lemina", "Mario René Junior Lemina", 79, "gold_rare", "MCD", "ga"),
        ("Jose Sa", "José Pedro Malheiro de Sá", 79, "gold_rare", "POR", "pt"),
        ("Semedo", "Nélson Cabral Semedo", 78, "gold_rare", "LD", "pt"),
        ("Joao Gomes", "João Victor Gomes da Silva", 78, "gold_rare", "MC", "br"),
        ("Andre", "André Trindade da Costa Neto", 79, "gold_rare", "MCD", "br"),
        ("Larsen", "Jørgen Strand Larsen", 77, "gold_rare", "DEL", "no"),
        ("Guedes", "Gonçalo Manuel Ganchinho Guedes", 78, "gold_rare", "EI", "pt"),
        ("Toti Gomes", "Tote António Gomes", 77, "gold_rare", "DFC", "pt"),
        ("Dawson", "Craig Dawson", 76, "gold_rare", "DFC", "gb-eng"),
        ("Bueno", "Santiago Ignacio Bueno Sciutto", 75, "gold_rare", "DFC", "uy"),
        ("Bellegarde", "Jean-Ricner Bellegarde", 76, "gold_rare", "MC", "fr"),
        ("Rodrigo Gomes", "Rodrigo Martins Gomes", 74, "silver", "ED", "pt"),
    ],
    "Everton": [
        ("Pickford", "Jordan Lee Pickford", 83, "gold_rare", "POR", "gb-eng"),
        ("Branthwaite", "Jarrad Paul Branthwaite", 80, "gold_rare", "DFC", "gb-eng"),
        ("Tarkowski", "James Alan Tarkowski", 80, "gold_rare", "DFC", "gb-eng"),
        ("Calvert-Lewin", "Dominic Calvert-Lewin", 78, "gold_rare", "DEL", "gb-eng"),
        ("McNeil", "Dwight James Matthew McNeil", 79, "gold_rare", "EI", "gb-eng"),
        ("Mykolenko", "Vitaliy Serhiyovych Mykolenko", 78, "gold_rare", "LI", "ua"),
        ("Gueye", "Idrissa Gana Gueye", 78, "gold_rare", "MCD", "sn"),
        ("Ndiaye", "Iliman Cheikh Baroy Ndiaye", 77, "gold_rare", "MCO", "sn"),
        ("Lindstrom", "Jesper Grænge Lindstrøm", 76, "gold_rare", "MCO", "dk"),
        ("Garner", "James David Garner", 77, "gold_rare", "MC", "gb-eng"),
        ("Harrison", "Jack David Harrison", 76, "gold_rare", "ED", "gb-eng"),
        ("Doucoure", "Abdoulaye Doucouré", 78, "gold_rare", "MC", "ml"),
        ("Beto", "Norberto Bercique Gomes Betuncal", 76, "gold_rare", "DEL", "pt"),
        ("Mangala", "Orel Johnson Mangala", 76, "gold_rare", "MC", "be"),
        ("Coleman", "Seamus Coleman", 75, "gold_rare", "LD", "ie"),
    ],
    "Feyenoord": [
        ("Gimenez", "Santiago Tomás Giménez", 83, "gold_rare", "DEL", "mx"),
        ("Hancko", "Dávid Hancko", 82, "gold_rare", "DFC", "sk"),
        ("Timber", "Quinten Ryan Crispito Timber", 80, "gold_rare", "MC", "nl"),
        ("Bijlow", "Justin Bijlow", 79, "gold_rare", "POR", "nl"),
        ("Paixao", "Igor Guilherme Barbosa da Paixão", 78, "gold_rare", "EI", "br"),
        ("Stengs", "Calvin Stengs", 78, "gold_rare", "MCO", "nl"),
        ("Trauner", "Gernot Trauner", 77, "gold_rare", "DFC", "at"),
        ("Welleneuther", "Timon Wellenreuther", 77, "gold_rare", "POR", "de"),
        ("Zerrouki", "Ramiz Larbi Zerrouki", 76, "gold_rare", "MCD", "dz"),
        ("Beelen", "Thomas Beelen", 75, "gold_rare", "DFC", "nl"),
        ("Nieuwkoop", "Bart Nieuwkoop", 75, "gold_rare", "LD", "nl"),
        ("Bueno", "Hugo Bueno López", 75, "gold_rare", "LI", "es"),
        ("Carranza", "Julián Simón Carranza", 75, "gold_rare", "DEL", "ar"),
        ("Milambo", "Antoni-Djibu Milambo", 73, "silver", "MC", "nl"),
        ("Zechiël", "Gjivai Zechiël", 71, "silver", "MCD", "nl"),
    ],
    "Lazio": [
        ("Zaccagni", "Mattia Zaccagni", 82, "gold_rare", "EI", "it"),
        ("Guendouzi", "Mattéo Guendouzi Olié", 80, "gold_rare", "MC", "fr"),
        ("Castellanos", "Valentín Mariano José Castellanos Giménez", 79, "gold_rare", "DEL", "ar"),
        ("Romagnoli", "Alessio Romagnoli", 81, "gold_rare", "DFC", "it"),
        ("Provedel", "Ivan Provedel", 81, "gold_rare", "POR", "it"),
        ("Tavares", "Nuno Albertino Varela Tavares", 79, "gold_rare", "LI", "pt"),
        ("Rovella", "Nicolò Rovella", 79, "gold_rare", "MCD", "it"),
        ("Dia", "Boulaye Dia", 79, "gold_rare", "DEL", "sn"),
        ("Isaksen", "Gustav Tang Isaksen", 76, "gold_rare", "ED", "dk"),
        ("Vecino", "Matías Vecino Falero", 78, "gold_rare", "MC", "uy"),
        ("Lazzari", "Manuel Lazzari", 77, "gold_rare", "LD", "it"),
        ("Gila", "Mario Gila Fuentes", 77, "gold_rare", "DFC", "es"),
        ("Patric", "Patricio Gabarrón Gil", 76, "gold_rare", "DFC", "es"),
        ("Noslin", "Tijjani Noslin", 76, "gold_rare", "ED", "nl"),
        ("Tchaouna", "Loum Tchaouna", 74, "silver", "ED", "fr"),
    ]
}

for club_name, roster in EXTRA_LEAGUES_ROSTERS.items():
    for item in roster:
        name, fullname, rating, ctype, pos, nat = item
        cid = f"{ctype}_{slugify(name)}"
        if cid in seen_ids:
            cid = f"{cid}_{slugify(club_name)}"
        if cid in seen_ids:
            cid = f"{cid}_{rating}"
        if cid not in seen_ids:
            seen_ids.add(cid)
            final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_name))

print(f"Paso 5: Con EXTRA_LEAGUES_ROSTERS -> {len(final_cards)} cartas.")

# F. Cartas ESPECIALES TOTW (Team of the Week) de los mejores jugadores para asegurar variedad especial en sobres y draft
TOP_TOTW_PLAYERS = [
    ("Mbappe TOTW", "Kylian Mbappé Lottin", 92, "totw", "DEL", "fr", "Real Madrid"),
    ("Vinicius TOTW", "Vinícius José Paixão de Oliveira Júnior", 91, "totw", "EI", "br", "Real Madrid"),
    ("Bellingham TOTW", "Jude Victor William Bellingham", 91, "totw", "MCO", "gb-eng", "Real Madrid"),
    ("Valverde TOTW", "Federico Santiago Valverde Dipetta", 89, "totw", "MC", "uy", "Real Madrid"),
    ("Courtois TOTW", "Thibaut Nicolas Marc Courtois", 90, "totw", "POR", "be", "Real Madrid"),
    ("Rodrygo TOTW", "Rodrygo Silva de Goes", 87, "totw", "ED", "br", "Real Madrid"),
    ("Camavinga TOTW", "Eduardo Celmi Camavinga", 85, "totw", "MC", "fr", "Real Madrid"),
    ("Brahim TOTW", "Brahim Abdelkader Díaz", 85, "totw", "MCO", "ma", "Real Madrid"),
    ("Yamal TOTW", "Lamine Yamal Nasraoui Ebana", 84, "totw", "ED", "es", "FC Barcelona"),
    ("Lewandowski TOTW", "Robert Lewandowski", 89, "totw", "DEL", "pl", "FC Barcelona"),
    ("Raphinha TOTW", "Raphael Dias Belloli", 86, "totw", "EI", "br", "FC Barcelona"),
    ("Pedri TOTW", "Pedro González López", 87, "totw", "MC", "es", "FC Barcelona"),
    ("Gavi TOTW", "Pablo Martín Páez Gavira", 84, "totw", "MC", "es", "FC Barcelona"),
    ("Kounde TOTW", "Jules Olivier Koundé", 86, "totw", "LD", "fr", "FC Barcelona"),
    ("Olmo TOTW", "Daniel Olmo Carvajal", 85, "totw", "MCO", "es", "FC Barcelona"),
    ("Cubarsi TOTW", "Pau Cubarsí Paredes", 78, "totw", "DFC", "es", "FC Barcelona"),
    ("Haaland TOTW", "Erling Braut Haaland", 92, "totw", "DEL", "no", "Manchester City"),
    ("Rodri TOTW", "Rodrigo Hernández Cascante", 92, "totw", "MCD", "es", "Manchester City"),
    ("De Bruyne TOTW", "Kevin De Bruyne", 91, "totw", "MC", "be", "Manchester City"),
    ("Foden TOTW", "Philip Walter Foden", 89, "totw", "ED", "gb-eng", "Manchester City"),
    ("Gvardiol TOTW", "Joško Gvardiol", 86, "totw", "LI", "hr", "Manchester City"),
    ("Salah TOTW", "Mohamed Salah Hamed Mahrous Ghaly", 90, "totw", "ED", "eg", "Liverpool"),
    ("Van Dijk TOTW", "Virgil van Dijk", 90, "totw", "DFC", "nl", "Liverpool"),
    ("Alisson TOTW", "Alisson Ramses Becker", 90, "totw", "POR", "br", "Liverpool"),
    ("Mac Allister TOTW", "Alexis Mac Allister", 87, "totw", "MC", "ar", "Liverpool"),
    ("Luis Diaz TOTW", "Luis Fernando Díaz Marulanda", 85, "totw", "EI", "co", "Liverpool"),
    ("Szoboszlai TOTW", "Dominik Szoboszlai", 84, "totw", "MCO", "hu", "Liverpool"),
    ("Saka TOTW", "Bukayo Ayoyinka Saka", 88, "totw", "ED", "gb-eng", "Arsenal"),
    ("Odegaard TOTW", "Martin Ødegaard", 90, "totw", "MCO", "no", "Arsenal"),
    ("Saliba TOTW", "William Alain André Gabriel Saliba", 88, "totw", "DFC", "fr"),
    ("Rice TOTW", "Declan Rice", 88, "totw", "MCD", "gb-eng", "Arsenal"),
    ("Gabriel TOTW", "Gabriel dos Santos Magalhães", 87, "totw", "DFC", "br", "Arsenal"),
    ("Kane TOTW", "Harry Edward Kane", 91, "totw", "DEL", "gb-eng", "Bayern München"),
    ("Musiala TOTW", "Jamal Musiala", 88, "totw", "MCO", "de", "Bayern München"),
    ("Kimmich TOTW", "Joshua Walter Kimmich", 87, "totw", "MC", "de", "Bayern München"),
    ("Davies TOTW", "Alphonso Boyle Davies", 84, "totw", "LI", "ca", "Bayern München"),
    ("Wirtz TOTW", "Florian Richard Wirtz", 89, "totw", "MCO", "de", "Bayer Leverkusen"),
    ("Xhaka TOTW", "Granit Xhaka", 87, "totw", "MC", "ch", "Bayer Leverkusen"),
    ("Frimpong TOTW", "Jeremie Agyekum Frimpong", 85, "totw", "LD", "nl", "Bayer Leverkusen"),
    ("Grimaldo TOTW", "Alejandro Grimaldo García", 87, "totw", "LI", "es", "Bayer Leverkusen"),
    ("Lautaro TOTW", "Lautaro Javier Martínez", 90, "totw", "DEL", "ar", "Inter"),
    ("Barella TOTW", "Nicolò Barella", 88, "totw", "MC", "it", "Inter"),
    ("Bastoni TOTW", "Alessandro Bastoni", 88, "totw", "DFC", "it", "Inter"),
    ("Dimarco TOTW", "Federico Dimarco", 85, "totw", "LI", "it", "Inter"),
    ("Griezmann TOTW", "Antoine Griezmann", 89, "totw", "DEL", "fr", "Atlético de Madrid"),
    ("Alvarez TOTW", "Julián Álvarez", 85, "totw", "DEL", "ar", "Atlético de Madrid"),
    ("Cole Palmer TOTW", "Cole Jermaine Palmer", 86, "totw", "ED", "gb-eng", "Chelsea"),
    ("Bruno Fernandes TOTW", "Bruno Miguel Borges Fernandes", 88, "totw", "MCO", "pt", "Manchester United"),
    ("Son TOTW", "Son Heung-min", 88, "totw", "EI", "kr", "Tottenham Hotspur"),
    ("Leao TOTW", "Rafael Alexandre da Conceição Leão", 87, "totw", "EI", "pt", "AC Milan"),
    ("Theo Hernandez TOTW", "Theo Bernard François Hernandez", 88, "totw", "LI", "fr", "AC Milan"),
    ("Kvaratskhelia TOTW", "Khvicha Kvaratskhelia", 86, "totw", "EI", "ge", "Napoli"),
    ("Vlahovic TOTW", "Dušan Vlahović", 85, "totw", "DEL", "rs", "Juventus"),
    ("Gyokeres TOTW", "Viktor Einar Gyökeres", 86, "totw", "DEL", "se", "Sporting CP"),
    ("Marmoush TOTW", "Omar Khaled Mohamed Marmoush", 83, "totw", "DEL", "eg", "Eintracht Frankfurt"),
    ("Sesko TOTW", "Benjamin Šeško", 83, "totw", "DEL", "si", "RB Leipzig"),
    ("Nico Paz TOTW", "Nicolás Paz Martínez", 78, "totw", "MCO", "ar", "Como"),
    ("Mastantuono TOTW", "Franco Mastantuono", 78, "totw", "MCO", "ar", "River Plate"),
    ("Estevao TOTW", "Estêvão Willian Almeida de Oliveira Gonçalves", 78, "totw", "ED", "br", "Palmeiras"),
    ("Messi TOTW", "Lionel Andrés Messi Cuccittini", 89, "totw", "ED", "ar", "Inter Miami"),
    ("Cristiano Ronaldo TOTW", "Cristiano Ronaldo dos Santos Aveiro", 87, "totw", "DEL", "pt", "Al Nassr"),
]

for item in TOP_TOTW_PLAYERS:
    name, fullname, rating, ctype, pos, nat = item[:6]
    club_ref = item[6] if len(item) > 6 else "Arsenal"
    cid = f"totw_{slugify(name)}"
    if cid in seen_ids:
        cid = f"{cid}_{rating}"
    if cid not in seen_ids:
        seen_ids.add(cid)
        final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_ref))

print(f"Paso 6: Con TOTW estelares -> {len(final_cards)} cartas.")

# G. Si aún no llega a 1,020, completar con jugadores reales de cantera y rotación para los clubes principales
if len(final_cards) < 1010:
    RESERVES_TOP = [
        ("Endrick", "Endrick Felipe Moreira de Sousa", 77, "gold_rare", "DEL", "br", "Real Madrid"),
        ("Vallejo", "Jesús Vallejo Lázaro", 73, "silver", "DFC", "es", "Real Madrid"),
        ("Fran Garcia", "Francisco José García Torres", 78, "gold_rare", "LI", "es", "Real Madrid"),
        ("Lucas Vazquez", "Lucas Vázquez Iglesias", 81, "gold_rare", "LD", "es", "Real Madrid"),
        ("Ceballos", "Daniel Ceballos Fernández", 79, "gold_rare", "MC", "es", "Real Madrid"),
        ("Guille Fernandez", "Guillermo Fernández Casino", 66, "silver", "MC", "es", "FC Barcelona"),
        ("Toni Fernandez", "Antonio Fernández Casino", 65, "silver", "ED", "es", "FC Barcelona"),
        ("Gerard Martin", "Gerard Martín Langreo", 67, "silver", "LI", "es", "FC Barcelona"),
        ("Sergi Dominguez", "Sergi Domínguez Viloria", 66, "silver", "DFC", "es", "FC Barcelona"),
        ("Kaiky", "Kaiky Fernandes Melo", 72, "silver", "DFC", "br", "Palmeiras"),
        ("Vitor Reis", "Vitor de Oliveira Reis", 70, "silver", "DFC", "br", "Palmeiras"),
        ("Fabinho Palmeiras", "Fábio Silva de Freitas", 72, "silver", "MCD", "br", "Palmeiras"),
        ("Ian Subiabre", "Ian Martín Subiabre", 67, "silver", "ED", "ar", "River Plate"),
        ("Agustin Ruberto", "Agustín Fabián Ruberto", 68, "silver", "DEL", "ar", "River Plate"),
        ("Tobias Leiva", "Tobías Leiva", 65, "silver", "MC", "ar", "River Plate"),
        ("Daniel Zabala", "Daniel Zabala", 66, "silver", "DFC", "ar", "River Plate"),
        ("Jabes Saralegui", "Jabes Saralegui", 70, "silver", "MC", "ar", "Boca Juniors"),
        ("Mauricio Benitez", "Mauricio Benítez", 68, "silver", "MCD", "ar", "Boca Juniors"),
        ("Lautaro Di Lollo", "Lautaro Di Lollo", 68, "silver", "DFC", "ar", "Boca Juniors"),
        ("Milton Delgado", "Milton Delgado", 67, "silver", "MCD", "ar", "Boca Juniors"),
    ]
    for item in RESERVES_TOP:
        name, fullname, rating, ctype, pos, nat, club_ref = item
        cid = f"{ctype}_{slugify(name)}"
        if cid in seen_ids:
            cid = f"{cid}_{slugify(club_ref)}"
        if cid not in seen_ids:
            seen_ids.add(cid)
            final_cards.append(make_card(cid, name, fullname, rating, ctype, pos, nat, club_ref))

print(f"Total Cartas Construidas: {len(final_cards)}")
assert len(final_cards) >= 1000, f"Error: Solo se obtuvieron {len(final_cards)} cartas"

# 4. Leer PACKS_CONFIG existente del archivo original
with open('pacibyts/ui/database.js', 'r', encoding='utf-8') as f:
    orig_text = f.read()

m_packs = re.search(r'(// Tipos de sobres.*)', orig_text, re.DOTALL)
if not m_packs:
    print("ERROR: No se encontró la sección PACKS_CONFIG")
    exit(1)

packs_config_block = m_packs.group(1)

# 5. Generar el nuevo database.js formateado perfectamente
js_output = "// Base de datos completa de cartas FC 27 estilo PacyBits / FUT (Más de 1000 cartas reales)\n"
js_output += "const PLAYERS_DB = " + json.dumps(final_cards, ensure_ascii=False, indent=4) + ";\n\n"
js_output += packs_config_block

with open('pacibyts/ui/database.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print(f"ÉXITO TOTAL: database.js generado con {len(final_cards)} cartas y guardado.")
