import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\hood.pdf"
output_dir = r"c:\react project\sv2\public\images\products\hood"
os.makedirs(output_dir, exist_ok=True)

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

doc = fitz.open(pdf_path)
print(f"Pages: {doc.page_count}")

for i in range(doc.page_count):
    page = doc.load_page(i)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
    pix.save(output_path)
    print(f"Saved: hires_page_{i + 1}.png ({pix.width}x{pix.height})")

print("Rerendering done!")
