import os
import urllib.request
from PIL import Image

clubs_folder = "pacibyts/ui/assets/clubs"
files = os.listdir(clubs_folder)

for f in sorted(files):
    filepath = os.path.join(clubs_folder, f)
    size = os.path.getsize(filepath)
    print(f"{f}: size={size}")
