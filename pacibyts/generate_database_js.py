# -*- coding: utf-8 -*-
"""
generate_database_js.py
=======================
Lee fc_database.db (SQLite) y genera database.js con PLAYERS_DB + PACKS_CONFIG
para que la app funcione directamente desde el navegador.

Conserva los iconos y héroes inventados del database.js original que no están
en el CSV (Pelé, Maradona, Zidane, etc.) como cartas especiales.
"""

import sqlite3
import os
import json

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(SCRIPT_DIR, "ui", "fc_database.db")
JS_PATH = os.path.join(SCRIPT_DIR, "ui", "database.js")

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
    "Juventus": {"name": "Juventus", "id": 109},
    "Borussia Dortmund": {"name": "Borussia Dortmund", "id": 4},
    "Tottenham Hotspur": {"name": "Tottenham Hotspur", "id": 73},
    "Spurs": {"name": "Tottenham Hotspur", "id": 73},
    "Roma": {"name": "Roma", "id": 100},
    "Napoli": {"name": "Napoli", "id": 113},
    "Newcastle United": {"name": "Newcastle United", "id": 67},
    "Aston Villa": {"name": "Aston Villa", "id": 2},
    "Brighton": {"name": "Brighton", "id": 1808},
    "Athletic Club": {"name": "Athletic Club", "id": 77},
    "Real Betis": {"name": "Real Betis", "id": 90},
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
    "Porto": {"name": "Porto", "id": 503},
    "Sporting CP": {"name": "Sporting CP", "id": 1903},
    "Benfica": {"name": "Benfica", "id": 234},
    "Ajax": {"name": "Ajax", "id": 678},
    "PSV": {"name": "PSV", "id": 674},
    "Feyenoord": {"name": "Feyenoord", "id": 675},
    "Galatasaray": {"name": "Galatasaray", "id": 610},
    "Fenerbahce": {"name": "Fenerbahce", "id": 611},
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

