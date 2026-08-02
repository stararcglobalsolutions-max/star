import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function GET() {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  if (!fs.existsSync(productsDir)) {
    return NextResponse.json({ error: 'No products dir' });
  }

  const products = fs.readdirSync(productsDir);
  const results = [];

  for (const product of products) {
    const page1Path = path.join(productsDir, product, 'hires_page_1.png');
    if (!fs.existsSync(page1Path)) continue;

    try {
      const image = sharp(page1Path);
      const metadata = await image.metadata();
      const { width, height } = metadata;

      // We only care about the left half (width / 2)
      // And the vertical region between 15% and 55% where the QR block resides.
      const startY = Math.floor(height * 0.15);
      const endY = Math.floor(height * 0.55);
      const scanHeight = endY - startY;
      const scanWidth = Math.floor(width * 0.48);

      const buffer = await image
        .extract({ left: 0, top: startY, width: scanWidth, height: scanHeight })
        .raw()
        .toBuffer();

      // We want to find horizontal gaps (rows of pure white)
      const rowIntensities = new Array(scanHeight).fill(0);
      
      for (let y = 0; y < scanHeight; y++) {
        let darkPixels = 0;
        for (let x = 0; x < scanWidth; x++) {
          const idx = (y * scanWidth + x) * 3; // RGB (raw is usually 3 channels, but let's just check the first channel assuming grayscale/white bg)
          // Actually sharp raw() might be 3 or 4 channels. metadata.channels
          const channels = metadata.channels || 3;
          const rIdx = (y * scanWidth + x) * channels;
          const r = buffer[rIdx];
          const g = buffer[rIdx + 1];
          const b = buffer[rIdx + 2];
          
          if (r < 240 || g < 240 || b < 240) {
             darkPixels++;
          }
        }
        rowIntensities[y] = darkPixels;
      }

      // Now we have the density of dark pixels per row.
      // We look for blocks of text (rows with dark pixels).
      // The intro paragraph will be a block. Then a blank space. Then the QR code block. Then a blank space. Then "Key features".
      // Let's find the contiguous blocks of content.
      const blocks = [];
      let inBlock = false;
      let blockStart = 0;
      
      for (let y = 0; y < scanHeight; y++) {
        const hasContent = rowIntensities[y] > 5; // more than 5 dark pixels
        if (hasContent && !inBlock) {
          inBlock = true;
          blockStart = y;
        } else if (!hasContent && inBlock) {
          // End of block. Let's see if the gap is significant enough to consider it a real gap.
          // Let's look ahead 20 pixels to ensure it's a real gap, not just line spacing.
          let realGap = true;
          for (let dy = 1; dy < 20 && y + dy < scanHeight; dy++) {
            if (rowIntensities[y + dy] > 5) {
               realGap = false;
               break;
            }
          }
          if (realGap) {
            inBlock = false;
            blocks.push({ start: blockStart + startY, end: y + startY, height: y - blockStart });
          }
        }
      }
      if (inBlock) {
         blocks.push({ start: blockStart + startY, end: scanHeight + startY, height: scanHeight - blockStart });
      }

      // We expect the QR code block to be a block that has a height of around 150-400 pixels.
      // And it's usually the block right before "Key features" (which might be the last block or another block).
      // Let's just return the blocks found so we can analyze them!
      results.push({ product, height, width, blocks: blocks.map(b => ({
          startPct: (b.start / height * 100).toFixed(2),
          endPct: (b.end / height * 100).toFixed(2),
          heightPct: (b.height / height * 100).toFixed(2)
      })) });

    } catch (e) {
      results.push({ product, error: e.message });
    }
  }

  return NextResponse.json({ results });
}
