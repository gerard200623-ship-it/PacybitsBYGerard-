# -*- coding: utf-8 -*-
"""
Generador completo para superar las 1000 cartas reales en Pacybits FC 27.
Conserva las cartas existentes actualizando sus escudos a los archivos oficiales correctos,
agrega las leyendas, estrellas actuales, promesas, totw y jugadores de todas las grandes ligas.
"""

import json
import random
import re
import os

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

print("Base setup loaded successfully")
