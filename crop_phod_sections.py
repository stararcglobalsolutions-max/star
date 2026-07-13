import cv2
import os
import numpy as np

src = r'c:\react project\sv2\public\images\products\motion-cam-phod-8in'
out = r'c:\react project\sv2\public\images\products\motion-cam-phod-8in\sections'
os.makedirs(out, exist_ok=True)

pages = {1: 'hires_page_1.png', 2: 'hires_page_2.png', 3: 'hires_page_3.png',
         4: 'hires_page_4.png', 5: 'hires_page_5.png', 6: 'hires_page_6.png'}

for pg_num, pg_file in pages.items():
    img = cv2.imread(os.path.join(src, pg_file))
    h, w = img.shape[:2]
    
    # Save small thumbnails for analysis
    scale = 1400 / w
    small = cv2.resize(img, (1400, int(h * scale)))
    cv2.imwrite(os.path.join(out, f'page_{pg_num}_thumb.jpg'), small, [cv2.IMWRITE_JPEG_QUALITY, 85])
    print(f'Page {pg_num} thumb: {small.shape[1]}x{small.shape[0]}')

# Also crop key sections from pages 1 and 2 for detailed inspection
# Page 1 - Top hero area
p1 = cv2.imread(os.path.join(src, 'hires_page_1.png'))
h1, w1 = p1.shape[:2]

# Hero top third
hero = p1[0:int(h1*0.33), :]
hero_s = cv2.resize(hero, (1400, int(hero.shape[0]*1400/w1)))
cv2.imwrite(os.path.join(out, 'p1_hero.jpg'), hero_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

# Features middle
feat = p1[int(h1*0.33):int(h1*0.66), :]
feat_s = cv2.resize(feat, (1400, int(feat.shape[0]*1400/w1)))
cv2.imwrite(os.path.join(out, 'p1_features.jpg'), feat_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

# Bottom detection diagram
det = p1[int(h1*0.66):, :]
det_s = cv2.resize(det, (1400, int(det.shape[0]*1400/w1)))
cv2.imwrite(os.path.join(out, 'p1_detection.jpg'), det_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

# Page 2 sections
p2 = cv2.imread(os.path.join(src, 'hires_page_2.png'))
h2, w2 = p2.shape[:2]
for name, (y0, y1) in {'p2_top': (0, 0.33), 'p2_mid': (0.33, 0.66), 'p2_bot': (0.66, 1.0)}.items():
    sec = p2[int(h2*y0):int(h2*y1), :]
    sec_s = cv2.resize(sec, (1400, int(sec.shape[0]*1400/w2)))
    cv2.imwrite(os.path.join(out, f'{name}.jpg'), sec_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

# Page 3 sections
p3 = cv2.imread(os.path.join(src, 'hires_page_3.png'))
h3, w3 = p3.shape[:2]
for name, (y0, y1) in {'p3_top': (0, 0.33), 'p3_mid': (0.33, 0.66), 'p3_bot': (0.66, 1.0)}.items():
    sec = p3[int(h3*y0):int(h3*y1), :]
    sec_s = cv2.resize(sec, (1400, int(sec.shape[0]*1400/w3)))
    cv2.imwrite(os.path.join(out, f'{name}.jpg'), sec_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

# Page 4 sections
p4 = cv2.imread(os.path.join(src, 'hires_page_4.png'))
h4, w4 = p4.shape[:2]
for name, (y0, y1) in {'p4_top': (0, 0.5), 'p4_bot': (0.5, 1.0)}.items():
    sec = p4[int(h4*y0):int(h4*y1), :]
    sec_s = cv2.resize(sec, (1400, int(sec.shape[0]*1400/w4)))
    cv2.imwrite(os.path.join(out, f'{name}.jpg'), sec_s, [cv2.IMWRITE_JPEG_QUALITY, 90])

print('All section crops saved!')
