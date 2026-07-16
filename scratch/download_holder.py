import subprocess, sys, os
try:
    import gdown, fitz
except ImportError:
    subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "pymupdf", "-q"], check=True)
    import gdown, fitz

pdf_path = r"c:\react project\sv2\scratch\holder.pdf"
url = "https://drive.google.com/uc?id=1OL03Z4y93EdCCcWIh1kk9mYy_0JLcmZb"

print("Downloading Holder PDF...")
gdown.download(url, pdf_path, quiet=False)

if os.path.exists(pdf_path):
    doc = fitz.open(pdf_path)
    print(f"Downloaded: {os.path.getsize(pdf_path)} bytes, Pages: {doc.page_count}")

    # Find exact text positions on page 1 for precise crop
    page = doc.load_page(0)
    print("\n=== TEXT POSITIONS ON PAGE 1 ===")
    blocks = page.get_text("blocks")
    for block in blocks[:10]:
        x0, y0, x1, y1, text, *_ = block
        try:
            print(f"  y={y0:.1f}-{y1:.1f}: '{text.strip()[:60].replace(chr(10), ' ')}'")
        except:
            print(f"  y={y0:.1f}-{y1:.1f}: [encoding error]")

    output_dir = r"c:\react project\sv2\public\images\products\holder"
    os.makedirs(output_dir, exist_ok=True)
    zoom = 2.5
    mat = fitz.Matrix(zoom, zoom)
    
    # We will use a safe default crop, if it needs adjustment we will fix it later based on text positions
    crop_y = 280.0

    doc2 = fitz.open(pdf_path)
    for i in range(doc2.page_count):
        p = doc2.load_page(i)
        if i == 0:
            orig = p.rect
            p.set_cropbox(fitz.Rect(orig.x0, orig.y0 + crop_y, orig.x1, orig.y1))
        pix = p.get_pixmap(matrix=mat, alpha=False)
        out = os.path.join(output_dir, f"hires_page_{i+1}.png")
        pix.save(out)
        print(f"  Saved: hires_page_{i+1}.png ({pix.width}x{pix.height})")

    print("\nAll done!")
else:
    print("Download failed!")
