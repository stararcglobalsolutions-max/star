import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Check if it's a git repo
    const status = execSync('git status', { cwd: process.cwd(), encoding: 'utf-8' });
    
    // Restore all images
    execSync('git restore public/images/products', { cwd: process.cwd(), encoding: 'utf-8' });

    return NextResponse.json({ success: true, status });
  } catch (e) {
    return NextResponse.json({ success: false, error: e.message, stdout: e.stdout?.toString() });
  }
}
