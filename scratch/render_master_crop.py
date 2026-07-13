import os
import fitz  # PyMuPDF

pdfs_mapping = {
    r"c:\react project\sv2\scratch\hub_8in.pdf": "hub-8in",
    r"c:\react project\sv2\scratch\hub2_8in.pdf": "hub2-8in",
    r"c:\react project\sv2\scratch\hub2_4g_8in.pdf": "hub2-4g-8in",
    r"c:\react project\sv2\scratch\hub2_plus_8in.pdf": "hub2-plus-8in",
    r"c:\react project\sv2\scratch\rex_8in.pdf": "rex-8in",
    r"c:\react project\sv2\scratch\rex2_8in.pdf": "rex2-8in",
    r"c:\react project\sv2\scratch\door_protect_8in.pdf": "door-protect-8in",
    r"c:\react project\sv2\scratch\door_protect_plus_8in.pdf": "door-protect-plus-8in",
    r"c:\react project\sv2\motion_cam_phod.pdf": "motion-cam-phod-8in"
}

base_output_dir = r"c:\react project\sv2\public\images\products"
zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for pdf_path, folder_name in pdfs_mapping.items():
    output_dir = os.path.join(base_output_dir, folder_name)
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"\nProcessing PDF: {pdf_path} -> {output_dir}")
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    doc = fitz.open(pdf_path)
    num_pages = doc.page_count
    print(f"Total pages: {num_pages}")
    
    for i in range(num_pages):
        page = doc.load_page(i)
        
        # Apply branding crop box to page 1 only
        if i == 0:
            orig_rect = page.rect
            # If high-res, crop y by 280. If low-res (e.g. hub2_4g_8in), crop y by 65.
            crop_y = 280.0 if orig_rect.y1 > 1000 else 65.0
            page.set_cropbox(fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1))
            print(f"  Applied top crop on Page 1: shifted y by {crop_y} points")
            
        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"  Rendered Page {i + 1} to {output_path}")
        
print("\nAll PDFs processed successfully!")
