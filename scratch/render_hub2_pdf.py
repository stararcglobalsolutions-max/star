import os
import fitz  # PyMuPDF

pdf_path = r"c:\react project\sv2\scratch\hub2_8in.pdf"
output_dir = r"c:\react project\sv2\public\images\products\hub2-8in"

os.makedirs(output_dir, exist_ok=True)

print(f"Opening PDF: {pdf_path}")
doc = fitz.open(pdf_path)
num_pages = doc.page_count
print(f"Total pages: {num_pages}")

# Let's use 2.5x zoom to get crisp, readable text without bloated file size.
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for i in range(num_pages):
    page = doc.load_page(i)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
    pix.save(output_path)
    print(f"Rendered Page {i + 1} to {output_path}")

print("PDF rendering completed successfully!")
