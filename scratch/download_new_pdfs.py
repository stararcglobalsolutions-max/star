import subprocess
import sys

# pip install gdown if not present
subprocess.run([sys.executable, "-m", "pip", "install", "gdown", "-q"], check=True)

import gdown
import os

downloads = [
    {
        "id": "1AgUJ3G4Teb2-IWndxAE_5tb055xrmuXe",
        "dest": r"c:\react project\sv2\scratch\combi_protect_8in.pdf",
        "name": "Combi Protect (8IN)"
    },
    {
        "id": "1SiCqPuHirpWbCdzxmsQ1gIg5vueFDwpw",
        "dest": r"c:\react project\sv2\scratch\motion_cam_8in.pdf",
        "name": "Motion Cam (8IN)"
    },
    {
        "id": "1irAH-ILCIR32KVZstR2TsxEUj4OppVDs",
        "dest": r"c:\react project\sv2\scratch\motion_cam_phod_8in.pdf",
        "name": "MotionCam (PhOD) (8IN)"
    },
    {
        "id": "1CwIh5YMlIBTeFJIA4ipGParSbzpwF8QC",
        "dest": r"c:\react project\sv2\scratch\motion_protect_curtain_8in.pdf",
        "name": "Motion Protect Curtain (8IN)"
    },
    {
        "id": "1NHBOmvP-HGxKQSrYpw-ypKGT5PLNJIDf",
        "dest": r"c:\react project\sv2\scratch\curtain_outdoor_8in.pdf",
        "name": "Curtain Outdoor (8IN)"
    },
    {
        "id": "1aDeW2NLjDrDsVph5dbjJaPZFqPT9iq5p",
        "dest": r"c:\react project\sv2\scratch\dual_curtain_outdoor_8in.pdf",
        "name": "Dual Curtain Outdoor (8IN)"
    },
    {
        "id": "1zTPjQ10UBr3uSwenHFwBg51dVbtHd5bg",
        "dest": r"c:\react project\sv2\scratch\motion_protect_outdoor_8in.pdf",
        "name": "Motion Protect Outdoor (8IN)"
    },
]

for item in downloads:
    dest = item["dest"]
    if os.path.exists(dest):
        size = os.path.getsize(dest)
        print(f"\nSkipping {item['name']} — already exists ({size:,} bytes)")
        continue
    url = f"https://drive.google.com/uc?id={item['id']}"
    print(f"\nDownloading {item['name']} ...")
    gdown.download(url, dest, quiet=False)
    if os.path.exists(dest):
        size = os.path.getsize(dest)
        print(f"  Saved: {dest} ({size:,} bytes)")
    else:
        print(f"  FAILED: {dest}")

print("\nAll downloads complete.")
