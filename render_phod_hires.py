import fitz
import os

pdf_path = r'c:\react project\sv2\motion_cam_phod.pdf'
doc = fitz.open(pdf_path)
out_dir = r'c:\react project\sv2\public\images\products\motion-cam-phod-8in'
os.makedirs(out_dir, exist_ok=True)

# Render at high DPI for better analysis
for i, page in enumerate(doc):
    # Higher DPI for page renders to enable detail
    pix = page.get_pixmap(dpi=200)
    page_img_path = os.path.join(out_dir, f'hires_page_{i+1}.png')
    pix.save(page_img_path)
    print(f'Rendered page {i+1}: {pix.width}x{pix.height}')

print('Done!')
