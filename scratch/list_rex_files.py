import os

folder_path = r"c:\react project\sv2\public\images\products\rex-8in"
files = sorted(os.listdir(folder_path))
for f in files:
    full_path = os.path.join(folder_path, f)
    print(f"File: {f} | Size: {os.path.getsize(full_path)} bytes")
