import cv2
import numpy as np

p2 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_2_full.png')
h, w = p2.shape[:2]
print(f"Page 2 size: {w}x{h}")

# Convert to grayscale
gray = cv2.cvtColor(p2, cv2.COLOR_BGR2GRAY)

# Threshold to find dark regions (e.g. black panels)
# The panels are dark, so let's threshold for values < 50
dark = (gray < 50).astype(np.uint8) * 255

# Find contours
contours, _ = cv2.findContours(dark, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print(f"Found {len(contours)} dark contours")

for i, cnt in enumerate(contours):
    x, y, cw, ch = cv2.boundingRect(cnt)
    if cw > 100 and ch > 100:
        print(f"Contour {i}: x={x}, y={y}, w={cw}, h={ch}")
        # Save crop
        crop = p2[y:y+ch, x:x+cw]
        cv2.imwrite(f"c:\\react project\\sv2\\public\\images\\products\\motion-cam-phod-8in\\test_dark_{i}.png", crop)
