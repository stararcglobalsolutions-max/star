import fitz
import os

pdf_paths = [
    r"c:\react project\sv2\scratch\hub_8in.pdf",
    r"c:\react project\sv2\scratch\hub2_8in.pdf",
    r"c:\react project\sv2\scratch\hub2_4g_8in.pdf",
    r"c:\react project\sv2\scratch\hub2_plus_8in.pdf",
    r"c:\react project\sv2\scratch\rex_8in.pdf",
    r"c:\react project\sv2\scratch\rex2_8in.pdf",
    r"c:\react project\sv2\scratch\door_protect_8in.pdf",
    r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf",
    r"c:\react project\sv2\motion_cam_phod.pdf"
]

for pdf_path in pdf_paths:
    if not os.path.exists(pdf_path):
        print(f"{pdf_path} not found")
        continue
    doc = fitz.open(pdf_path)
    page = doc[0]
    print(f"\n--- {os.path.basename(pdf_path)} ---")
    print(f"Page size: {page.rect}")
    
    # Search for text
    blocks = page.get_text("blocks")
    for block in blocks:
        text = block[4].strip()
        if text:
            print(f"y: {block[1]:.1f} - {block[3]:.1f} | {text.replace(chr(10), ' ')[:70]}")
