# -*- coding: utf-8 -*-
import json
import os
import re

with open('pacibyts/ui/database.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Check player count
id_count = len(re.findall(r'"id":\s*"[^"]+"', text))
print(f"Total cards in database.js: {id_count}")

# Check club IDs
club_matches = re.findall(r'"club":\s*\{\s*"name":\s*"([^"]+)",\s*"(?:id|badge)":\s*([^}]+)\}', text)
clubs_folder = 'pacibyts/ui/assets/clubs'
existing_club_files = set(os.listdir(clubs_folder))

missing_club_badges = set()
for cname, cid in club_matches:
    cid_clean = cid.strip().replace('"', '')
    if cid_clean in ['icon', 'hero']:
        continue
    expected_file = f"{cid_clean}.png"
    if expected_file not in existing_club_files:
        missing_club_badges.add((cname, cid_clean))

print(f"Missing club badges count: {len(missing_club_badges)}")
if missing_club_badges:
    for m in missing_club_badges:
        print(f"  Missing badge for {m[0]} -> {m[1]}.png")

# Check national flags
flags_folder = 'pacibyts/ui/assets/flags'
existing_flags = set(os.listdir(flags_folder))
nat_matches = re.findall(r'"nation":\s*\{\s*"name":\s*"[^"]+",\s*"code":\s*"([^"]+)"\s*\}', text)
missing_flags = set()
for nat in nat_matches:
    if f"{nat}.png" not in existing_flags:
        missing_flags.add(nat)

print(f"Missing flags count: {len(missing_flags)}")
if missing_flags:
    for f in missing_flags:
        print(f"  Missing flag: {f}.png")

# Check Nico Paz, Estêvão, Mastantuono, Mac Allister, Musiala
for target in ["bronze_paz", "silver_estevao", "silver_mastantuono", "gold_mac_allister", "gold_musiala"]:
    pattern = r'\{\s*"id":\s*"' + target + r'".*?"faceUrl":\s*"([^"]*)".*?"quickSell":\s*(\d+)\s*\}'
    m = re.search(pattern, text, re.DOTALL)
    if m:
        c_match = re.search(r'"club":\s*\{\s*"name":\s*"([^"]+)",\s*"(?:id|badge)":\s*([^}]+)\}', m.group(0))
        club_info = c_match.group(0) if c_match else "no club"
        face = m.group(1)
        print(f"{target}: face='{face}' | {club_info}")
    else:
        print(f"Could not find {target}")

