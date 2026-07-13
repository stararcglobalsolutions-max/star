import cv2
import numpy as np

p1 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_1_full.png')
h, w = p1.shape[:2]

# Let's inspect y from 5000 to 6200
region = p1[5000:6200, 100:w-100]
rg_h, rg_w = region.shape[:2]

gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)

# Density of dark pixels (value < 100)
dark_pct = np.mean(gray < 100, axis=1)

# Print row density
for y in range(0, rg_h, 20):
    print(f"y={5000+y}: dark_pct={dark_pct[y]:.4f}")
