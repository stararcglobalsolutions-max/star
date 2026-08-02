import { NextResponse } from 'next/server';
import { execSync } from 'child_process';
import path from 'path';

export async function GET() {
  try {
    const cwd = process.cwd();
    // Assuming we are in "c:\react project\sv2"
    const command = 'python scratch/fix_hub_8in_qr.py';
    console.log(`Running: ${command} in ${cwd}`);
    const output = execSync(command, { encoding: 'utf-8', cwd });
    return NextResponse.json({ success: true, output });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stdout: error.stdout?.toString() });
  }
}
