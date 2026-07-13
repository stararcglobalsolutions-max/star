import os
import fitz  # PyMuPDF

# Mapping: pdf_path -> (slug, optional_override_crop_y)
# crop_y = None means auto-detect (280 for high-res, 65 for low-res)
pdfs_mapping = [
    {
        "path": r"c:\react project\sv2\scratch\combi_protect_8in.pdf",
        "slug": "combi-protect-8in",
        "crop_y": None,  # auto
    },
    {
        "path": r"c:\react project\sv2\scratch\motion_cam_8in.pdf",
        "slug": "motion-cam-8in",
        "crop_y": None,
    },
    {
        "path": r"c:\react project\sv2\scratch\motion_cam_phod_8in.pdf",
        "slug": "motion-cam-phod-8in",
        "crop_y": None,
    },
    {
        "path": r"c:\react project\sv2\scratch\motion_protect_curtain_8in.pdf",
        "slug": "motion-protect-curtain-8in",
        "crop_y": None,
    },
    {
        "path": r"c:\react project\sv2\scratch\curtain_outdoor_8in.pdf",
        "slug": "curtain-outdoor-8in",
        "crop_y": None,
    },
    {
        "path": r"c:\react project\sv2\scratch\dual_curtain_outdoor_8in.pdf",
        "slug": "dual-curtain-outdoor-8in",
        "crop_y": None,
    },
    {
        "path": r"c:\react project\sv2\scratch\motion_protect_outdoor_8in.pdf",
        "slug": "motion-protect-outdoor-8in",
        "crop_y": None,
    },
]

base_output_dir = r"c:\react project\sv2\public\images\products"
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for cfg in pdfs_mapping:
    pdf_path = cfg["path"]
    slug = cfg["slug"]
    override_crop_y = cfg["crop_y"]

    if not os.path.exists(pdf_path):
        print(f"\nSKIPPED (not found): {pdf_path}")
        continue

    output_dir = os.path.join(base_output_dir, slug)
    os.makedirs(output_dir, exist_ok=True)

    print(f"\nProcessing: {slug}")
    doc = fitz.open(pdf_path)
    print(f"  Pages: {doc.page_count}")

    for i in range(doc.page_count):
        page = doc.load_page(i)

        if i == 0:
            orig_rect = page.rect
            if override_crop_y is not None:
                crop_y = override_crop_y
            else:
                # Auto-detect: high-res (y1 > 1000) → 280 pts, low-res → 65 pts
                crop_y = 280.0 if orig_rect.y1 > 1000 else 65.0
            if crop_y > 0:
                page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
                print(f"  Applied top crop on Page 1: {crop_y} pts (page height={orig_rect.y1:.0f})")

        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"  Saved: hires_page_{i + 1}.png ({pix.width}x{pix.height})")

    doc.close()

print("\nAll done!")
