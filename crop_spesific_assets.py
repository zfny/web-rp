import os
from PIL import Image
image_path = r"C:\Users\Fany\.gemini\antigravity\scratch\reference.png"
output_dir = r"C:\Users\Fany\.gemini\antigravity\scratch\rice-project-landing\public\images"
os.makedirs(output_dir, exist_ok=True)
with Image.open(image_path) as img:
    w, h = img.size
    
    # 1. Crop 5 team member portraits
    # The team section is roughly from y=760 to y=860 (based on 76% to 85% of 1024 h)
    # Let's crop the cards horizontally. Each team photo is around y=765 to y=840.
    y_start_team = int(0.74 * h) # ~757
    y_end_team = int(0.85 * h)   # ~870
    card_width_team = w / 5.0
    for i in range(5):
        x_start = int(i * card_width_team)
        x_end = int((i + 1) * card_width_team)
        box = (x_start, y_start_team, x_end, y_end_team)
        team_img = img.crop(box)
        team_img.save(os.path.join(output_dir, f"team_{i+1}.png"))
        print(f"Saved team_{i+1}.png: size {team_img.size}")
        
    # 2. Crop 3 portfolio project cards
    # Portfolio section is roughly from y=430 to y=580 (42% to 58% of 1024 h)
    y_start_port = int(0.42 * h) # 430
    y_end_port = int(0.55 * h)   # 563
    # Let's divide into 3 horizontal sections.
    # But wait, looking at the layout, there are arrows and overlapping cards.
    # Let's crop the three cards:
    # Left card: x=5 to x=75
    # Center card: x=75 to x=163
    # Right card: x=163 to x=233
    port_cards = [
        ("portfolio_1", 5, y_start_port, 75, y_end_port),
        ("portfolio_2", 76, y_start_port, 162, y_end_port),
        ("portfolio_3", 163, y_start_port, 233, y_end_port)
    ]
    for name, xs, ys, xe, ye in port_cards:
        box = (xs, ys, xe, ye)
        port_img = img.crop(box)
        port_img.save(os.path.join(output_dir, f"{name}.png"))
        print(f"Saved {name}.png: size {port_img.size}")
        
    # 3. Crop 4 Instagram Story preview cards in Services Section (68% to 73% of h)
    y_start_story = int(0.64 * h) # ~655
    y_end_story = int(0.70 * h)   # ~716
    story_width = w / 4.0
    for i in range(4):
        x_start = int(i * story_width)
        x_end = int((i + 1) * story_width)
        box = (x_start, y_start_story, x_end, y_end_story)
        story_img = img.crop(box)
        story_img.save(os.path.join(output_dir, f"story_{i+1}.png"))
        print(f"Saved story_{i+1}.png: size {story_img.size}")
    # 4. Crop individual hero mockup cards from the hero section (10% to 20% of h)
    # The carousel contains 7 slanted cards. Let's crop them horizontally into 7 images
    y_start_hero = int(0.06 * h) # ~61
    y_end_hero = int(0.13 * h)   # ~133
    hero_width = w / 7.0
    for i in range(7):
        x_start = int(i * hero_width)
        x_end = int((i + 1) * hero_width)
        box = (x_start, y_start_hero, x_end, y_end_hero)
        hero_img = img.crop(box)
        hero_img.save(os.path.join(output_dir, f"hero_card_{i+1}.png"))
        print(f"Saved hero_card_{i+1}.png: size {hero_img.size}")
        
    # 5. Crop logo from navbar (top-left, approx x=5 to x=40, y=0 to y=35)
    logo_box = (5, 0, 45, 35)
    logo_img = img.crop(logo_box)
    logo_img.save(os.path.join(output_dir, "logo.png"))
    print("Saved logo.png")