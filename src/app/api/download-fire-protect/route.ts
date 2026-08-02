import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=10zfJhXyiiCZ682Ux0olIBRIK5eL0F1Sk';
    
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      return NextResponse.json({ error: `Failed to download: ${response.statusText}` }, { status: 500 });
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    const savePath = path.join(cwd, 'scratch', 'original_pdfs_backup', 'fire_protect_8in.pdf');
    fs.writeFileSync(savePath, buffer);
    
    return NextResponse.json({ success: true, savedTo: savePath });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
