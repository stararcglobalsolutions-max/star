import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\motioncam_outdoor_phod_8in.pdf"
output_dir = r"c:\react project\sv2\public\images\products\motioncam-outdoor-phod-8in"
os.makedirs(output_dir, exist_ok=True)

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)
crop_y = 280.0

doc = fitz.open(pdf_path)
print(f"Pages: {doc.page_count}")

for i in range(doc.page_count):
    page = doc.load_page(i)
    
    if i == 0 and crop_y > 0:
        orig_rect = page.rect
        page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
        print(f"Applied top crop on Page 1: shifted y by {crop_y} pts")
        
    pix = page.get_pixmap(matrix=mat, alpha=False)
    output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
    pix.save(output_path)
    print(f"Saved: hires_page_{i + 1}.png ({pix.width}x{pix.height})")

print("Rendering done!")
