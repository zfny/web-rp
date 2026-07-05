import os
from PIL import Image
image_path = r"C:\Users\Fany\.gemini\antigravity\scratch\reference.png"
try:
    with Image.open(image_path) as img:
        print(f"Format: {img.format}")
        print(f"Size: {img.size}")
        print(f"Mode: {img.mode}")
except Exception as e:
    print(f"Error: {e}")