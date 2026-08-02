import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1WvYFtlBFW8gI-bqCvM3-BywGhq7PHMIq';
    const backupPath = path.join(cwd, 'scratch', 'original_pdfs_backup', 'motion_cam_outdoor_8in.pdf');
    const workPath = path.join(cwd, 'scratch', 'motion_cam_outdoor_8in.pdf');

    // Download the PDF
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Save the PDF
    fs.writeFileSync(backupPath, buffer);
    fs.writeFileSync(workPath, buffer);
    
    return NextResponse.json({ success: true, message: 'Downloaded and saved PDF to ' + backupPath });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
