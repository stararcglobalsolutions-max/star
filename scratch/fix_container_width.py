import os, re

# All spec component files
files = [
    r"c:\react project\sv2\src\app\shop\[id]\GlassProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\CombiProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectPlus8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCam8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamPhod8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectCurtain8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\CurtainOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\DualCurtainOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\HoodSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamOutdoorPhod8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamOutdoorHighMountPhod8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\LeaksProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\LifeQuality8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\FireProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\FireProtect2Heat8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\FireProtect2HeatSmoke8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\FireProtect2HeatSmokeCo8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\ManualCallPoint8inSpecs.tsx",
]

for fpath in files:
    if not os.path.exists(fpath):
        print(f"  NOT FOUND: {os.path.basename(fpath)}")
        continue

    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace max-w-7xl container with full-width no-padding container
    content = content.replace(
        '<div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">',
        '<div className="w-full flex flex-col gap-0">'
    )
    # Also fix logo padding to align with screen edge slightly
    content = content.replace(
        '<div className="flex justify-start items-center py-10 pl-10">',
        '<div className="flex justify-start items-center py-8 pl-8">'
    )

    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  Updated: {os.path.basename(fpath)}")
    else:
        print(f"  No change: {os.path.basename(fpath)}")

print("All done!")
