import fitz
import cv2
import numpy as np

pdf_path = r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf"
doc = fitz.open(pdf_path)
page = doc[0]

pix = page.get_pixmap(matrix=fitz.Matrix(1.0, 1.0), alpha=False)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3))
gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)

row_sums = np.sum(gray < 240, axis=1)

# Find contiguous ranges of y where row_sums > 5
ranges = []
start = None
for y, s in enumerate(row_sums):
    if s > 5:
        if start is None:
            start = y
    else:
        if start is not None:
            ranges.append((start, y - 1))
            start = None
if start is not None:
    ranges.append((start, len(row_sums) - 1))

print("Contiguous y ranges of non-white content:")
for r in ranges[:15]:
    # Let's print the range and the max intensity or peak sum
    peak = np.max(row_sums[r[0]:r[1]+1])
    print(f"y: {r[0]:4d} to {r[1]:4d} | Peak dark pixels: {peak}")
