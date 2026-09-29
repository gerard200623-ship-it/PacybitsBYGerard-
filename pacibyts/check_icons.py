import os, re

files = set(os.listdir("ui/assets/faces"))
with open("generate_database_js.py", "r", encoding="utf-8") as f:
    text = f.read()

ids = re.findall(r'"id": "(icon_\w+|hero_\w+)"', text)
missing = [i for i in ids if f"{i}.png" not in files]
print(f"Total defined in generate_database_js: {len(ids)}")
print(f"Missing face files: {len(missing)}")
if missing:
    print("Missing:", missing)

# Check actual files size
small_files = []
for i in ids:
    path = os.path.join("ui", "assets", "faces", f"{i}.png")
    if os.path.exists(path):
        size = os.path.getsize(path)
        if size < 500:
            small_files.append((i, size))
print(f"Corrupted or <500B files: {len(small_files)}")
if small_files:
    print("Small files:", small_files)
