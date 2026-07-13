import cv2
import numpy as np

p2 = cv2.imread(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\page_2_full.png')
h, w = p2.shape[:2]

# Let's crop the raw section (y from 3000 to 4900, x from 100 to 5000)
section = p2[3000:4900, 100:5000]

# Convert to gray
gray = cv2.cvtColor(section, cv2.COLOR_BGR2GRAY)

# Find very dark pixels (value < 50) which represents the text
dark = (gray < 50).astype(np.uint8) * 255

# Let's find coordinates of dark pixels in the top part of the section
# (e.g. y from 0 to 400)
top_dark = dark[0:400, :]
coords = cv2.findNonZero(top_dark)
if coords is not None:
    x_t, y_t, w_t, h_t = cv2.boundingRect(coords)
    print(f"Top dark text bounding box: x={x_t}, y={y_t}, w={w_t}, h={h_t}")
    # The title text ends at y_t + h_t. Let's add some padding and start the crop below it!
    # Let's see: the diagrams start below the title text.
    start_y = y_t + h_t + 100
    print(f"Cropping from y={start_y}")
    
    crop = section[start_y:, :]
    # Trim bottom white space
    gray_crop = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    coords_crop = cv2.findNonZero((gray_crop < 250).astype(np.uint8) * 255)
    if coords_crop is not None:
        x_c, y_c, w_c, h_c = cv2.boundingRect(coords_crop)
        final_crop = crop[y_c:y_c+h_c, x_c:x_c+w_c]
        cv2.imwrite(r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\test_range.png', final_crop)
        print(f"Detection range crop saved: size {final_crop.shape[1]}x{final_crop.shape[0]}")
else:
    print("No dark text found in top region")
