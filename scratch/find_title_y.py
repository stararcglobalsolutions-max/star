import fitz
import os

pdf_paths = {
    "hub_8in.pdf": "Hub Jeweller",
    "hub2_8in.pdf": "Hub 2",
    "hub2_4g_8in.pdf": "Hub 2 (4G)",
    "hub2_plus_8in.pdf": "Hub 2 Plus",
    "rex_8in.pdf": "ReX",
    "rex2_8in.pdf": "ReX 2",
    "door_protect_8in.pdf": "DoorProtect",
    "door_protect_plus_8in.pdf": "DoorProtect Plus",
    "motion_cam_phod.pdf": "MotionCam"
}

scratch_dir = r"c:\react project\sv2\scratch"

for filename, title_keyword in pdf_paths.items():
    pdf_path = os.path.join(scratch_dir, filename) if filename != "motion_cam_phod.pdf" else r"c:\react project\sv2\motion_cam_phod.pdf"
    if not os.path.exists(pdf_path):
        continue
    
    doc = fitz.open(pdf_path)
    page = doc[0]
    
    # Let's search for the text blocks and find the first block containing our title keyword
    blocks = page.get_text("blocks")
    found = False
    for block in blocks:
        text = block[4].strip()
        if title_keyword.lower() in text.lower():
            # exclude the footer text
            if "technical data sheet" in text.lower() or block[1] > 3000:
                continue
            print(f"{filename} -> Title keyword '{title_keyword}' found in block:")
            print(f"  Rect: {block[0]:.1f}, {block[1]:.1f}, {block[2]:.1f}, {block[3]:.1f}")
            print(f"  Text: {text.replace(chr(10), ' ')}")
            found = True
            break
            
    if not found:
        print(f"{filename} -> Title keyword '{title_keyword}' NOT found")
