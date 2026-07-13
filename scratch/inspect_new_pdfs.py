import fitz
import os

pdfs = {
    r"c:\react project\sv2\scratch\glass_protect_8in.pdf": "glass-protect-8in",
    r"c:\react project\sv2\scratch\motion_protect_8in.pdf": "motion-protect-8in",
    r"c:\react project\sv2\scratch\motion_protect_plus_8in.pdf": "motion-protect-plus-8in",
    r"c:\react project\sv2\scratch\combi_protect_8in.pdf": "combi-protect-8in",
}

for pdf_path, slug in pdfs.items():
    doc = fitz.open(pdf_path)
    page = doc[0]
    print(f"\n{slug}: {len(doc)} pages | Page size: {page.rect.width:.0f} x {page.rect.height:.0f} pts")
    
    # Check first few words to understand header
    words = page.get_text("words")
    print("  Top words (y < 600):")
    for w in words:
        if w[1] < 600:
            print(f"    y0={w[1]:.1f} | '{w[4]}'")
