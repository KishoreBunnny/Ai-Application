import { NextResponse } from 'next/server';


export async function GET() {
  return NextResponse.json({
    showToast: true,
    message: 'Data saved successfully!',
  })
}

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ received: body });
}
