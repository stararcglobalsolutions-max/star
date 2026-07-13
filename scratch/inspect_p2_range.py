import cv2
import numpy as np

p2 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_2_full.png')
h, w = p2.shape[:2]

# Crop region: x from 100 to w-100, y from 3000 to 4900
region = p2[3000:4900, 100:w-100]
rg_h, rg_w = region.shape[:2]

gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
non_white_pct = np.mean(gray < 250, axis=1)

for y in range(0, rg_h, 20):
    print(f"y={3000+y}: non_white_pct={non_white_pct[y]:.4f}")
