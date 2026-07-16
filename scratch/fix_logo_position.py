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
]

logo_block_bottom = '''
        {/* StarArc Logo */}
        <div className="flex justify-center items-center py-12">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>'''

logo_block_top = '''
        {/* StarArc Logo - TOP */}
        <div className="flex justify-center items-center py-10">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>
'''

insert_after = '      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">'

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove logo from bottom
    content = content.replace(logo_block_bottom, '')

    # Check if logo already at top
    if 'StarArc Logo - TOP' not in content:
        content = content.replace(insert_after, insert_after + logo_block_top, 1)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated: {os.path.basename(fpath)}")

print("All done!")
