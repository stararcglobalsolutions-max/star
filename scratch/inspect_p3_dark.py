import cv2
import numpy as np

p3 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_3_full.png')
h, w = p3.shape[:2]
print(f"Page 3 size: {w}x{h}")

gray = cv2.cvtColor(p3, cv2.COLOR_BGR2GRAY)
dark = (gray < 50).astype(np.uint8) * 255

contours, _ = cv2.findContours(dark, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
print(f"Found {len(contours)} dark contours")

for i, cnt in enumerate(contours):
    x, y, cw, ch = cv2.boundingRect(cnt)
    if cw > 100 and ch > 100:
        print(f"Contour {i}: x={x}, y={y}, w={cw}, h={ch}")
        crop = p3[y:y+ch, x:x+cw]
        cv2.imwrite(f"c:\\react project\\sv2\\public\\images\\products\\motion-cam-phod-8in\\test_p3_{i}.png", crop)
