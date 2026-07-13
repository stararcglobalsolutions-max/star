import fitz
import os

# page sizes from inspection:
# glass-protect-8in: 2479 x 3508 pts -> high-res PDF -> crop_y = 280
# motion-protect-8in: 2479 x 3508 pts -> high-res PDF -> crop_y = 280
# motion-protect-plus-8in: 595 x 842 pts -> low-res PDF -> no AJAX logo visible, crop_y = 0
# combi-protect-8in: 2479 x 3508 pts -> high-res PDF -> crop_y = 280

# For motion-protect-plus-8in page 1, title is at y=85 (already near top), no AJAX logo, crop_y = 0
# For combi-protect-8in page 1, first product text is at y=392 (Baseline product line)
#   and CombiProtect title is at y=521, meaning the AJAX logo is at top, crop_y = 280

pdfs_mapping = {
    r"c:\react project\sv2\scratch\glass_protect_8in.pdf": {
        "slug": "glass-protect-8in",
        "crop_y": 280.0,
    },
    r"c:\react project\sv2\scratch\motion_protect_8in.pdf": {
        "slug": "motion-protect-8in",
        "crop_y": 280.0,
    },
    r"c:\react project\sv2\scratch\motion_protect_plus_8in.pdf": {
        "slug": "motion-protect-plus-8in",
        "crop_y": 0.0,  # low-res, title at y=85 which is after header already removed / no AJAX header visible
    },
    r"c:\react project\sv2\scratch\combi_protect_8in.pdf": {
        "slug": "combi-protect-8in",
        "crop_y": 280.0,
    },
}

base_output_dir = r"c:\react project\sv2\public\images\products"
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for pdf_path, cfg in pdfs_mapping.items():
    slug = cfg["slug"]
    crop_y = cfg["crop_y"]
    output_dir = os.path.join(base_output_dir, slug)
    os.makedirs(output_dir, exist_ok=True)

    print(f"\nProcessing: {slug}")
    doc = fitz.open(pdf_path)
    print(f"  Pages: {doc.page_count}")

    for i in range(doc.page_count):
        page = doc.load_page(i)

        if i == 0 and crop_y > 0:
            orig_rect = page.rect
            page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
            print(f"  Applied top crop on Page 1: shifted y by {crop_y} pts")

        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"  Saved: hires_page_{i + 1}.png ({pix.width}x{pix.height})")

print("\nAll done!")
