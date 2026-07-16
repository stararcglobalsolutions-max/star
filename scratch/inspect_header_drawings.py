import fitz
import os
import glob

pdf_files = glob.glob(r"c:\react project\sv2\scratch\*.pdf")

for pdf in pdf_files:
    doc = fitz.open(pdf)
    page = doc.load_page(0)
    rect = page.rect
    
    # Search for text AJAX
    text_instances = page.search_for("AJAX")
    
    # Search for drawings in the header area
    drawings = page.get_drawings()
    header_drawings = [d for d in drawings if d["rect"].y1 < 300]
    
    print(f"\nPDF: {os.path.basename(pdf)} (rect: {rect})")
    print(f"  AJAX text instances: {text_instances}")
    if header_drawings:
        # Find union of header drawings bounding boxes
        x0 = min(d["rect"].x0 for d in header_drawings)
        y0 = min(d["rect"].y0 for d in header_drawings)
        x1 = max(d["rect"].x1 for d in header_drawings)
        y1 = max(d["rect"].y1 for d in header_drawings)
        print(f"  Header drawings bounds: [{x0:.1f}, {y0:.1f}, {x1:.1f}, {y1:.1f}]")
    else:
        print("  No header drawings found.")
    doc.close()
