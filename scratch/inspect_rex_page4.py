import fitz

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)

for idx, page in enumerate(doc):
    print(f"\n--- PAGE {idx+1} ---")
    text = page.get_text()
    if "IP50" in text:
        print("Found IP50!")
    if "330 g" in text:
        print("Found 330 g!")
