import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const productsDir = path.join(process.cwd(), 'public', 'images', 'products');
  const files = fs.readdirSync(productsDir);
  const stats: Record<string, number> = {};

  for (const slug of files) {
    const page1Path = path.join(productsDir, slug, 'hires_page_1.png');
    if (fs.existsSync(page1Path)) {
      stats[slug] = fs.statSync(page1Path).mtimeMs;
    }
  }

  return NextResponse.json(stats);
}
