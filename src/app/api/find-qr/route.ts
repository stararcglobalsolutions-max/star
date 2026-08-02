import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export const dynamic = 'force-dynamic';

export async function GET() {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  if (!fs.existsSync(productsDir)) {
    return NextResponse.json({ error: 'No products dir' });
  }

  const products = fs.readdirSync(productsDir);
  const results: Record<string, any> = {};

  for (const product of products) {
    const page1Path = path.join(productsDir, product, 'hires_page_1.png');
    if (!fs.existsSync(page1Path)) continue;

    try {
      const image = sharp(page1Path);
      const metadata = await image.metadata();
      const { width, height } = metadata;

      // Scan from 10% to 80% to ensure we cover the whole text column
      const startY = Math.floor(height * 0.10);
      const endY = Math.floor(height * 0.80);
      const scanHeight = endY - startY;
      
      const scanStartX = Math.floor(width * 0.04);
      const scanWidth = Math.floor(width * 0.11);

      const buffer = await image
        .extract({ left: scanStartX, top: startY, width: scanWidth, height: scanHeight })
        .raw()
        .toBuffer();

      const channels = metadata.channels || 3;
      const denseRows = new Array(scanHeight).fill(false);
      
      for (let y = 0; y < scanHeight; y++) {
        let darkPixels = 0;
        for (let x = 0; x < scanWidth; x++) {
          const rIdx = (y * scanWidth + x) * channels;
          const r = buffer[rIdx];
          const g = buffer[rIdx + 1];
          const b = buffer[rIdx + 2];
          
          if (r < 200 && g < 200 && b < 200) {
             darkPixels++;
          }
        }
        denseRows[y] = darkPixels > 5;
      }

      const blocks = [];
      let currentBlock = { start: -1, length: 0 };
      let allowedGaps = 0;

      for (let y = 0; y < scanHeight; y++) {
        if (denseRows[y]) {
          if (currentBlock.start === -1) {
             currentBlock.start = y;
          }
          currentBlock.length++;
          allowedGaps = 5; // allow slightly larger gaps for imperfect scanning
        } else {
          if (currentBlock.start !== -1) {
             if (allowedGaps > 0) {
                currentBlock.length++;
                allowedGaps--;
             } else {
                if (currentBlock.length > (height * 0.02)) { // min 2% height
                   blocks.push({ start: currentBlock.start, length: currentBlock.length });
                }
                currentBlock = { start: -1, length: 0 };
             }
          }
        }
      }
      if (currentBlock.start !== -1 && currentBlock.length > (height * 0.02)) {
         blocks.push({ start: currentBlock.start, length: currentBlock.length });
      }

      // Filter blocks: we want the QR code.
      // QR codes are usually around 4% to 9% of the page height.
      // Device images are usually much taller (>10%).
      // We also prefer the LAST block that fits the criteria, because the QR code is at the bottom of the intro text.
      
      let bestBlock = null;
      for (let i = blocks.length - 1; i >= 0; i--) {
         const blockHeightPct = (blocks[i].length / height) * 100;
         if (blockHeightPct >= 3 && blockHeightPct <= 10) {
            bestBlock = blocks[i];
            break;
         }
      }

      if (!bestBlock && blocks.length > 0) {
         // Fallback to the last block if none fit the perfect size
         bestBlock = blocks[blocks.length - 1];
      }

      if (bestBlock) {
         const absoluteStart = startY + bestBlock.start;
         const topPct = ((absoluteStart / height) * 100) - 1.5;
         const heightPct = ((bestBlock.length / height) * 100) + 3;

         results[product] = {
           top: topPct.toFixed(2) + '%',
           height: heightPct.toFixed(2) + '%'
         };
      } else {
         results[product] = { top: '27.5%', height: '12.5%', note: 'fallback' };
      }

    } catch (e) {
      results[product] = { top: '27.5%', height: '12.5%', error: e instanceof Error ? e.message : String(e) };
    }
  }

  fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'qr_coords.json'), JSON.stringify(results, null, 2));

  return NextResponse.json({ results });
}
