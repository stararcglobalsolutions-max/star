import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf"
doc = fitz.open(pdf_path)

for crop_y in [0, 100, 150, 200, 250, 280, 300]:
    doc = fitz.open(pdf_path)
    page = doc[0]
    orig_rect = page.rect
    
    if crop_y > 0:
        page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
        
    blocks = page.get_text("blocks")
    title_y = None
    jeweller_y = None
    for block in blocks:
        text = block[4].strip()
        if "doorprotect" in text.lower() and "sheet" not in text.lower():
            title_y = block[1]
        if "jeweller" in text.lower() and block[1] < 1000:
            jeweller_y = block[1]
            
    print(f"Crop Y: {crop_y:3d} | Title y0: {title_y} | Jeweller y0: {jeweller_y}")
