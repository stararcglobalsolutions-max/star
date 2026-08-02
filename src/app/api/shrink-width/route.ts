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

    // Replace the full-width container with a constrained width container
    // `<div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">` -> `<div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">`
    const newContent = content.replace(
      /max-w-7xl/g,
      'max-w-5xl'
    ).replace(
      /<div className="w-full flex flex-col gap-0">/g,
      '<div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">'
    );

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      modifiedCount++;
    }
  }

  return NextResponse.json({ success: true, modifiedCount });
}
