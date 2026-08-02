import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1Zxy8xvIS4TwPoOgCrghw4B7wXFqCJs9I';
    
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      return NextResponse.json({ error: `Failed to download: ${response.statusText}` }, { status: 500 });
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const savePath = path.join(cwd, 'scratch', 'original_pdfs_backup', 'life_quality_8in.pdf');
    fs.writeFileSync(savePath, buffer);
    
    return NextResponse.json({ success: true, savedTo: savePath });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
