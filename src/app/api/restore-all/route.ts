import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  const scratchDir = path.join(process.cwd(), 'scratch');
  try {
    const { spawn } = require('child_process');
    const child = spawn('python', ['temp_perfect_clean_all.py'], { cwd: scratchDir, detached: true, stdio: 'ignore' });
    child.unref();
    return NextResponse.json({ success: true, message: "Started in background detached" });
  } catch (e) {
    const err = e as any;
    return NextResponse.json({ success: false, error: err.message, stdout: err.stdout?.toString() });
  }
}
