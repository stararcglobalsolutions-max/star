import fitz
import os
import glob

pdf_files = glob.glob(r"c:\react project\sv2\scratch\*.pdf")

for pdf in pdf_files:
    doc = fitz.open(pdf)
    print(f"\nPDF: {os.path.basename(pdf)}")
    page = doc.load_page(0)
    rect = page.rect
    print(f"  Page 1 rect: {rect.x0}, {rect.y0}, {rect.x1}, {rect.y1}")
    
    # Let's inspect the bottom 10% of the page
    h = rect.y1 - rect.y0
    bottom_y = rect.y1 - (h * 0.08) # bottom 8%
    
    words = page.get_text("words")
    bottom_words = [w for w in words if w[3] > bottom_y]
    if bottom_words:
        bottom_words.sort(key=lambda w: (w[1], w[0]))
        line_text = " ".join([w[4] for w in bottom_words])
        min_y = min([w[1] for w in bottom_words])
        max_y = max([w[3] for w in bottom_words])
        print(f"  Bottom y-threshold: {bottom_y:.1f}")
        print(f"  Bottom text: '{line_text}' y_range: [{min_y:.1f}, {max_y:.1f}]")
    else:
        print("  No text found in bottom 8%")
    doc.close()
