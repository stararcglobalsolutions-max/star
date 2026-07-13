import cv2
import numpy as np

p4 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_4_full.png')
h, w = p4.shape[:2]

# Crop region: x from 100 to w-100, y from 3400 to 3900
region = p4[3400:3900, 100:w-100]

# Trim white borders
gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
coords = cv2.findNonZero((gray < 250).astype(np.uint8) * 255)
if coords is not None:
    x, y, cw, ch = cv2.boundingRect(coords)
    crop = region[y:y+ch, x:x+cw]
    cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\test_comm.png', crop)
    print(f"Comm crop size: {crop.shape[1]}x{crop.shape[0]}")
else:
    print("No non-white region found!")
