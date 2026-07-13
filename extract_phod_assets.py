import cv2
import os
import numpy as np

src = r'c:\react project\sv2\public\images\products\motion-cam-phod-8in'
out = src

# PAGE 1 - Hero section
p1 = cv2.imread(os.path.join(src, 'page_1_full.png'))
h1, w1 = p1.shape[:2]
print(f'Page 1: {w1}x{h1}')

# Scale factor: PDF page = 3508 height, image = h1 height
scale = h1 / 3508.0

# Product image (right side, top area) - approx PDF y: 280-1400, x: 3000-6000
def crop_clean(img, y0, y1, x0, x1):
    sec = img[int(y0*scale):int(y1*scale), int(x0*(w1/4961)):int(x1*(w1/4961))]
    gray = cv2.cvtColor(sec, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 250, 255, cv2.THRESH_BINARY_INV)
    coords = cv2.findNonZero(thresh)
    if coords is not None:
        rx, ry, rw, rh = cv2.boundingRect(coords)
        return sec[ry:ry+rh, rx:rx+rw]
    return sec

# Device image (black MotionCam PhOD, right side)
dev = crop_clean(p1, 200, 1400, 2800, 4961)
cv2.imwrite(os.path.join(out, 'phod_device.png'), dev)
print(f'Device: {dev.shape[1]}x{dev.shape[0]}')

# Badges top-right (Grade 2 + PD 6662)
badges = crop_clean(p1, 200, 700, 4400, 4961)
cv2.imwrite(os.path.join(out, 'phod_badges.png'), badges)
print(f'Badges: {badges.shape[1]}x{badges.shape[0]}')

# QR code
qr = crop_clean(p1, 730, 1000, 150, 700)
cv2.imwrite(os.path.join(out, 'phod_qr.png'), qr)
print(f'QR: {qr.shape[1]}x{qr.shape[0]}')

# Detection range diagram (bottom)
det = p1[int(2450*scale):int(3300*scale), 100:w1-100]
gray_d = cv2.cvtColor(det, cv2.COLOR_BGR2GRAY)
_, thresh_d = cv2.threshold(gray_d, 250, 255, cv2.THRESH_BINARY_INV)
c = cv2.findNonZero(thresh_d)
if c is not None:
    rx, ry, rw, rh = cv2.boundingRect(c)
    det = det[ry:ry+rh, rx:rx+rw]
cv2.imwrite(os.path.join(out, 'phod_detection_range.png'), det)
print(f'Detection: {det.shape[1]}x{det.shape[0]}')

# PAGE 2 - False alarms section
p2 = cv2.imread(os.path.join(src, 'page_2_full.png'))
h2, w2 = p2.shape[:2]
scale2 = h2 / 3508.0

# Optics image (dark background, pets/human, left side)
optics = p2[int(270*scale2):int(1300*scale2), int(150*(w2/4961)):int(2600*(w2/4961))]
cv2.imwrite(os.path.join(out, 'phod_optics_img.png'), optics)
print(f'Optics: {optics.shape[1]}x{optics.shape[0]}')

# Software thermal image (dark background, right side)
software = p2[int(1450*scale2):int(2500*scale2), int(2600*(w2/4961)):int(4961*(w2/4961))]
cv2.imwrite(os.path.join(out, 'phod_software_img.png'), software)
print(f'Software: {software.shape[1]}x{software.shape[0]}')

# Installation SmartBracket image (left side bottom)
install = p2[int(2450*scale2):int(3400*scale2), int(150*(w2/4961)):int(2600*(w2/4961))]
cv2.imwrite(os.path.join(out, 'phod_install_img.png'), install)
print(f'Install: {install.shape[1]}x{install.shape[0]}')

# PAGE 3 - Photo verification
p3 = cv2.imread(os.path.join(src, 'page_3_full.png'))
h3, w3 = p3.shape[:2]
scale3 = h3 / 3508.0

# Phone screenshot with photos (dark bg, left side)
phone = p3[int(1250*scale3):int(2350*scale3), int(100*(w3/4961)):int(2500*(w3/4961))]
cv2.imwrite(os.path.join(out, 'phod_phone_verification.png'), phone)
print(f'Phone: {phone.shape[1]}x{phone.shape[0]}')

# CMS logos (bottom of page 3)
cms = p3[int(2700*scale3):int(3250*scale3), int(100*(w3/4961)):int(w3-100)]
gray_cms = cv2.cvtColor(cms, cv2.COLOR_BGR2GRAY)
_, thresh_cms = cv2.threshold(gray_cms, 250, 255, cv2.THRESH_BINARY_INV)
c2 = cv2.findNonZero(thresh_cms)
if c2 is not None:
    rx, ry, rw, rh = cv2.boundingRect(c2)
    cms = cms[ry:ry+rh, rx:rx+rw]
cv2.imwrite(os.path.join(out, 'phod_cms_logos.png'), cms)
print(f'CMS: {cms.shape[1]}x{cms.shape[0]}')

# PAGE 4 - Privacy + Communication
p4 = cv2.imread(os.path.join(src, 'page_4_full.png'))
h4, w4 = p4.shape[:2]
scale4 = h4 / 3508.0

# Privacy app screenshot (right side top)
privacy_app = p4[int(100*scale4):int(1100*scale4), int(2900*(w4/4961)):int(w4-50)]
cv2.imwrite(os.path.join(out, 'phod_privacy_app.png'), privacy_app)
print(f'Privacy App: {privacy_app.shape[1]}x{privacy_app.shape[0]}')

# Communication diagram (Jeweller x Wings with hub+detector)
comm = p4[int(1700*scale4):int(2300*scale4), int(100*(w4/4961)):int(w4-100)]
gray_comm = cv2.cvtColor(comm, cv2.COLOR_BGR2GRAY)
_, thresh_comm = cv2.threshold(gray_comm, 250, 255, cv2.THRESH_BINARY_INV)
c3 = cv2.findNonZero(thresh_comm)
if c3 is not None:
    rx, ry, rw, rh = cv2.boundingRect(c3)
    comm = comm[ry:ry+rh, rx:rx+rw]
cv2.imwrite(os.path.join(out, 'phod_comm_diagram.png'), comm)
print(f'Comm: {comm.shape[1]}x{comm.shape[0]}')

print('\nAll assets cropped!')
