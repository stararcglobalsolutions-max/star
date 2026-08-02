import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const script = searchParams.get('script');
    
    if (!script) {
        return NextResponse.json({ success: false, error: "No script provided" });
    }

    const cwd = process.cwd();
    const command = `python ${script}`;
    const output = execSync(command, { encoding: 'utf-8', cwd });

    return NextResponse.json({ success: true, output });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stdout: error.stdout?.toString() });
  }
}
