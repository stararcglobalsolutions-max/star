import fitz
import os

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]
pix = page.get_pixmap(matrix=fitz.Matrix(1.0, 1.0), alpha=False)
pix.save(r"c:\react project\sv2\scratch\rex_uncropped.png")
print("Saved uncropped page 1 of rex_8in.pdf")
