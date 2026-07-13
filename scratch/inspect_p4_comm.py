import cv2
import numpy as np

p4 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_4_full.png')
h, w = p4.shape[:2]

# Crop region: x from 100 to w-100, y from 3400 to 4800
region = p4[3400:4800, 100:w-100]
rg_h, rg_w = region.shape[:2]

gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)

# For each row, calculate the percentage of non-white pixels
# (pixel < 250)
non_white_pct = np.mean(gray < 250, axis=1)

# Print non_white_pct for inspection
for y in range(0, rg_h, 20):
    print(f"y={3400+y}: non_white_pct={non_white_pct[y]:.4f}")
