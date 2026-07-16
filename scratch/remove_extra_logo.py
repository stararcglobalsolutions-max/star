import os

files = [
    r"c:\react project\sv2\src\app\shop\[id]\HoodSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\GlassProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\CombiProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtect8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectPlus8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamPhod8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\CurtainOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\DualCurtainOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectCurtain8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionProtectOutdoor8inSpecs.tsx",
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamOutdoor8inSpecs.tsx",
]

logo_block = '''        {/* StarArc Logo - TOP */}
        <div className="w-full pt-8 pb-4" style={{ paddingLeft: '9.5%' }}>
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-10 md:h-14 lg:h-16 w-auto object-contain"
          />
        </div>'''

for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        changed = False
        if logo_block in content:
            content = content.replace(logo_block + '\n\n', '')
            content = content.replace(logo_block + '\n', '')
            content = content.replace(logo_block, '')
            changed = True
            
        if changed:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed logo from: {os.path.basename(fpath)}")
        else:
            print(f"Logo not found in: {os.path.basename(fpath)}")

print("All done!")
