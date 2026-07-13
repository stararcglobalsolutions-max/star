import cv2
import numpy as np

p2 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_2_full.png')
h, w = p2.shape[:2]

# Region for install image:
# x from 100 to 2700, y from 5000 to 6900
region = p2[5000:6900, 100:2700]

# Threshold to find non-white pixels
gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
non_white = (gray < 250).astype(np.uint8) * 255

# Find bounding box
coords = cv2.findNonZero(non_white)
if coords is not None:
    x, y, cw, ch = cv2.boundingRect(coords)
    crop = region[y:y+ch, x:x+cw]
    cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\test_install.png', crop)
    print(f"Install crop size: {crop.shape[1]}x{crop.shape[0]} at y={5000+y} to {5000+y+ch}, x={100+x} to {100+x+cw}")
else:
    print("No non-white region found!")
