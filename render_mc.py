import fitz
import os

pdf_path = r'c:\react project\sv2\motion_cam.pdf'
doc = fitz.open(pdf_path)
out_dir = r'c:\react project\sv2\public\images\products\motion-cam-8in'
os.makedirs(out_dir, exist_ok=True)

html_content = '<!DOCTYPE html><html><head><style>body { font-family: sans-serif; background: #eee; padding: 20px; } img { max-width: 100%; border: 1px solid #ccc; margin-bottom: 20px; }</style></head><body><h1>MotionCam PDF</h1>\n'

for i, page in enumerate(doc):
    pix = page.get_pixmap(dpi=150)
    page_img_path = os.path.join(out_dir, f'page_{i+1}_full.png')
    pix.save(page_img_path)
    html_content += f'<h2>Page {i+1}</h2><img src="/images/products/motion-cam-8in/page_{i+1}_full.png" />\n'

html_content += '</body></html>'

with open(r'c:\react project\sv2\public\review_mc.html', 'w') as f:
    f.write(html_content)

print('Rendered pages and created HTML!')
