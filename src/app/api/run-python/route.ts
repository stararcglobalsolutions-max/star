import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const script = searchParams.get('script') || 'test_pymupdf.py';
  const scratchDir = path.join(process.cwd(), 'scratch');
  
  try {
    const output = execSync(`python ${script}`, { cwd: scratchDir, encoding: 'utf-8' });
    return NextResponse.json({ success: true, output });
  } catch (e) {
    const err = e as any;
    return NextResponse.json({ success: false, error: err.message, stdout: err.stdout?.toString() });
  }
}
