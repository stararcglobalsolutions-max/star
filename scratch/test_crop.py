import fitz
import os

scratch_dir = r"c:\react project\sv2\scratch"
pdf_name = "hub2_plus_8in.pdf"
pdf_path = os.path.join(scratch_dir, pdf_name)

doc = fitz.open(pdf_path)
page = doc[0]
orig_rect = page.rect
print(f"Original rect: {orig_rect}")

# Try crop_y = 280
crop_y = 280.0
new_rect = fitz.Rect(orig_rect.x0, orig_rect.y0 + crop_y, orig_rect.x1, orig_rect.y1)
page.set_cropbox(new_rect)
print(f"New rect: {page.rect}")

# Render to test file
zoom = 1.0
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)
output_path = os.path.join(scratch_dir, "test_cropped_hub2_plus.png")
pix.save(output_path)
print(f"Saved cropped image to {output_path}")

# Let's inspect the text in the cropped page
blocks = page.get_text("blocks")
print("\nBlocks on cropped page:")
for block in blocks:
    text = block[4].strip()
    if text:
        print(f"y: {block[1]:.1f} - {block[3]:.1f} | {text.replace(chr(10), ' ')[:70]}")
