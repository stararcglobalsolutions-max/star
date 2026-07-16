import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\hub_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]
orig_rect = page.rect

# Crop to the top 300 points
page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0, orig_rect.x1, orig_rect.y0 + 300.0))

pix = page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5), alpha=False)
pix.save(r"c:\react project\sv2\scratch\top_header_test.png")
print("Saved top header test image")
doc.close()
