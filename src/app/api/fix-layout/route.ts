import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // This regex looks for the exact structure of the PAGES loop.
    // We want to replace:
    // <div key={page.num} className="...">
    //   <img
    //     src={page.src}
    //     alt={`...`}
    //     className="w-full h-auto block select-none pointer-events-none"
    //     loading="lazy"
    //   />
    // </div>
    
    // We will do a regex replace that finds the opening div and the img block, and replaces it.
    
    const originalContent = content;

    content = content.replace(
      /(<div\s+key=\{page\.num\}\s+className="[^"]*?")(>[\s\S]*?<img\s+src=\{page\.src\}[^>]*?className="w-full h-auto block select-none pointer-events-none"\s+loading="lazy"\s*\/>)/g,
      (match: string, p1: string, p2: string) => {
        // p1 is the opening div with key and className
        // p2 is the > and the img tag
        
        // We inject the relative positioning and aspect ratio logic into the opening div.
        // But since p1 ends with a quote, we need to modify the className.
        
        const newP1 = p1.replace(/className="(.*?)"/, (m: string, classes: string) => {
           return `className={\`${classes} relative \${page.num === PAGES.length ? 'overflow-hidden' : ''}\`} style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}`;
        });

        const overlay = `
            {/* Overlay to hide the QR code, details text, and URL link */}
            {page.num === 1 && (
              <div 
                className="absolute bg-white" 
                style={{ top: '27.5%', left: '5%', width: '44%', height: '12.5%' }}
              />
            )}`;

        return `${newP1}${p2}${overlay}`;
      }
    );

    // Some files might have already been modified by me previously (e.g. HubJewellerSpecs). 
    // I should only overwrite if it actually changed and isn't already using `aspectRatio`.
    if (originalContent !== content && !originalContent.includes('aspectRatio: \'1 / 0.45\'')) {
      fs.writeFileSync(filePath, content, 'utf-8');
      modifiedCount++;
    }
  }

  return NextResponse.json({ success: true, modifiedCount, files: files.length });
}
