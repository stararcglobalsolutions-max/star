import os
src = 'public/pdf_images/hub2_plus'
html = '<html><body><h1>Images</h1>'
for f in sorted(os.listdir(src)):
    if f.endswith(('.png', '.jpeg', '.jpg')):
        html += f'<h2>{f}</h2><img src="{f}" style="max-width:300px;"><br>'
html += '</body></html>'
with open(os.path.join(src, 'preview.html'), 'w') as f:
    f.write(html)
