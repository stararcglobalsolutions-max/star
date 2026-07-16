import fitz, os

pdf_path = r"c:\react project\sv2\scratch\manual_call_point_8in.pdf"
output_dir = r"c:\react project\sv2\public\images\products\manual-call-point-8in"
os.makedirs(output_dir, exist_ok=True)

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

doc = fitz.open(pdf_path)
page = doc.load_page(0)

# Extract all text blocks with their positions to find exact crop point
print("=== TEXT POSITIONS ON PAGE 1 ===")
blocks = page.get_text("blocks")
for block in blocks:
    x0, y0, x1, y1, text, *_ = block
    text_preview = text.strip()[:80].replace('\n', ' ')
    print(f"  y={y0:.1f}-{y1:.1f}: '{text_preview}'")
