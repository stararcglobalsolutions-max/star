import fitz
import os

# motion-protect-plus-8in is low-res (595 x 842 pts page)
# AJAX logo spans y=0 to ~85 pts
# Title "MotionProtect Plus" is at y=85 pts
# We need a small crop to remove just the AJAX logo
# crop_y = 75 pts on a 842pt page

pdf_path = r"c:\react project\sv2\scratch\motion_protect_plus_8in.pdf"
slug = "motion-protect-plus-8in"
output_dir = fr"c:\react project\sv2\public\images\products\{slug}"
os.makedirs(output_dir, exist_ok=True)

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)
crop_y = 75.0

doc = fitz.open(pdf_path)
print(f"Processing: {slug} | Pages: {doc.page_count}")

for i in range(doc.page_count):
    page = doc.load_page(i)

    if i == 0:
        orig_rect = page.rect
        print(f"  Page 1 size: {orig_rect.width:.0f} x {orig_rect.height:.0f} pts")
        page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
        print(f"  Applied crop_y={crop_y} pts on Page 1")

    pix = page.get_pixmap(matrix=mat, alpha=False)
    output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
    pix.save(output_path)
    print(f"  Saved: hires_page_{i + 1}.png ({pix.width}x{pix.height})")

print("Done!")
