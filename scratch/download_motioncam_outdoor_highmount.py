import subprocess, sys, os
try:
    import gdown, fitz
except ImportError:
    subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "pymupdf", "-q"], check=True)
    import gdown, fitz

pdf_path = r"c:\react project\sv2\scratch\motioncam_outdoor_highmount_phod_8in.pdf"
url = "https://drive.google.com/uc?id=13HLkgv4kLy0k0D8hqn33nxaAxGJByN0W"

print("Downloading MotionCam Outdoor HighMount (PhOD) (8IN) PDF...")
gdown.download(url, pdf_path, quiet=False)

if os.path.exists(pdf_path):
    doc = fitz.open(pdf_path)
    print(f"Downloaded: {os.path.getsize(pdf_path)} bytes, Pages: {doc.page_count}")
    for i in range(doc.page_count):
        page = doc.load_page(i)
        print(f"  Page {i+1}: {page.rect}")

    # Render PNGs
    output_dir = r"c:\react project\sv2\public\images\products\motioncam-outdoor-highmount-phod-8in"
    os.makedirs(output_dir, exist_ok=True)
    zoom = 2.5
    mat = fitz.Matrix(zoom, zoom)
    crop_y = 280.0

    for i in range(doc.page_count):
        page = doc.load_page(i)
        if i == 0 and crop_y > 0:
            orig = page.rect
            page.set_cropbox(fitz.Rect(orig.x0, orig.y0 + crop_y, orig.x1, orig.y1))
            print(f"  Cropped page 1 by {crop_y} pts")
        pix = page.get_pixmap(matrix=mat, alpha=False)
        out = os.path.join(output_dir, f"hires_page_{i+1}.png")
        pix.save(out)
        print(f"  Saved: hires_page_{i+1}.png ({pix.width}x{pix.height})")

    print("All done!")
else:
    print("Download failed!")
