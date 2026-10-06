import os
from PIL import Image, ImageOps

os.makedirs('public/assets', exist_ok=True)

# 1. Open the original high res image
img_path = r'C:\Users\BAPS\Downloads\SELESTIA_RITUEL_high_quality_4x.png'
showcase_path = r'C:\Users\BAPS\Downloads\selestia_rituel_final_3_posts_together.png'

if os.path.exists(img_path):
    img = Image.open(img_path).convert("RGBA")

    # The top section contains the logo centered
    # Box bounds: (left, upper, right, lower)
    # Total size: 4320 x 5400
    # Logo resides roughly between x=600..3720, y=100..750
    crop_box = (600, 120, 3720, 780)
    logo_cropped = img.crop(crop_box)
    
    # Save logo on white background
    logo_cropped.save('public/assets/selestia-logo-full-light.png')
    
    # Also save full original artwork
    img.save('public/assets/brand-poster.png')
    print("Cropped logo saved!")

if os.path.exists(showcase_path):
    showcase_img = Image.open(showcase_path)
    showcase_img.save('public/assets/agency-showcase.png')
    print("Showcase graphic saved!")
