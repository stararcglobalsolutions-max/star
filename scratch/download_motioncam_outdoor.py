import subprocess
import sys
import os

# pip install gdown fitz pymupdf if not present
subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "pymupdf", "-q"], check=True)

import gdown
import fitz

dest = r"c:\react project\sv2\scratch\motioncam_outdoor_8in.pdf"
doc_id = "1WvYFtlBFW8gI-bqCvM3-BywGhq7PHMIq"
url = f"https://drive.google.com/uc?id={doc_id}"

print("Downloading MotionCam Outdoor (8IN) PDF...")
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
