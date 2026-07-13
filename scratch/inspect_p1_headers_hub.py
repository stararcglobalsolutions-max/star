import fitz
import os

scratch_dir = r"c:\react project\sv2\scratch"
pdfs = [
    "hub_8in.pdf",
    "hub2_8in.pdf",
    "hub2_4g_8in.pdf"
]

for pdf in pdfs:
    pdf_path = os.path.join(scratch_dir, pdf)
    if not os.path.exists(pdf_path):
        print(f"{pdf} not found")
        continue
    doc = fitz.open(pdf_path)
    page = doc[0]
    print(f"\n--- {pdf} ---")
    print(f"Page size: {page.rect}")
    
    # Search for text
    blocks = page.get_text("blocks")
    for block in blocks:
        text = block[4].strip()
        if text:
            print(f"y: {block[1]:.1f} - {block[3]:.1f} | {text.replace(chr(10), ' ')[:70]}")
