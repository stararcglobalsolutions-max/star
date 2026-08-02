import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const pageTsxPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]', 'page.tsx');
  const coordsPath = path.join(process.cwd(), 'src', 'app', 'qr_coords.json');
  
  const coords = JSON.parse(fs.readFileSync(coordsPath, 'utf-8'));
  let content = fs.readFileSync(pageTsxPath, 'utf-8');

  // We will split the file by "export function " so we can process each component individually
  const parts = content.split('export function ');
  
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    
    const slugMatch = part.match(/const BASE = ['"`]\/images\/products\/([^'"`]+)['"`]/);
    if (!slugMatch) continue;
    
    const slug = slugMatch[1];
    const productCoords = coords[slug] || { top: '27.5%', height: '12.5%' };

    // Let's do a precise replace for each component part
    parts[i] = part.replace(
      /(<div\s+key=\{page\.num\}\s+className="[^"]*?")(>[\s\S]*?<img\s+src=\{page\.src\}[^>]*?className="w-full h-auto block select-none pointer-events-none"\s+loading="lazy"\s*\/>)(\s*\{?\/\*.*?\*\/\}?\s*(\{page\.num === 1 && \([\s\S]*?\}\))?)?\s*<\/div>/,
      (match: string, p1: string, p2: string) => {
         // p2 contains the alt attribute. Let's extract it.
         const altMatch = p2.match(/alt=\{([^}]+)\}/) || p2.match(/alt="([^"]+)"/);
         let altStr = altMatch ? (altMatch[1].startsWith('`') || altMatch[1].startsWith('"') ? altMatch[1] : `\`${altMatch[1]}\``) : '`Product Page ${page.num}`';
         
         // Fix any missing backticks/braces in alt string
         if (!altStr.endsWith('`') && !altStr.endsWith('"') && !altStr.endsWith("'")) {
             altStr = altStr + '`';
         }

         return `<div 
            key={page.num} 
            className={\`w-full bg-white relative \${page.num === PAGES.length ? 'overflow-hidden' : ''}\`}
            style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}
          >
            <img
              src={page.src}
              alt={${altStr.includes('`') || altStr.includes("'") || altStr.includes('"') ? altStr : '`'+altStr+'`'}}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
            {/* Overlay to hide the QR code, details text, and URL link */}
            {page.num === 1 && (
              <div 
                className="absolute bg-white" 
                style={{ top: '${productCoords.top}', left: '4%', width: '58%', height: '${productCoords.height}' }}
              />
            )}
          </div>`;
      }
    );
  }

  const finalContent = parts.slice(0, 1).concat(parts.slice(1).map(p => 'export function ' + p)).join('');
  
  fs.writeFileSync(pageTsxPath, finalContent, 'utf-8');

  return NextResponse.json({ success: true });
}
