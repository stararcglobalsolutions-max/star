import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Make the box wider to ensure it covers even the longest URLs
    let newContent = content.replace(/width:\s*['"`]50%['"`]/g, "width: '58%'");
    newContent = newContent.replace(/width:\s*['"`]44%['"`]/g, "width: '58%'"); // Just in case any are still 44%
    newContent = newContent.replace(/left:\s*['"`]5%['"`]/g, "left: '4%'");

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      modifiedCount++;
    }
  }

  return NextResponse.json({ success: true, modifiedCount });
}
