import cv2

img_path = r"c:\react project\sv2\public\images\products\motion-protect-plus-8in\hires_page_1.png"
img = cv2.imread(img_path)
cv2.imwrite(r"c:\react project\sv2\scratch\verify_mpp_top_v2.png", img[:800, :])
print("Saved verify_mpp_top_v2.png")
