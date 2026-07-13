import fitz
import os
import requests
import io

def main():
    url = 'https://drive.google.com/uc?export=download&id=1-IYFPynAgvAS-bJGgHzGBJgy1eWAo5Wg'
    response = requests.get(url)
    
    if response.headers.get('Content-Type', '').startswith('text/html'):
        print('Error: Google Drive returned HTML instead of PDF')
        return
        
    output_dir = 'public/pdf_images'
    os.makedirs(output_dir, exist_ok=True)
    
    doc = fitz.open(stream=response.content, filetype='pdf')
    print(f'Total pages: {len(doc)}')
    
    img_count = 0
    for page_index in range(len(doc)):
        page = doc.load_page(page_index)
        images = page.get_images(full=True)
        print(f'Page {page_index+1}: found {len(images)} images')
        
        for img_index, img in enumerate(images):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image['image']
            image_ext = base_image['ext']
            
            image_filename = f'page{page_index+1}_img{img_index+1}.{image_ext}'
            image_path = os.path.join(output_dir, image_filename)
            
            with open(image_path, 'wb') as f:
                f.write(image_bytes)
                
            img_count += 1
            print(f'Saved {image_path}')
            
    print(f'Extracted {img_count} images successfully.')

if __name__ == '__main__':
    main()