# ── Iconos y héroes históricos (no existen en CSV de EA FC) ───────────────
# Estas cartas se preservan del database.js original tal cual.
LEGACY_SPECIAL_CARDS = [
    {
        "id": "icon_pele", "name": "Pelé", "fullName": "Edson Arantes do Nascimento",
        "rating": 98, "cardType": "icon", "pos": "MCO",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 95, "sho": 96, "pas": 93, "dri": 96, "def": 60, "phy": 76},
        "faceUrl": "https://cdn.sofifa.net/players/237/067/25_120.png", "quickSell": 50000
    },
    {
        "id": "icon_maradona", "name": "Maradona", "fullName": "Diego Armando Maradona",
        "rating": 97, "cardType": "icon", "pos": "MCO",
        "nation": {"name": "Argentina", "code": "ar"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 92, "sho": 93, "pas": 92, "dri": 97, "def": 42, "phy": 75},
        "faceUrl": "https://cdn.sofifa.net/players/190/043/25_120.png", "quickSell": 45000
    },
    {
        "id": "icon_r9", "name": "Ronaldo R9", "fullName": "Ronaldo Nazário de Lima",
        "rating": 96, "cardType": "icon", "pos": "DEL",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 97, "sho": 95, "pas": 81, "dri": 95, "def": 45, "phy": 80},
        "faceUrl": "https://cdn.sofifa.net/players/037/576/25_120.png", "quickSell": 40000
    },
    {
        "id": "icon_zidane", "name": "Zidane", "fullName": "Zinedine Zidane",
        "rating": 96, "cardType": "icon", "pos": "MCO",
        "nation": {"name": "Francia", "code": "fr"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 85, "sho": 92, "pas": 96, "dri": 95, "def": 72, "phy": 80},
        "faceUrl": "https://cdn.sofifa.net/players/001/397/25_120.png", "quickSell": 40000
    },
    {
        "id": "icon_cruyff", "name": "Cruyff", "fullName": "Johan Cruyff",
        "rating": 95, "cardType": "icon", "pos": "MCO",
        "nation": {"name": "Países Bajos", "code": "nl"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 89, "sho": 90, "pas": 92, "dri": 96, "def": 52, "phy": 67},
        "faceUrl": "https://cdn.sofifa.net/players/242/519/25_120.png", "quickSell": 38000
    },
    {
        "id": "icon_ronaldinho", "name": "Ronaldinho", "fullName": "Ronaldo de Assis Moreira",
        "rating": 95, "cardType": "icon", "pos": "MCO",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 91, "sho": 89, "pas": 91, "dri": 97, "def": 38, "phy": 74},
        "faceUrl": "https://cdn.sofifa.net/players/028/130/25_120.png", "quickSell": 38000
    },
    {
        "id": "icon_maldini", "name": "Maldini", "fullName": "Paolo Maldini",
        "rating": 95, "cardType": "icon", "pos": "DFC",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 82, "sho": 55, "pas": 76, "dri": 79, "def": 96, "phy": 85},
        "faceUrl": "https://cdn.sofifa.net/players/001/075/25_120.png", "quickSell": 38000
    },
    {
        "id": "icon_henry", "name": "Henry", "fullName": "Thierry Henry",
        "rating": 94, "cardType": "icon", "pos": "DEL",
        "nation": {"name": "Francia", "code": "fr"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 96, "sho": 93, "pas": 86, "dri": 92, "def": 40, "phy": 79},
        "faceUrl": "https://cdn.sofifa.net/players/001/625/25_120.png", "quickSell": 35000
    },
    {
        "id": "icon_gullit", "name": "Gullit", "fullName": "Ruud Gullit",
        "rating": 94, "cardType": "icon", "pos": "MC",
        "nation": {"name": "Países Bajos", "code": "nl"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 80, "sho": 88, "pas": 86, "dri": 88, "def": 82, "phy": 90},
        "faceUrl": "https://cdn.sofifa.net/players/214/100/25_120.png", "quickSell": 35000
    },
    {
        "id": "icon_yashin", "name": "Yashin", "fullName": "Lev Yashin",
        "rating": 94, "cardType": "icon", "pos": "POR",
        "nation": {"name": "Rusia", "code": "ru"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 88, "sho": 0, "pas": 65, "dri": 60, "def": 0, "phy": 85},
        "faceUrl": "https://cdn.sofifa.net/players/238/380/25_120.png", "quickSell": 35000
    },
    {
        "id": "icon_xavi", "name": "Xavi", "fullName": "Xavier Hernández Creus",
        "rating": 93, "cardType": "icon", "pos": "MC",
        "nation": {"name": "España", "code": "es"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 70, "sho": 78, "pas": 96, "dri": 92, "def": 72, "phy": 62},
        "faceUrl": "https://cdn.sofifa.net/players/010/535/25_120.png", "quickSell": 30000
    },
    {
        "id": "icon_iniesta_icon", "name": "Iniesta", "fullName": "Andrés Iniesta Luján",
        "rating": 93, "cardType": "icon", "pos": "MC",
        "nation": {"name": "España", "code": "es"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 78, "sho": 80, "pas": 94, "dri": 96, "def": 65, "phy": 59},
        "faceUrl": "https://cdn.sofifa.net/players/010/741/25_120.png", "quickSell": 30000
    },
    {
        "id": "icon_pirlo", "name": "Pirlo", "fullName": "Andrea Pirlo",
        "rating": 92, "cardType": "icon", "pos": "MC",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 60, "sho": 78, "pas": 95, "dri": 88, "def": 68, "phy": 55},
        "faceUrl": "https://cdn.sofifa.net/players/007/763/25_120.png", "quickSell": 25000
    },
    {
        "id": "icon_buffon", "name": "Buffon", "fullName": "Gianluigi Buffon",
        "rating": 92, "cardType": "icon", "pos": "POR",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 86, "sho": 0, "pas": 60, "dri": 55, "def": 0, "phy": 82},
        "faceUrl": "https://cdn.sofifa.net/players/001/179/25_120.png", "quickSell": 25000
    },
    {
        "id": "icon_casillas", "name": "Casillas", "fullName": "Iker Casillas",
        "rating": 92, "cardType": "icon", "pos": "POR",
        "nation": {"name": "España", "code": "es"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 87, "sho": 0, "pas": 62, "dri": 50, "def": 0, "phy": 80},
        "faceUrl": "https://cdn.sofifa.net/players/005/479/25_120.png", "quickSell": 25000
    },
    {
        "id": "icon_roberto_carlos", "name": "R. Carlos", "fullName": "Roberto Carlos da Silva Rocha",
        "rating": 91, "cardType": "icon", "pos": "LI",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 93, "sho": 80, "pas": 85, "dri": 85, "def": 82, "phy": 84},
        "faceUrl": "https://cdn.sofifa.net/players/001/092/25_120.png", "quickSell": 22000
    },
    {
        "id": "icon_cafu", "name": "Cafú", "fullName": "Marcos Evangelista de Moraes",
        "rating": 91, "cardType": "icon", "pos": "LD",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Icons", "badge": "icon"},
        "stats": {"pac": 91, "sho": 65, "pas": 82, "dri": 84, "def": 88, "phy": 85},
        "faceUrl": "https://cdn.sofifa.net/players/001/093/25_120.png", "quickSell": 22000
    },
    # ── Héroes ──
    {
        "id": "hero_ginola", "name": "Ginola", "fullName": "David Ginola",
        "rating": 89, "cardType": "hero", "pos": "EI",
        "nation": {"name": "Francia", "code": "fr"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 86, "sho": 85, "pas": 84, "dri": 93, "def": 35, "phy": 72},
        "faceUrl": "https://cdn.sofifa.net/players/264/875/25_120.png", "quickSell": 18000
    },
    {
        "id": "hero_toure", "name": "Yaya Touré", "fullName": "Gnégnéri Yaya Touré",
        "rating": 89, "cardType": "hero", "pos": "MC",
        "nation": {"name": "Costa de Marfil", "code": "ci"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 78, "sho": 85, "pas": 84, "dri": 82, "def": 78, "phy": 92},
        "faceUrl": "https://cdn.sofifa.net/players/167/948/25_120.png", "quickSell": 18000
    },
    {
        "id": "hero_sneijder", "name": "Sneijder", "fullName": "Wesley Sneijder",
        "rating": 88, "cardType": "hero", "pos": "MCO",
        "nation": {"name": "Países Bajos", "code": "nl"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 74, "sho": 87, "pas": 90, "dri": 85, "def": 55, "phy": 60},
        "faceUrl": "https://cdn.sofifa.net/players/173/731/25_120.png", "quickSell": 15000
    },
    {
        "id": "hero_hazard", "name": "Hazard", "fullName": "Eden Hazard",
        "rating": 88, "cardType": "hero", "pos": "EI",
        "nation": {"name": "Bélgica", "code": "be"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 90, "sho": 82, "pas": 87, "dri": 95, "def": 35, "phy": 66},
        "faceUrl": "https://cdn.sofifa.net/players/183/277/25_120.png", "quickSell": 15000
    },
    {
        "id": "hero_kompany", "name": "Kompany", "fullName": "Vincent Kompany",
        "rating": 87, "cardType": "hero", "pos": "DFC",
        "nation": {"name": "Bélgica", "code": "be"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 68, "sho": 52, "pas": 65, "dri": 62, "def": 90, "phy": 88},
        "faceUrl": "https://cdn.sofifa.net/players/152/999/25_120.png", "quickSell": 12000
    },
    {
        "id": "hero_tevez", "name": "Tévez", "fullName": "Carlos Alberto Tévez",
        "rating": 87, "cardType": "hero", "pos": "DEL",
        "nation": {"name": "Argentina", "code": "ar"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 86, "sho": 85, "pas": 77, "dri": 88, "def": 52, "phy": 86},
        "faceUrl": "https://cdn.sofifa.net/players/143/001/25_120.png", "quickSell": 12000
    },
    {
        "id": "hero_forlan", "name": "Forlán", "fullName": "Diego Forlán Corazo",
        "rating": 87, "cardType": "hero", "pos": "DEL",
        "nation": {"name": "Uruguay", "code": "uy"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 82, "sho": 90, "pas": 80, "dri": 82, "def": 40, "phy": 75},
        "faceUrl": "https://cdn.sofifa.net/players/268/000/25_120.png", "quickSell": 12000
    },
    {
        "id": "hero_lucio", "name": "Lúcio", "fullName": "Lucimar Ferreira da Silva",
        "rating": 86, "cardType": "hero", "pos": "DFC",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "FUT Heroes", "badge": "hero"},
        "stats": {"pac": 76, "sho": 55, "pas": 60, "dri": 62, "def": 89, "phy": 90},
        "faceUrl": "https://cdn.sofifa.net/players/258/885/25_120.png", "quickSell": 10000
    },
    # ── Hall of FUT (EA FC 27) ──
    {
        "id": "hof_hulk", "name": "Hulk", "fullName": "Givanildo Vieira de Sousa",
        "rating": 85, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 88, "sho": 92, "pas": 82, "dri": 86, "def": 48, "phy": 90},
        "faceUrl": "assets/faces/hof_hulk.webp", "quickSell": 50000, "tokenPrice": 750
    },
    {
        "id": "hof_pato", "name": "Alexandre Pato", "fullName": "Alexandre Rodrigues da Silva",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 91, "sho": 86, "pas": 77, "dri": 88, "def": 36, "phy": 74},
        "faceUrl": "assets/faces/hof_pato.webp", "quickSell": 45000, "tokenPrice": 650
    },
    {
        "id": "hof_david_luiz", "name": "David Luiz", "fullName": "David Luiz Moreira Marinho",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DFC",
        "nation": {"name": "Brasil", "code": "br"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 78, "sho": 68, "pas": 79, "dri": 76, "def": 86, "phy": 85},
        "faceUrl": "assets/faces/hof_david_luiz.webp", "quickSell": 45000, "tokenPrice": 650
    },
    {
        "id": "hof_balotelli", "name": "Balotelli", "fullName": "Mario Barwuah Balotelli",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 84, "sho": 88, "pas": 78, "dri": 86, "def": 32, "phy": 85},
        "faceUrl": "assets/faces/hof_balotelli.webp", "quickSell": 45000, "tokenPrice": 600
    },
    {
        "id": "hof_valencia", "name": "Enner Valencia", "fullName": "Enner Remberto Valencia Lastra",
        "rating": 85, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Ecuador", "code": "ec"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 90, "sho": 85, "pas": 74, "dri": 83, "def": 42, "phy": 84},
        "faceUrl": "assets/faces/hof_valencia.webp", "quickSell": 40000, "tokenPrice": 550
    },
    {
        "id": "hof_fellaini", "name": "Fellaini", "fullName": "Marouane Fellaini-Bakkioui",
        "rating": 85, "cardType": "hall_of_fut", "pos": "MC",
        "nation": {"name": "Bélgica", "code": "be"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 62, "sho": 80, "pas": 78, "dri": 79, "def": 84, "phy": 94},
        "faceUrl": "assets/faces/hof_fellaini.webp", "quickSell": 40000, "tokenPrice": 550
    },
    {
        "id": "hof_walcott", "name": "Walcott", "fullName": "Theo James Walcott",
        "rating": 85, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 96, "sho": 81, "pas": 78, "dri": 85, "def": 38, "phy": 68},
        "faceUrl": "assets/faces/hof_walcott.webp", "quickSell": 40000, "tokenPrice": 550
    },
    {
        "id": "hof_richards", "name": "Micah Richards", "fullName": "Micah Lincoln Richards",
        "rating": 85, "cardType": "hall_of_fut", "pos": "LD",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 85, "sho": 58, "pas": 71, "dri": 75, "def": 85, "phy": 89},
        "faceUrl": "assets/faces/hof_richards.webp", "quickSell": 40000, "tokenPrice": 500
    },
    {
        "id": "hof_blaszczykowski", "name": "Błaszczykowski", "fullName": "Jakub Błaszczykowski",
        "rating": 85, "cardType": "hall_of_fut", "pos": "MD",
        "nation": {"name": "Polonia", "code": "pl"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 93, "sho": 78, "pas": 80, "dri": 84, "def": 60, "phy": 77},
        "faceUrl": "assets/faces/hof_blaszczykowski.webp", "quickSell": 40000, "tokenPrice": 500
    },
    {
        "id": "hof_akinfenwa", "name": "Akinfenwa", "fullName": "Adebayo Akinfenwa",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Inglaterra", "code": "gb-eng"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 70, "sho": 83, "pas": 68, "dri": 76, "def": 42, "phy": 99},
        "faceUrl": "assets/faces/hof_akinfenwa.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_doumbia", "name": "Doumbia", "fullName": "Seydou Doumbia",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Costa de Marfil", "code": "ci"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 93, "sho": 84, "pas": 72, "dri": 83, "def": 35, "phy": 79},
        "faceUrl": "assets/faces/hof_doumbia.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_ibarbo", "name": "Ibarbo", "fullName": "Segundo Víctor Ibarbo Guerrero",
        "rating": 84, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "Colombia", "code": "co"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 94, "sho": 79, "pas": 74, "dri": 84, "def": 45, "phy": 86},
        "faceUrl": "assets/faces/hof_ibarbo.webp", "quickSell": 35000, "tokenPrice": 450
    },
    {
        "id": "hof_gervinho", "name": "Gervinho", "fullName": "Gervais Lombe Yao Kouassi",
        "rating": 84, "cardType": "hall_of_fut", "pos": "EI",
        "nation": {"name": "Costa de Marfil", "code": "ci"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 93, "sho": 78, "pas": 76, "dri": 87, "def": 34, "phy": 72},
        "faceUrl": "assets/faces/hof_gervinho.webp", "quickSell": 35000, "tokenPrice": 400
    },
    {
        "id": "hof_emenike", "name": "Emenike", "fullName": "Emmanuel Chinenye Emenike",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Nigeria", "code": "ng"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 91, "sho": 83, "pas": 68, "dri": 78, "def": 36, "phy": 92},
        "faceUrl": "assets/faces/hof_emenike.webp", "quickSell": 35000, "tokenPrice": 400
    },
    {
        "id": "hof_guarin", "name": "Guarín", "fullName": "Fredy Alejandro Guarín Vásquez",
        "rating": 84, "cardType": "hall_of_fut", "pos": "MC",
        "nation": {"name": "Colombia", "code": "co"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 78, "sho": 85, "pas": 82, "dri": 80, "def": 77, "phy": 88},
        "faceUrl": "assets/faces/hof_guarin.webp", "quickSell": 35000, "tokenPrice": 380
    },
    {
        "id": "hof_remy", "name": "Loïc Rémy", "fullName": "Loïc Alex Teliere Hubert Rémy",
        "rating": 84, "cardType": "hall_of_fut", "pos": "DEL",
        "nation": {"name": "Francia", "code": "fr"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 91, "sho": 83, "pas": 73, "dri": 81, "def": 35, "phy": 76},
        "faceUrl": "assets/faces/hof_remy.webp", "quickSell": 30000, "tokenPrice": 350
    },
    {
        "id": "hof_elia", "name": "Eljero Elia", "fullName": "Eljero George Rinaldo Elia",
        "rating": 84, "cardType": "hall_of_fut", "pos": "EI",
        "nation": {"name": "Países Bajos", "code": "nl"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 92, "sho": 78, "pas": 77, "dri": 87, "def": 36, "phy": 70},
        "faceUrl": "assets/faces/hof_elia.webp", "quickSell": 30000, "tokenPrice": 350
    },
    {
        "id": "hof_dos_santos", "name": "G. dos Santos", "fullName": "Giovani dos Santos Ramírez",
        "rating": 84, "cardType": "hall_of_fut", "pos": "ED",
        "nation": {"name": "México", "code": "mx"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 88, "sho": 80, "pas": 82, "dri": 88, "def": 38, "phy": 68},
        "faceUrl": "assets/faces/hof_dos_santos.webp", "quickSell": 30000, "tokenPrice": 300
    },
    {
        "id": "hof_florenzi", "name": "Florenzi", "fullName": "Alessandro Florenzi",
        "rating": 84, "cardType": "hall_of_fut", "pos": "LD",
        "nation": {"name": "Italia", "code": "it"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 85, "sho": 77, "pas": 82, "dri": 83, "def": 81, "phy": 78},
        "faceUrl": "assets/faces/hof_florenzi.webp", "quickSell": 30000, "tokenPrice": 300
    },
    {
        "id": "hof_mcgeady", "name": "McGeady", "fullName": "Aiden John McGeady",
        "rating": 84, "cardType": "hall_of_fut", "pos": "MI",
        "nation": {"name": "Irlanda", "code": "ie"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 89, "sho": 76, "pas": 80, "dri": 88, "def": 38, "phy": 66},
        "faceUrl": "assets/faces/hof_mcgeady.webp", "quickSell": 30000, "tokenPrice": 250
    },
    {
        "id": "hof_layun", "name": "Layún", "fullName": "Miguel Arturo Layún Prado",
        "rating": 84, "cardType": "hall_of_fut", "pos": "LD",
        "nation": {"name": "México", "code": "mx"},
        "club": {"name": "Hall of FUT", "badge": "hof"},
        "stats": {"pac": 87, "sho": 78, "pas": 81, "dri": 80, "def": 78, "phy": 80},
        "faceUrl": "assets/faces/hof_layun.webp", "quickSell": 30000, "tokenPrice": 250
    }
]

