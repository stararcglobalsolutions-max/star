import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const pageTsxPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]', 'page.tsx');
  
  let content = fs.readFileSync(pageTsxPath, 'utf-8');

  // We are looking for lines like:
  // alt={`Hub 2 Product Documentation - Page ${page.num}
  //               className="w-full h-auto block select-none pointer-events-none"
  
  const regex = /alt=\{`([^$]+)\$\{page\.num\}\r?\n\s+className="w-full h-auto block/g;
  
  content = content.replace(regex, (match, p1) => {
     return `alt={\`${p1}\${page.num}\`}\n              className="w-full h-auto block`;
  });

  fs.writeFileSync(pageTsxPath, content, 'utf-8');

  return NextResponse.json({ success: true });
}
