import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Form submission received:', data);

  // In a real application, you would process the data here,
  // e.g., save to a database, send emails, etc.

  return NextResponse.json({ message: 'Form submitted successfully!', data });
}
