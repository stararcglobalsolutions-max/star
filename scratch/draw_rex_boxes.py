import fitz
import cv2
import numpy as np
import os

pdf_path = r"c:\react project\sv2\scratch\rex_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]

# Render uncropped page 1
zoom = 1.0
pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3)).copy()

# Draw bounding boxes for words
words = page.get_text("words")
for w in words:
    # w is (x0, y0, x1, y1, "word", block_no, line_no, word_no)
    x0, y0, x1, y1, text = w[0], w[1], w[2], w[3], w[4]
    if y1 < 2500:
        cv2.rectangle(img, (int(x0), int(y0)), (int(x1), int(y1)), (0, 0, 255), 2)
        cv2.putText(img, text, (int(x0), int(y0) - 2), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 1)

cv2.imwrite(r"c:\react project\sv2\scratch\rex_words_annotated.png", img)
print("Saved annotated rex_words_annotated.png")
