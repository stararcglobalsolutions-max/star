import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET() {
  try {
    const cwd = process.cwd();
    const command = 'python scratch/process_hub2_8in.py';
    const output = execSync(command, { encoding: 'utf-8', cwd });

    return NextResponse.json({ success: true, output });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stdout: error.stdout?.toString() });
  }
}
