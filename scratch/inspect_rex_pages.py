import fitz

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)
print(f"Total pages: {len(doc)}")

for idx, page in enumerate(doc):
    print(f"\n--- PAGE {idx+1} ---")
    blocks = page.get_text("blocks")
    for block in blocks:
        text = block[4].strip()
        if text:
            print(f"y: {block[1]:.1f} | {text.replace(chr(10), ' ')[:80]}")
