import fitz

pdfs = [
    r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf",
    r"c:\react project\sv2\scratch\rex_8in.pdf",
    r"c:\react project\sv2\scratch\hub2_plus_8in.pdf"
]

for pdf in pdfs:
    print(f"\n================ {pdf} ================")
    doc = fitz.open(pdf)
    page = doc[0]
    print(f"rect: {page.rect}")
    print(f"cropbox: {page.cropbox}")
    print(f"mediabox: {page.mediabox}")
    print(f"artbox: {page.artbox}")
    print(f"bleedbox: {page.bleedbox}")
    print(f"trimbox: {page.trimbox}")
