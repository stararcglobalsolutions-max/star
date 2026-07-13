import fitz

doc = fitz.open('door_protect_plus.pdf')
page = doc[0]
blocks = page.get_text('dict')['blocks']
for b in blocks:
    if 'lines' in b:
        text = ''.join([s['text'] for l in b['lines'] for s in l['spans']])
        bbox = b['bbox']
        print(f'Text: {text[:50]} | Bbox: {bbox}')
    elif 'image' in b:
        print(f'Image bbox: {b["bbox"]}')
