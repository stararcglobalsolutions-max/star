import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'src', 'app', 'shop', '[id]');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));

  let modifiedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // We replace width: '44%' with width: '50%' everywhere in these files
    const regex = /width:\s*['"`]44%['"`]/g;
    const newContent = content.replace(regex, "width: '50%'");

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      modifiedCount++;
    }
  }

  return NextResponse.json({ success: true, modifiedCount });
}
