import urllib.request
import os

clubs = {
    86: ("Real Madrid", "https://crests.football-data.org/86.png"),
    81: ("FC Barcelona", "https://crests.football-data.org/81.png"),
    65: ("Manchester City", "https://crests.football-data.org/65.png"),
    64: ("Liverpool", "https://crests.football-data.org/64.png"),
    5:  ("Bayern München", "https://crests.football-data.org/5.png"),
    57: ("Arsenal", "https://crests.football-data.org/57.png"),
    61: ("Chelsea", "https://crests.football-data.org/61.png"),
    66: ("Manchester United", "https://crests.football-data.org/66.png"),
    73: ("Tottenham Hotspur", "https://crests.football-data.org/73.png"),
    524: ("Paris Saint-Germain", "https://crests.football-data.org/524.png"),
    108: ("Inter", "https://crests.football-data.org/108.png"),
    98:  ("AC Milan", "https://crests.football-data.org/98.png"),
    78:  ("Atlético de Madrid", "https://crests.football-data.org/78.png"),
    3:   ("Bayer Leverkusen", "https://crests.football-data.org/3.png"),
    109: ("Juventus", "https://crests.football-data.org/109.png"),
    4:   ("Borussia Dortmund", "https://crests.football-data.org/4.png"),
    100: ("Roma", "https://crests.football-data.org/100.png"),
    113: ("Napoli", "https://crests.football-data.org/113.png"),
    67:  ("Newcastle United", "https://crests.football-data.org/67.png"),
    77:  ("Athletic Club", "https://crests.football-data.org/77.png"),
    90:  ("Real Betis", "https://crests.football-data.org/90.png"),
    559: ("Sevilla", "https://crests.football-data.org/559.png"),
    92:  ("Real Sociedad", "https://crests.football-data.org/92.png"),
    94:  ("Villarreal", "https://crests.football-data.org/94.png"),
    298: ("Girona", "https://crests.football-data.org/298.png"),
    102: ("Atalanta", "https://crests.football-data.org/102.png"),
    110: ("Lazio", "https://crests.football-data.org/110.png"),
    63:  ("Fulham", "https://crests.football-data.org/63.png"),
    76:  ("Wolverhampton", "https://crests.football-data.org/76.png"),
    62:  ("Everton", "https://crests.football-data.org/62.png"),
    563: ("West Ham", "https://crests.football-data.org/563.png"),
    516: ("Marseille", "https://crests.football-data.org/516.png"),
    548: ("Monaco", "https://crests.football-data.org/548.png"),
    721: ("RB Leipzig", "https://crests.football-data.org/721.png"),
    19:  ("Eintracht Frankfurt", "https://crests.football-data.org/19.png"),
    503: ("Porto", "https://crests.football-data.org/503.png"),
    1903: ("Sporting CP", "https://crests.football-data.org/1903.png"),
    678: ("Ajax", "https://crests.football-data.org/678.png"),
}

os.makedirs("pacibyts/ui/assets/clubs", exist_ok=True)

for cid, (name, url) in clubs.items():
    dest = f"pacibyts/ui/assets/clubs/{cid}.png"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as r:
            data = r.read()
            with open(dest, "wb") as f:
                f.write(data)
            print(f"OK [{cid}] {name} ({len(data)}b)")
    except Exception as e:
        print(f"ERR [{cid}] {name}: {e}")
