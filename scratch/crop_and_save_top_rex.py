import cv2

img_path = r"c:\react project\sv2\public\images\products\rex-8in\hires_page_1.png"
img = cv2.imread(img_path)
cv2.imwrite(r"c:\react project\sv2\scratch\rex_hires_top.png", img[:1000, :])
print("Saved top 1000 pixels of rex-8in hires_page_1.png")
