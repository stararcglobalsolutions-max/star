import os
import glob

search_dirs = [
    r"c:\react project\sv2",
    r"c:\react project",
]

found = False
for sdir in search_dirs:
    print(f"Searching in: {sdir}")
    for root, dirs, files in os.walk(sdir):
        # Skip node_modules and .git
        if "node_modules" in dirs:
            dirs.remove("node_modules")
        if ".git" in dirs:
            dirs.remove(".git")
        if ".next" in dirs:
            dirs.remove(".next")
            
        for file in files:
            lower_file = file.lower()
            if "pawered" in lower_file or "stararc" in lower_file or "power" in lower_file:
                full_path = os.path.join(root, file)
                print(f"FOUND: {full_path}")
                found = True

if not found:
    print("No matching files found.")
