import cv2
import numpy as np

p1 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_1_full.png')
h, w = p1.shape[:2]

# Crop region: x from 100 to w-100, y from 5650 to 6650
region = p1[5650:6650, 100:w-100]

# Convert to gray and threshold to find non-white pixels
gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
coords = cv2.findNonZero((gray < 252).astype(np.uint8) * 255)
if coords is not None:
    x, y, cw, ch = cv2.boundingRect(coords)
    crop = region[y:y+ch, x:x+cw]
    
    # Save the clean range diagram!
    cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\phod_detection_range.png', crop)
    print(f"Clean detection range saved: size {crop.shape[1]}x{crop.shape[0]}")
else:
    print("No non-white region found!")
