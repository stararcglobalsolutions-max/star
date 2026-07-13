import fitz
import os

pdf_path = "glass_protect.pdf"
output_dir = "public/images/products/glass-protect-8in"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)

image_index = 0
for page_index in range(len(doc)):
    page = doc[page_index]
    image_list = page.get_images(full=True)
    
    for image in image_list:
        xref = image[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        
        image_name = f"image_{page_index + 1}_{image_index + 1}.{image_ext}"
        image_path = os.path.join(output_dir, image_name)
        
        with open(image_path, "wb") as f:
            f.write(image_bytes)
        
        print(f"Extracted: {image_name}")
        image_index += 1
