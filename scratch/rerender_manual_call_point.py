import fitz, os

pdf_path = r"c:\react project\sv2\scratch\manual_call_point_8in.pdf"
output_dir = r"c:\react project\sv2\public\images\products\manual-call-point-8in"
os.makedirs(output_dir, exist_ok=True)

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)
# "Baseline product line" ends at y=403, title starts at y=433 → crop at 415
crop_y = 415.0

doc = fitz.open(pdf_path)
for i in range(doc.page_count):
    page = doc.load_page(i)
    if i == 0:
        orig = page.rect
        page.set_cropbox(fitz.Rect(orig.x0, orig.y0 + crop_y, orig.x1, orig.y1))
        print(f"  Cropped page 1 by {crop_y} pts (Baseline ends @403, title starts @433)")
    pix = page.get_pixmap(matrix=mat, alpha=False)
    out = os.path.join(output_dir, f"hires_page_{i+1}.png")
    pix.save(out)
    print(f"  Saved: hires_page_{i+1}.png ({pix.width}x{pix.height})")

print("Done!")
