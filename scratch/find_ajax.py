import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\hub_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]

# Search for "AJAX"
rects = page.search_for("AJAX")
for r in rects:
    print(f"Found AJAX text at: {r}")

# Search for images (drawings / raster images)
img_info = page.get_images()
print(f"Images count on page 1: {len(img_info)}")
for img in img_info:
    print(img)

# Print blocks in top 350 points
blocks = page.get_text("blocks")
for b in blocks:
    if b[3] < 350:
        print(f"Block: {b[0]:.1f}, {b[1]:.1f}, {b[2]:.1f}, {b[3]:.1f} -> '{b[4].strip()}'")
