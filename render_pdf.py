import fitz
import os
import requests

def main():
    url = 'https://drive.google.com/uc?export=download&id=1-IYFPynAgvAS-bJGgHzGBJgy1eWAo5Wg'
    response = requests.get(url)
    doc = fitz.open(stream=response.content, filetype='pdf')
    output_dir = 'public/pdf_pages'
    os.makedirs(output_dir, exist_ok=True)
    
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=150)
        pix.save(f'{output_dir}/page_{i+1}.png')
        print(f'Saved page_{i+1}.png')

if __name__ == '__main__':
    main()
