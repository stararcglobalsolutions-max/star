import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]');
  const coordsPath = path.join(process.cwd(), 'src', 'app', 'qr_coords.json');
  
  if (!fs.existsSync(coordsPath)) {
    return NextResponse.json({ error: 'No coords file' });
  }

  const coords = JSON.parse(fs.readFileSync(coordsPath, 'utf-8'));
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Find the slug from const BASE = '/images/products/SLUG'; or const BASE = '/images/products/SLUG'
    const slugMatch = content.match(/const BASE = ['"`]\/images\/products\/([^'"`]+)['"`]/);
    if (!slugMatch) continue;

    const slug = slugMatch[1];
    const productCoords = coords[slug];

    if (productCoords) {
      const regex = /style=\{\{\s*top:\s*['"`][^'"`]+['"`],\s*left:\s*['"`]4%['"`],\s*width:\s*['"`]58%['"`],\s*height:\s*['"`][^'"`]+['"`]\s*\}\}/g;
      
      const newStyle = `style={{ top: '${productCoords.top}', left: '4%', width: '58%', height: '${productCoords.height}' }}`;
      
      const originalContent = content;
      content = content.replace(regex, newStyle);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf-8');
        modifiedCount++;
      }
    }
  }

  return NextResponse.json({ success: true, modifiedCount });
}
