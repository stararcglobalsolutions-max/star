import fitz

doc = fitz.open('glass_protect.pdf')
text = ""
for page in doc:
    text += page.get_text()

with open('pdf_output.txt', 'w', encoding='utf-8') as f:
    f.write(text)
