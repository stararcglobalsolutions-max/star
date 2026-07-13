import os
import fitz  # PyMuPDF

pdfs_mapping = {
    "hub2_plus_8in.pdf": "hub2-plus-8in",
    "rex_8in.pdf": "rex-8in",
    "rex2_8in.pdf": "rex2-8in",
    "door_protect_8in.pdf": "door-protect-8in",
    "door_protect_plus_8in.pdf": "door-protect-plus-8in"
}

scratch_dir = r"c:\react project\sv2\scratch"
base_output_dir = r"c:\react project\sv2\public\images\products"

zoom = 2.5
mat = fitz.Matrix(zoom, zoom)

for pdf_name, folder_name in pdfs_mapping.items():
    pdf_path = os.path.join(scratch_dir, pdf_name)
    output_dir = os.path.join(base_output_dir, folder_name)
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"Processing PDF: {pdf_name} -> {output_dir}")
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        continue
        
    doc = fitz.open(pdf_path)
    num_pages = doc.page_count
    print(f"Total pages: {num_pages}")
    
    for i in range(num_pages):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        output_path = os.path.join(output_dir, f"hires_page_{i + 1}.png")
        pix.save(output_path)
        print(f"  Rendered Page {i + 1} to {output_path}")
        
print("All PDFs processed successfully!")
