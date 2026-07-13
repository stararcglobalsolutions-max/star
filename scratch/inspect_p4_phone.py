import cv2
import numpy as np

p4 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_4_full.png')
h, w = p4.shape[:2]

# Crop top-right region
region = p4[100:2300, 2900:5100]

# Threshold to find non-white pixels
gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
non_white = (gray < 250).astype(np.uint8) * 255

# Find contours
contours, _ = cv2.findContours(non_white, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print(f"Found {len(contours)} contours")

# Let's find the largest contour which should be the phone mockup
largest_cnt = None
max_area = 0
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > max_area:
        max_area = area
        largest_cnt = cnt

if largest_cnt is not None:
    x, y, cw, ch = cv2.boundingRect(largest_cnt)
    # Add a bit of padding to avoid clipping the phone frame
    padding = 20
    x0 = max(0, x - padding)
    y0 = max(0, y - padding)
    x1 = min(region.shape[1], x + cw + padding)
    y1 = min(region.shape[0], y + ch + padding)
    
    crop = region[y0:y1, x0:x1]
    cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\test_privacy_phone.png', crop)
    print(f"Phone crop size: {crop.shape[1]}x{crop.shape[0]} at y={100+y0} to {100+y1}, x={2900+x0} to {2900+x1}")
else:
    print("No contours found!")
