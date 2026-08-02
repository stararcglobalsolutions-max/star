import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export const dynamic = 'force-dynamic';

export async function GET() {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  const coordsPath = path.join(process.cwd(), 'src', 'app', 'qr_coords.json');
  
  if (!fs.existsSync(coordsPath)) {
    return NextResponse.json({ error: 'No coords file' });
  }

  const coords = JSON.parse(fs.readFileSync(coordsPath, 'utf-8'));
  const results: Record<string, string> = {};

  for (const slug of Object.keys(coords)) {
    const page1Path = path.join(productsDir, slug, 'hires_page_1.png');
    
    if (!fs.existsSync(page1Path)) continue;

    try {
      const productCoords = coords[slug];
      
      // If it was a fallback, skip it to be safe
      if (productCoords.note === 'fallback') {
         results[slug] = 'skipped (fallback)';
         continue;
      }

      const topPct = parseFloat(productCoords.top);
      let heightPct = parseFloat(productCoords.height);

      // Increase height by 4.5% to ensure the URL and pin icon are completely swallowed!
      heightPct += 4.5;

      const image = sharp(page1Path);
      const metadata = await image.metadata();
      const { width, height } = metadata;

      const cutTop = Math.floor((topPct / 100) * height);
      const cutHeight = Math.floor((heightPct / 100) * height);
      const bottomTop = cutTop + cutHeight;

      if (bottomTop >= height) {
         results[slug] = 'skipped (cut too large)';
         continue;
      }

      // Extract top half
      const topHalf = await sharp(page1Path)
        .extract({ left: 0, top: 0, width: width, height: cutTop })
        .toBuffer();

      // Extract bottom half
      const bottomHeight = height - bottomTop;
      const bottomHalf = await sharp(page1Path)
        .extract({ left: 0, top: bottomTop, width: width, height: bottomHeight })
        .toBuffer();

      const newHeight = cutTop + bottomHeight;

      // Stitch them together
      await sharp({
        create: {
          width: width,
          height: newHeight,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
      })
      .composite([
        { input: topHalf, top: 0, left: 0 },
        { input: bottomHalf, top: cutTop, left: 0 }
      ])
      .png()
      .toFile(page1Path + '.tmp.png');

      // Replace original file
      fs.renameSync(page1Path + '.tmp.png', page1Path);

      results[slug] = 'success';
    } catch (e) {
      results[slug] = 'error: ' + (e instanceof Error ? e.message : String(e));
    }
  }

  return NextResponse.json({ results });
}
