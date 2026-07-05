import os
from PIL import Image
image_path = r"C:\Users\Fany\.gemini\antigravity\scratch\reference.png"
output_dir = r"C:\Users\Fany\.gemini\antigravity\scratch\rice-project-landing\public\images"
os.makedirs(output_dir, exist_ok=True)
with Image.open(image_path) as img:
    w, h = img.size
    print(f"Original image size: {w}x{h}")
    
    # Let's save slices to inspect
    # Slices list: (name, y_start_frac, y_end_frac)
    slices = [
        ("navbar", 0.0, 0.05),
        ("hero_title", 0.05, 0.10),
        ("hero_carousel", 0.10, 0.20),
        ("hero_desc_btn", 0.20, 0.25),
        ("about_us", 0.25, 0.42),
        ("portfolio", 0.42, 0.58),
        ("services_pricing", 0.58, 0.68),
        ("services_stories", 0.68, 0.73),
        ("services_whatsapp", 0.73, 0.76),
        ("team", 0.76, 0.85),
        ("testimonials", 0.85, 0.95),
        ("footer", 0.95, 1.0)
    ]
    
    for name, start, end in slices:
        y_start = int(start * h)
        y_end = int(end * h)
        box = (0, y_start, w, y_end)
        slice_img = img.crop(box)
        slice_img.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Saved {name}.png: size {slice_img.size}")