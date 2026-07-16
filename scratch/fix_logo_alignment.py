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

old_logo = '''        {/* StarArc Logo - TOP */}
        <div className="flex justify-center items-center py-10">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>'''

new_logo = '''        {/* StarArc Logo - TOP */}
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

        if old_logo in content:
            content = content.replace(old_logo, new_logo)
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {os.path.basename(fpath)}")
        else:
            print(f"Logo not found or already updated in: {os.path.basename(fpath)}")

print("All done!")
