import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1_7hH9M90B-UgezXGRq53JSGfhxzpecpI';
    const backupPath = path.join(cwd, 'scratch', 'original_pdfs_backup', 'hub2_8in.pdf');
    const workPath = path.join(cwd, 'scratch', 'hub2_8in.pdf');

    // Download the PDF
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Save the PDF
    fs.writeFileSync(backupPath, buffer);
    fs.writeFileSync(workPath, buffer);
    
    console.log('Downloaded and saved PDF to ' + backupPath);

    // Run the Python script to process it
    const command = 'python scratch/process_hub2_8in.py';
    const output = execSync(command, { encoding: 'utf-8', cwd });

    return NextResponse.json({ success: true, output });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stdout: error.stdout?.toString() });
  }
}
