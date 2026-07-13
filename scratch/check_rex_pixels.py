import cv2
import numpy as np

img_path = r"c:\react project\sv2\public\images\products\rex-8in\hires_page_1.png"
img = cv2.imread(img_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Check sum of dark pixels (value < 200) in columns to find left/right layout
col_sums = np.sum(gray < 200, axis=0)
print(f"Image width: {gray.shape[1]}, height: {gray.shape[0]}")

# Let's divide the image into left and right halves and find where dark pixels start vertically
left_half = gray[:, :gray.shape[1]//2]
right_half = gray[:, gray.shape[1]//2:]

left_rows = np.where(np.sum(left_half < 200, axis=1) > 10)[0]
right_rows = np.where(np.sum(right_half < 200, axis=1) > 10)[0]

print(f"Left half dark pixels start at row: {left_rows[0] if len(left_rows) > 0 else 'None'}")
print(f"Right half dark pixels start at row: {right_rows[0] if len(right_rows) > 0 else 'None'}")

# Print row ranges for left half
ranges_left = []
start = None
for y in range(gray.shape[0]):
    s = np.sum(left_half[y, :] < 200)
    if s > 10:
        if start is None:
            start = y
    else:
        if start is not None:
            ranges_left.append((start, y - 1))
            start = None
if start is not None:
    ranges_left.append((start, gray.shape[0] - 1))

print("\nLeft half dark pixel ranges:")
for r in ranges_left[:10]:
    print(f"y: {r[0]} to {r[1]}")
