import fitz

doc = fitz.open('glass_protect.pdf')
for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(dpi=150)
    pix.save(f'page_{i+1}.png')
