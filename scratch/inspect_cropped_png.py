import cv2
import numpy as np

img_path = r"c:\react project\sv2\public\images\products\door-protect-plus-8in\hires_page_1.png"
img = cv2.imread(img_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

row_sums = np.sum(gray < 240, axis=1)
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

print("Contiguous y ranges of non-white content in generated PNG:")
for r in ranges[:10]:
    peak = np.max(row_sums[r[0]:r[1]+1])
    print(f"y: {r[0]:4d} to {r[1]:4d} | Peak dark pixels: {peak}")
