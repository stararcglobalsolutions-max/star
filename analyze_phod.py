import fitz
import os

pdf_path = r'c:\react project\sv2\motion_cam_phod.pdf'
doc = fitz.open(pdf_path)
print(f'Total pages: {len(doc)}')

for i, page in enumerate(doc):
    print(f'\n=== PAGE {i+1} === (height: {page.rect.height})')
    blocks = page.get_text('dict')['blocks']
    for b in blocks:
        if b['type'] == 0:
            for line in b['lines']:
                for span in line['spans']:
                    txt = span['text'].strip()
                    if txt:
                        size = round(span['size'])
                        flags = span['flags']
                        bold = 'BOLD' if flags & 16 else ''
                        ox = round(span['origin'][0])
                        oy = round(span['origin'][1])
                        print(f'  [y={oy} x={ox} sz={size} {bold}] {txt[:100]}')
