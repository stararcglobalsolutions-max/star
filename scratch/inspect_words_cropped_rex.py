import fitz

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]

orig_rect = page.rect
crop_y = 280.0
page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))

print("Words on cropped page 1 of rex_8in.pdf:")
words = page.get_text("words")
for word in words:
    if word[3] < 1000:
        print(f"y0: {word[1]:.2f}, y1: {word[3]:.2f} | Word: '{word[4]}'")
