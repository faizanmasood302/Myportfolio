import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Log the attempt (server-side only)
    console.log(`Sending email from: ${email} for user: ${name}`);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        error: "Server configuration error: Missing API Key." 
      }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'faizanmasood009@gmail.com',
      subject: `Portfolio: Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message || "Failed to deliver email via Resend provider." 
      }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Unexpected Backend Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error?.message || "An unexpected error occurred on the server." 
    }, { status: 500 });
  }
}
