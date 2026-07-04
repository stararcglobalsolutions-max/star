import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Partner from '@/models/Partner';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const newPartner = await Partner.create(body);
    return NextResponse.json(newPartner, { status: 201 });
  } catch (error) {
    console.error('Error creating partner request:', error);
    return NextResponse.json({ error: 'Failed to submit partner request' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const partners = await Partner.find({}).sort({ createdAt: -1 });
    return NextResponse.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return NextResponse.json({ error: 'Failed to fetch partners' }, { status: 500 });
  }
}
