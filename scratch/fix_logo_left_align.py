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
    r"c:\react project\sv2\src\app\shop\[id]\MotionCamOutdoorPhod8inSpecs.tsx",
]

# The centered logo block to replace
centered_logo = '''        {/* Powered by StarArc Logo */}
        <div className="flex justify-center items-center py-10">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>'''

# Left-aligned logo block
left_logo = '''        {/* Powered by StarArc Logo */}
        <div className="flex justify-start items-center py-10 pl-2">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>'''

for fpath in files:
    if os.path.exists(fpath):
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()

        if centered_logo in content:
            content = content.replace(centered_logo, left_logo)
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated (left-aligned): {os.path.basename(fpath)}")
        else:
            print(f"Already left or no logo block: {os.path.basename(fpath)}")

print("All done!")
