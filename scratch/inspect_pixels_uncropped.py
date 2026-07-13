import cv2
import numpy as np

img_path = r"c:\react project\sv2\scratch\rex_uncropped.png"
img = cv2.imread(img_path)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

left_half = gray[:, :gray.shape[1]//2]

# Print row ranges for left half where dark pixels exist
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

print("Uncropped Left half dark pixel ranges:")
for r in ranges_left[:10]:
    print(f"y: {r[0]} to {r[1]}")
