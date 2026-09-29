with open("ui/database.js", "r", encoding="utf-8") as f:
    text = f.read()

import re, json

matches = re.findall(r'\{\s*"id":\s*"(icon_[^"]+|hero_[^"]+)",[\s\S]*?"cardType":\s*"(icon|hero)"[\s\S]*?\}', text)
print(f"Total icon/hero cards matched: {len(matches)}")

# Let's parse each by extracting the JSON
idx = 0
cards = []
while True:
    pos_icon = text.find('"cardType": "icon"', idx)
    pos_hero = text.find('"cardType": "hero"', idx)
    
    positions = [p for p in [pos_icon, pos_hero] if p != -1]
    if not positions:
        break
    p = min(positions)
    start = text.rfind('{', 0, p)
    end = text.find('}', p) + 1
    chunk = text[start:end]
    try:
        data = json.loads(chunk)
        cards.append(data)
    except Exception as e:
        pass
    idx = end

print(f"Parsed {len(cards)} icon/hero cards.")
for c in cards[:10]:
    print(c["id"], c["name"], c.get("faceUrl"))
