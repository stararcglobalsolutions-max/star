import fitz
import os
import glob

# Define the PDF configurations
pdfs_config = {
    "combi_protect_8in.pdf": {"slug": "combi-protect-8in", "top_crop": 280.0},
    "curtain_outdoor_8in.pdf": {"slug": "curtain-outdoor-8in", "top_crop": 280.0},
    "door_protect_8in.pdf": {"slug": "door-protect-8in", "top_crop": 280.0},
    "door_protect_plus_8in.pdf": {"slug": "door-protect-plus-8in", "top_crop": 280.0},
    "dual_curtain_outdoor_8in.pdf": {"slug": "dual-curtain-outdoor-8in", "top_crop": 280.0},
    "glass_protect_8in.pdf": {"slug": "glass-protect-8in", "top_crop": 280.0},
    "hub2_8in.pdf": {"slug": "hub2-8in", "top_crop": 280.0},
    "hub2_4g_8in.pdf": {"slug": "hub2-4g-8in", "top_crop": 65.0},
    "hub2_plus_8in.pdf": {"slug": "hub2-plus-8in", "top_crop": 280.0},
    "hub_8in.pdf": {"slug": "hub-8in", "top_crop": 280.0},
    "motion_cam_8in.pdf": {"slug": "motion-cam-8in", "top_crop": 280.0},
    "motion_cam_phod_8in.pdf": {"slug": "motion-cam-phod-8in", "top_crop": 280.0},
    "motion_protect_8in.pdf": {"slug": "motion-protect-8in", "top_crop": 280.0},
    "motion_protect_curtain_8in.pdf": {"slug": "motion-protect-curtain-8in", "top_crop": 280.0},
    "motion_protect_outdoor_8in.pdf": {"slug": "motion-protect-outdoor-8in", "top_crop": 280.0},
    "motion_protect_plus_8in.pdf": {"slug": "motion-protect-plus-8in", "top_crop": 0.0},
    "rex2_8in.pdf": {"slug": "rex2-8in", "top_crop": 280.0},
    "rex_8in.pdf": {"slug": "rex-8in", "top_crop": 280.0},
}

base_output_dir = r"c:\react project\sv2\public\images\products"
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for filename, cfg in pdfs_config.items():
    pdf_path = os.path.join(r"c:\react project\sv2\scratch", filename)
    if not os.path.exists(pdf_path):
        # Fallback to search in root directory in case it's located there
        root_path = os.path.join(r"c:\react project\sv2", filename)
        if os.path.exists(root_path):
            pdf_path = root_path
        else:
            print(f"Skipping {filename} (not found in scratch or root)")
            continue

    slug = cfg["slug"]
    top_crop = cfg["top_crop"]
    
    output_dir = os.path.join(base_output_dir, slug)
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"\nProcessing PDF: {filename} -> {output_dir}")
    doc = fitz.open(pdf_path)
    num_pages = doc.page_count
    
    for i in range(num_pages):
        page = doc.load_page(i)
        orig_rect = page.rect
        
        # Determine crop values
        # Top crop is only applied on the first page
        y0_crop = top_crop if i == 0 else 0.0
        
        # Bottom crop is applied on all pages to remove footers and page numbers
        # If high-res, bottom crop is 180.0 points. If low-res, it is 60.0 points.
        bottom_crop = 180.0 if orig_rect.y1 > 1000 else 60.0
        
        new_rect = fitz.Rect(
            orig_rect.x0,
            orig_rect.y0 + y0_crop,
            orig_rect.x1,
            orig_rect.y1 - bottom_crop
        )
        
        page.set_cropbox(new_rect)
        print(f"  Page {i + 1}: top crop {y0_crop} pts, bottom crop {bottom_crop} pts. New Height: {new_rect.y1 - new_rect.y0:.1f}")
        
        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"    Saved page {i + 1} to {output_path}")
        
    doc.close()

print("\nAll done!")
