from PIL import Image
import os

img_path = r"c:\react project\sv2\public\pawered by stararc.png"
if os.path.exists(img_path):
    img = Image.open(img_path)
    print(f"Size: {img.size}")
    print(f"Format: {img.format}")
    print(f"Mode: {img.mode}")
else:
    print("Logo file not found!")
