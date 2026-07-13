import cv2
import numpy as np

img_path = r"c:\react project\sv2\public\images\products\rex-8in\hires_page_1.png"
img = cv2.imread(img_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Check sum of dark pixels (value < 200) in each of the first 800 rows of the PNG
row_sums = np.sum(gray < 200, axis=1)
print("First 800 rows dark pixels in rex-8in hires_page_1.png:")
for y, s in enumerate(row_sums[:800]):
    if s > 10:
        print(f"Row {y:3d}: dark pixels count = {s}")
