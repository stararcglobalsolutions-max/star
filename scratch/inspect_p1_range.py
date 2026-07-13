import cv2
import numpy as np

p1 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_1_full.png')
h, w = p1.shape[:2]

# Let's crop the raw section (y from 5000 to 6900, x from 100 to w-100)
section = p1[5000:6900, 100:w-100]

# Convert to gray
gray = cv2.cvtColor(section, cv2.COLOR_BGR2GRAY)

# Find very dark pixels (value < 50) in the top 400 pixels of the section (title text)
top_dark = (gray[0:400, :] < 50).astype(np.uint8) * 255
coords = cv2.findNonZero(top_dark)
if coords is not None:
    x_t, y_t, w_t, h_t = cv2.boundingRect(coords)
    print(f"Top dark text bounding box on page 1: x={x_t}, y={y_t}, w={w_t}, h={h_t}")
    # Crop from y_t + h_t + 100
    start_y = y_t + h_t + 100
    print(f"Cropping from y={start_y}")
    
    crop = section[start_y:, :]
    # Trim white borders
    gray_crop = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    coords_crop = cv2.findNonZero((gray_crop < 250).astype(np.uint8) * 255)
    if coords_crop is not None:
        x_c, y_c, w_c, h_c = cv2.boundingRect(coords_crop)
        final_crop = crop[y_c:y_c+h_c, x_c:x_c+w_c]
        cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\test_range.png', final_crop)
        print(f"Detection range crop saved: size {final_crop.shape[1]}x{final_crop.shape[0]}")
    else:
        print("No non-white region found after cropping")
else:
    print("No dark text found in top region of page 1 section")
