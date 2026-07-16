import fitz

doc = fitz.open(r"c:\react project\sv2\scratch\hub_8in.pdf")
page = doc[0]
words = page.get_text("words")
top_words = [w for w in words if w[3] < 300]
top_words.sort(key=lambda w: (w[1], w[0]))
for w in top_words:
    print(f"[{w[0]:.1f}, {w[1]:.1f}, {w[2]:.1f}, {w[3]:.1f}] -> '{w[4]}'")
doc.close()
