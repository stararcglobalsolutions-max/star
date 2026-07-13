import cv2
import numpy as np

p2 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_2_full.png')
h, w = p2.shape[:2]

# Let's crop a broad region around the optics section (y from 500 to 2800)
region = p2[500:2800, 100:w-100]

# The diagram is a large dark rectangle. Let's find pixels where value < 50.
gray = cv2.cvtColor(region, cv2.COLOR_BGR2GRAY)
dark_mask = (gray < 50).astype(np.uint8) * 255

# Find contours of the dark mask to locate the largest dark rectangle
contours, _ = cv2.findContours(dark_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if contours:
    # Get the contour with the largest area
    largest_contour = max(contours, key=cv2.contourArea)
    x, y, cw, ch = cv2.boundingRect(largest_contour)
    
    # Let's add a small padding of 10px if possible
    x = max(0, x - 10)
    y = max(0, y - 10)
    cw = min(region.shape[1] - x, cw + 20)
    ch = min(region.shape[0] - y, ch + 20)
    
    crop = region[y:y+ch, x:x+cw]
    cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\phod_optics_img.png', crop)
    print(f"Clean optics image saved: size {crop.shape[1]}x{crop.shape[0]}")
else:
    print("No dark region found in optics section!")
