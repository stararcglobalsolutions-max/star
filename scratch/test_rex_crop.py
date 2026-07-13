import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)

# Let's render page 1 with different crops
for crop_y in [0, 100, 150, 200, 250, 280]:
    # reload the doc to avoid cumulative crops
    doc = fitz.open(pdf_path)
    page = doc[0]
    orig_rect = page.rect
    
    if crop_y > 0:
        page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
        
    pix = page.get_pixmap(matrix=fitz.Matrix(1.0, 1.0), alpha=False)
    # Check if we can find the text block of "ReX" on the cropped page
    blocks = page.get_text("blocks")
    rex_y = None
    for block in blocks:
        text = block[4].strip()
        if "rex" in text.lower() and "sheet" not in text.lower():
            rex_y = block[1]
            break
            
    print(f"Crop Y: {crop_y:3d} | Image size: {pix.width}x{pix.height} | ReX y0: {rex_y}")
