import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const scratchDir = path.join(process.cwd(), 'scratch');
    const output = execSync('python temp_clean_rex2.py', { cwd: scratchDir, encoding: 'utf-8' });
    return NextResponse.json({ success: true, output });
  } catch (e) {
    const err = e as any;
    return NextResponse.json({ success: false, error: err.message, stdout: err.stdout?.toString() });
  }
}



