import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    // We want to delete:
    // {/* Overlay to hide the QR code, details text, and URL link */}
    // {page.num === 1 && (
    //   <div 
    //     className="absolute bg-white" 
    //     style={{ top: '...', left: '...', width: '...', height: '...' }}
    //   />
    // )}
    
    // Use a regex that matches the overlay block more loosely
    const regex = /\{\/\*\s*Overlay to hide the QR code[\s\S]*?className="absolute bg-white"[\s\S]*?\/>\n?\s*\)\}/g;
    
    content = content.replace(regex, '');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf-8');
      modifiedCount++;
    }
  }

  return NextResponse.json({ success: true, modifiedCount });
}
