import { type NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail';
import { type EmailRequest } from '@/types/emailRequest';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { name, from, message }: EmailRequest = await request.json();
  try {
    const response = await sendEmail({ name, from, message });
    return NextResponse.json({ response: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
