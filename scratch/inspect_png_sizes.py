import cv2
import os

base_dir = r"c:\react project\sv2\public\images\products"
folders = [
    "hub-8in",
    "hub2-8in",
    "hub2-4g-8in",
    "hub2-plus-8in",
    "rex-8in",
    "rex2-8in",
    "door-protect-8in",
    "door-protect-plus-8in",
    "motion-cam-phod-8in"
]

for folder in folders:
    img_path = os.path.join(base_dir, folder, "hires_page_1.png")
    if os.path.exists(img_path):
        img = cv2.imread(img_path)
        print(f"{folder}/hires_page_1.png size: {img.shape[1]}x{img.shape[0]}")
    else:
        print(f"{folder}/hires_page_1.png NOT found")