# ── TOTW: top ~50 jugadores reales del CSV, asignados como TOTW ──────────
# Seleccionaremos los 50 mejores ratings de la DB y los marcaremos como totw
TOTW_COUNT = 50


def main():
    if not os.path.exists(DB_PATH):
        print(f"ERROR: No se encuentra {DB_PATH}. Ejecuta migrate_csv_to_sqlite.py primero.")
        return

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    cur.execute("SELECT * FROM players ORDER BY overall_rating DESC, player_id ASC")
    rows = cur.fetchall()
    conn.close()

    print(f"Jugadores leídos de SQLite: {len(rows)}")

    # Preparar lista de JS objects
    players_js = []

    # 1) Añadir legacy icons y heroes primero
    for card in LEGACY_SPECIAL_CARDS:
        players_js.append(card)

    legacy_ids = {c["id"] for c in LEGACY_SPECIAL_CARDS}

    # 2) Generar TOTW a partir de los top jugadores
    totw_ids = set()
    totw_count = 0
    for row in rows:
        if totw_count >= TOTW_COUNT:
            break
        pid = row["player_id"]
        if str(pid) not in legacy_ids:
            totw_ids.add(pid)
            totw_count += 1

    # 3) Convertir filas de SQLite a objetos JS
    for row in rows:
        pid = row["player_id"]

        # Mapeo de escudo de club si existe
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

        # 1) Carta base normal (Oro Único, Oro Común, Plata, Bronce)
        # Siempre se añade con su tipo original para que exista su versión normal
        player_obj = {
            "id": pid,
            "name": row["display_name"],
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

        # 2) Si está en totw_ids, generar ADEMÁS la versión especial TOTW
        # Los Iconos y Héroes siguen siendo la única excepción sin versión normal.
        if pid in totw_ids:
            boost = 1 if row["overall_rating"] >= 88 else 2
            totw_stats = {
                k: min(99, v + boost) for k, v in base_stats.items()
            }
            totw_player = {
                "id": f"{pid}_totw",
                "basePlayerId": pid,
                "name": row["display_name"],
                "fullName": row["full_name"],
                "rating": min(99, row["overall_rating"] + boost),
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
                "faceUrl": row["face_url"],
                "quickSell": int(row["quick_sell"] * 1.8 + 5000)
            }
            players_js.append(totw_player)

    print(f"Total cartas en database.js: {len(players_js)}")

    # Contar por tipo
    type_counts = {}
    for p in players_js:
        t = p["cardType"]
        type_counts[t] = type_counts.get(t, 0) + 1
    print("\nDistribución por cardType:")
    for t, c in sorted(type_counts.items(), key=lambda x: -x[1]):
        print(f"   {t}: {c}")

    # ── Generar database.js ───────────────────────────────────────────────
    # Recoger lista de todas las caras locales para sincronización instantánea
    faces_dir = os.path.join(SCRIPT_DIR, "ui", "assets", "faces")
    local_faces_list = []
    if os.path.exists(faces_dir):
        local_faces_list = [
            os.path.splitext(f)[0] for f in os.listdir(faces_dir)
            if f.lower().endswith(".webp") or f.lower().endswith(".png")
        ]

    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write("// Base de datos FC 27 - Generada automáticamente desde fc_database.db + cartas especiales legacy\n")
        f.write("// Total de cartas: {}\n".format(len(players_js)))
        f.write(f"const LOCAL_FACES_MANIFEST = new Set({json.dumps(local_faces_list)});\n\n")
        f.write("const PLAYERS_DB = ")
        # Serializar JSON con indentación compacta
        json_str = json.dumps(players_js, ensure_ascii=False, indent=2)
        f.write(json_str)
        f.write(";\n\n")

        # PACKS_CONFIG (mantener la misma)
        f.write("""// Tipos de sobres y configuración de tienda (9 cartas exactas salvo Iconos)
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

if (typeof module !== 'undefined') {
    module.exports = { PLAYERS_DB, PACKS_CONFIG };
}
""")

    # Tamaño del archivo resultante
    file_size = os.path.getsize(JS_PATH)
    print(f"\n[OK] database.js generado: {JS_PATH}")
    print(f"   Tamano: {file_size / 1024 / 1024:.1f} MB")
    print("Generacion completada con exito!")


if __name__ == "__main__":
    main()
