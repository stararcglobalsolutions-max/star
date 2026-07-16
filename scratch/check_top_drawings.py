import fitz

doc = fitz.open(r"c:\react project\sv2\scratch\hub_8in.pdf")
page = doc[0]
drawings = page.get_drawings()
print(f"Drawings: {len(drawings)}")
top_drawings = [d for d in drawings if d["rect"].y1 < 300]
print(f"Top drawings: {len(top_drawings)}")
for d in top_drawings[:5]:
    print(d["rect"], d["type"])
doc.close()
