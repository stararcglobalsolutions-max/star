import subprocess
import sys
import os

try:
    import gdown
    import fitz
except ImportError:
    subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "pymupdf", "-q"], check=True)
    import gdown
    import fitz

dest = r"c:\react project\sv2\scratch\motioncam_outdoor_phod_8in.pdf"
doc_id = "1_uuXQF-y083J-ERHxCGfgpkal12UYkbY"
url = f"https://drive.google.com/uc?id={doc_id}"

print("Downloading MotionCam Outdoor (PhOD) (8IN) PDF...")
gdown.download(url, dest, quiet=False)

if os.path.exists(dest):
    size = os.path.getsize(dest)
    print(f"Downloaded PDF: {size} bytes")
    doc = fitz.open(dest)
    print(f"Total Pages: {doc.page_count}")
    for i in range(doc.page_count):
        page = doc.load_page(i)
        print(f"Page {i+1} rect: {page.rect}")
else:
    print("Failed to download PDF.")
