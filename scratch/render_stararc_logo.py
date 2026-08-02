import fitz
import os

# Define the PDF configurations
pdfs_config = {
    "combi_protect_8in.pdf": {"slug": "combi-protect-8in", "is_high_res": True, "top_crop": 0.0},
    "curtain_outdoor_8in.pdf": {"slug": "curtain-outdoor-8in", "is_high_res": True, "top_crop": 0.0},
    "door_protect_8in.pdf": {"slug": "door-protect-8in", "is_high_res": True, "top_crop": 0.0},
    "door_protect_plus_8in.pdf": {"slug": "door-protect-plus-8in", "is_high_res": True, "top_crop": 0.0},
    "dual_curtain_outdoor_8in.pdf": {"slug": "dual-curtain-outdoor-8in", "is_high_res": True, "top_crop": 0.0},
    "glass_protect_8in.pdf": {"slug": "glass-protect-8in", "is_high_res": True, "top_crop": 0.0},
    "hub2_8in.pdf": {"slug": "hub2-8in", "is_high_res": True, "top_crop": 0.0},
    "hub2_4g_8in.pdf": {"slug": "hub2-4g-8in", "is_high_res": False, "top_crop": 0.0},
    "hub2_plus_8in.pdf": {"slug": "hub2-plus-8in", "is_high_res": True, "top_crop": 0.0},
    "hub_8in.pdf": {"slug": "hub-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_cam_8in.pdf": {"slug": "motion-cam-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_cam_phod_8in.pdf": {"slug": "motion-cam-phod-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_protect_8in.pdf": {"slug": "motion-protect-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_protect_curtain_8in.pdf": {"slug": "motion-protect-curtain-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_protect_outdoor_8in.pdf": {"slug": "motion-protect-outdoor-8in", "is_high_res": True, "top_crop": 0.0},
    "motion_protect_plus_8in.pdf": {"slug": "motion-protect-plus-8in", "is_high_res": False, "top_crop": 0.0},
    "rex2_8in.pdf": {"slug": "rex2-8in", "is_high_res": True, "top_crop": 0.0},
    "rex_8in.pdf": {"slug": "rex-8in", "is_high_res": True, "top_crop": 0.0},
}

base_output_dir = r"c:\react project\sv2\public\images\products"
logo_path = r"c:\react project\sv2\public\pawered by stararc.png"
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for filename, cfg in pdfs_config.items():
    pdf_path = os.path.join(r"c:\react project\sv2\scratch", filename)
    if not os.path.exists(pdf_path):
        root_path = os.path.join(r"c:\react project\sv2", filename)
        if os.path.exists(root_path):
            pdf_path = root_path
        else:
            print(f"Skipping {filename} (not found)")
            continue

    slug = cfg["slug"]
    is_high_res = cfg["is_high_res"]
    top_crop = cfg["top_crop"]
    
    output_dir = os.path.join(base_output_dir, slug)
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"\nProcessing PDF: {filename} -> {output_dir}")
    doc = fitz.open(pdf_path)
    num_pages = doc.page_count
    
    for i in range(num_pages):
        page = doc.load_page(i)
        orig_rect = page.rect
        
        # 1. Handle header replacement on Page 1
        if i == 0:
            if is_high_res:
                # Cover the top 320 points with white on the left side to fully cover the AJAX logo
                header_rect = fitz.Rect(0, 0, orig_rect.x1 * 0.65, 320.0)
                page.draw_rect(header_rect, color=(1, 1, 1), fill=(1, 1, 1), overlay=True)
                
                # Insert the logo with better size and alignment
                # Height = 90, Width = 90 * 3.177 = 285.93
                logo_rect = fitz.Rect(130.0, 180.0, 130.0 + 285.93, 180.0 + 90.0)
                page.insert_image(logo_rect, filename=logo_path)
            else:
                # Low-res PDF
                # Cover the top 70 points on the left side
                header_rect = fitz.Rect(0, 0, orig_rect.x1 * 0.65, 70.0)
                page.draw_rect(header_rect, color=(1, 1, 1), fill=(1, 1, 1), overlay=True)
                
                # Insert the logo (height = 30 points, width = 30 * 3.177 = 95.3)
                y_start = 28.0 if top_crop > 0 else 20.0
                logo_rect = fitz.Rect(36.0, y_start, 36.0 + 95.3, y_start + 30.0)
                page.insert_image(logo_rect, filename=logo_path)

        # 2. Crop top of page 1, and crop bottom of all pages
        y0_crop = top_crop if i == 0 else 0.0
        bottom_crop = 180.0 if is_high_res else 60.0
        
        new_rect = fitz.Rect(
            orig_rect.x0,
            orig_rect.y0 + y0_crop,
            orig_rect.x1,
            orig_rect.y1 - bottom_crop
        )
        
        page.set_cropbox(new_rect)
        print(f"  Page {i + 1}: top crop {y0_crop} pts, bottom crop {bottom_crop} pts. Height: {new_rect.y1 - new_rect.y0:.1f}")
        
        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"    Saved: hires_page_{i + 1}.png")
        
    doc.close()

print("\nAll done!")
