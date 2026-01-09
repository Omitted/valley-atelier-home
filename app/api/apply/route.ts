import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing API Key configuration' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const data = await req.json();
        const { fit, details, contact } = data;

        // Construct Email Body
        const htmlBody = `
      <h1>New Project Inquiry</h1>
      <h2>Project Fit</h2>
      <ul>
        <li><strong>Service Area:</strong> ${fit.serviceArea}</li>
        <li><strong>Project Type:</strong> ${fit.projectType}</li>
        <li><strong>Timeline:</strong> ${fit.timeline}</li>
        <li><strong>Budget:</strong> ${fit.budget}</li>
      </ul>

      <h2>Project Details</h2>
      <p><strong>Address:</strong> ${details.address}</p>
      <p><strong>Vision/Notes:</strong> ${details.notes}</p>

      <h2>Contact Info</h2>
      <ul>
        <li><strong>Name:</strong> ${contact.name}</li>
        <li><strong>Email:</strong> ${contact.email}</li>
        <li><strong>Phone:</strong> ${contact.phone}</li>
      </ul>
    `;

        const { data: emailData, error } = await resend.emails.send({
            from: 'Valley Atelier <onboarding@resend.dev>', // Default testing domain
            to: ['omitted@gmail.com'],
            subject: `New Inquiry from ${contact.name}`,
            html: htmlBody,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, emailData }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
