import cv2

products = [
    ("glass-protect-8in", "GlassProtect"),
    ("motion-protect-8in", "MotionProtect"),
    ("motion-protect-plus-8in", "MotionProtect Plus"),
    ("combi-protect-8in", "CombiProtect"),
]

base = r"c:\react project\sv2\public\images\products"

for slug, label in products:
    img_path = fr"{base}\{slug}\hires_page_1.png"
    img = cv2.imread(img_path)
    top = img[:800, :]
    out = fr"c:\react project\sv2\scratch\verify_{slug.replace('-','_')}_top.png"
    cv2.imwrite(out, top)
    print(f"Saved {out}")
