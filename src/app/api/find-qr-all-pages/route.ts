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
    const productDir = path.join(productsDir, product);
    const files = fs.readdirSync(productDir).filter(f => f.startsWith('hires_page_') && f.endsWith('.png'));
    
    // Sort files by page number
    files.sort((a, b) => {
       const matchA = a.match(/hires_page_(\d+)/);
       const matchB = b.match(/hires_page_(\d+)/);
       const numA = matchA ? parseInt(matchA[1]) : 0;
       const numB = matchB ? parseInt(matchB[1]) : 0;
       return numA - numB;
    });

    let foundQr = false;

    for (const file of files) {
      if (foundQr) break;

      const matchFile = file.match(/hires_page_(\d+)/);
      const pageNum = matchFile ? parseInt(matchFile[1]) : 1;
      const pagePath = path.join(productDir, file);

      try {
        const image = sharp(pagePath);
        const metadata = await image.metadata();
        const { width, height } = metadata;

        const startY = Math.floor(height * 0.10);
        const endY = Math.floor(height * 0.85);
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
          // The QR code is a very dense 2D barcode. It should have many dark pixels in this column.
          denseRows[y] = darkPixels > 15; // increased threshold to avoid noise/light text
        }

        const blocks = [];
        let currentBlock = { start: -1, length: 0 };
        let allowedGaps = 2; // tight gaps for a solid QR code

        for (let y = 0; y < scanHeight; y++) {
          if (denseRows[y]) {
            if (currentBlock.start === -1) {
               currentBlock.start = y;
            }
            currentBlock.length++;
            allowedGaps = 2; 
          } else {
            if (currentBlock.start !== -1) {
               if (allowedGaps > 0) {
                  currentBlock.length++;
                  allowedGaps--;
               } else {
                  if (currentBlock.length > (height * 0.02)) {
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

        // We are looking for a perfectly square-like block that matches QR code dimensions (usually 3% to 8% of page)
        let bestBlock = null;
        for (let i = blocks.length - 1; i >= 0; i--) {
           const blockHeightPct = (blocks[i].length / height) * 100;
           if (blockHeightPct >= 3 && blockHeightPct <= 9) {
              bestBlock = blocks[i];
              break;
           }
        }

        if (bestBlock) {
           const absoluteStart = startY + bestBlock.start;
           const topPct = ((absoluteStart / height) * 100) - 1.0; // slightly tighter padding
           const heightPct = ((bestBlock.length / height) * 100) + 2.0;

           results[product] = {
             pageNum,
             top: topPct.toFixed(2) + '%',
             height: heightPct.toFixed(2) + '%'
           };
           foundQr = true;
        }

      } catch (e) {
         console.error('Error on', product, file, e);
      }
    }
    
    if (!foundQr) {
       // Default fallback if absolutely not found on any page
       results[product] = { pageNum: 1, top: '27.5%', height: '12.5%', note: 'fallback' };
    }
  }

  fs.writeFileSync(path.join(process.cwd(), 'src', 'app', 'qr_coords_v3.json'), JSON.stringify(results, null, 2));

  return NextResponse.json({ results });
}
