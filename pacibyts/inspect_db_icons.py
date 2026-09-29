with open("ui/database.js", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = re.findall(r'"cardType":\s*"(icon|hero)"', text)
print(f"Total icon/hero cards in database.js: {len(matches)}")

# Let's inspect some of them
sample_cards = re.findall(r'\{[^{}]+"cardType":\s*"(icon|hero)"[^{}]+\}', text)
print(f"Found sample card blocks: {len(sample_cards)}")
for card in sample_cards[:5]:
    print("--- CARD ---")
    print(card)
