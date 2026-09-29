import sqlite3
import subprocess

conn = sqlite3.connect("ui/fc_database.db")
cursor = conn.cursor()
cursor.execute("UPDATE players SET league = 'LALIGA EA SPORTS' WHERE player_id = 188545")
cursor.execute("UPDATE players SET league = 'Premier League' WHERE player_id IN (192985, 209331)")
cursor.execute("UPDATE players SET overall_rating = 90, club_name = 'Real Madrid', league = 'LALIGA EA SPORTS' WHERE display_name LIKE '%Vin%cius%' OR display_name = 'Vini Jr.'")
cursor.execute("UPDATE players SET overall_rating = 88, club_name = 'Chelsea', league = 'Premier League' WHERE display_name LIKE '%Palmer%'")
cursor.execute("UPDATE players SET overall_rating = 89, club_name = 'Liverpool', league = 'Premier League' WHERE display_name = 'Alisson'")
cursor.execute("UPDATE players SET overall_rating = 89, club_name = 'Real Madrid', league = 'LALIGA EA SPORTS' WHERE display_name = 'Bellingham'")
cursor.execute("UPDATE players SET overall_rating = 89, club_name = 'Arsenal', league = 'Premier League' WHERE display_name = 'Saka'")
cursor.execute("UPDATE players SET overall_rating = 90, club_name = 'Bayern München', league = 'Bundesliga' WHERE display_name LIKE '%Kane%'")
cursor.execute("UPDATE players SET overall_rating = 91, club_name = 'Manchester City', league = 'Premier League' WHERE display_name = 'Rodri'")

conn.commit()
conn.close()
print("Database updated successfully!")

# Regenerar database.js
subprocess.run(["python", "generate_database_js.py"], check=True)
print("database.js regenerated!")
