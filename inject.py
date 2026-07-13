import re

with open('temp_specs.tsx', 'r', encoding='utf-8') as f:
    new_comp = f.read()

with open('src/app/shop/[id]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# ensure not duplicated
if 'export function DoorProtectPlus8inSpecs' not in content:
    content += '\n\n' + new_comp

# insert the tag
if '<DoorProtectPlus8inSpecs slug={unwrappedParams.id} />' not in content:
    content = content.replace('<DoorProtect8inSpecs slug={unwrappedParams.id} />', '<DoorProtect8inSpecs slug={unwrappedParams.id} />\n      <DoorProtectPlus8inSpecs slug={unwrappedParams.id} />')

with open('src/app/shop/[id]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Injected!')
