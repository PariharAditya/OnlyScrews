import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'bulk-enquiry';
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json();
    const { name, email, phone, message, type } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get credentials INSIDE the function (required for Netlify serverless)
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    console.log('Email config check:', { hasUser: !!emailUser, hasPass: !!emailPass });

    if (!emailUser || !emailPass) {
      console.error('Missing EMAIL_USER or EMAIL_PASS');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter INSIDE the function (critical for serverless!)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const isContact = type === 'contact';
    const subjectPrefix = isContact ? '📬 New Contact Message' : '📦 New Bulk Enquiry';

    // Email content sent to screwbazar@gmail.com
    const mailOptions = {
      from: emailUser,
      to: 'screwbazar@gmail.com',
      replyTo: email,
      subject: `${subjectPrefix} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0 0 15px 0; font-size: 22px; color: #BCFF83;">${isContact ? 'New Contact Message' : 'New Bulk Enquiry'}</h1>
            <div style="display: inline-block; background-color: #ffffff; padding: 12px 25px; border-radius: 8px;">
              <span style="font-size: 24px; font-weight: 900; color: #000000;">SCREW</span><span style="font-size: 24px; font-weight: 300; color: #000000;">BAZAR</span>
            </div>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #A3F61E; padding-bottom: 10px;">Customer Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;"><a href="mailto:${email}" style="color: #0066cc;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;"><a href="tel:${phone}" style="color: #0066cc;">${phone}</a></td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Contact Number:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;"><a href="tel:+918951934668" style="color: #0066cc;">+91 8951934668</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${isContact ? 'Contact Form' : 'Bulk Enquiry'}</td>
              </tr>
            </table>

            <h2 style="color: #1a1a1a; border-bottom: 2px solid #A3F61E; padding-bottom: 10px;">Message</h2>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This message was submitted from the <span style="font-weight: 900; color: #000000;">SCREW</span><span style="font-weight: 300; color: #000000;">BAZAR</span> website.</p>
              <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `,
      text: `
${isContact ? 'New Contact Message' : 'New Bulk Enquiry'} - SCREWBAZAR

CUSTOMER INFORMATION:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ''}
- Type: ${isContact ? 'Contact Form' : 'Bulk Enquiry'}

MESSAGE:
${message}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: emailUser,
      to: email,
      subject: `Thank you for contacting SCREWBAZAR`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0 0 15px 0; font-size: 22px; color: #BCFF83;">Thank You!</h1>
            <div style="display: inline-block; background-color: #ffffff; padding: 12px 25px; border-radius: 8px;">
              <span style="font-size: 24px; font-weight: 900; color: #000000;">SCREW</span><span style="font-size: 24px; font-weight: 300; color: #000000;">BAZAR</span>
            </div>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <p style="font-size: 16px; color: #333;">Dear ${name},</p>
            <p style="font-size: 14px; color: #555; line-height: 1.6;">
              Thank you for reaching out to us! We have received your ${isContact ? 'message' : 'bulk enquiry'} and our team will get back to you within an hour.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px; color: #1a1a1a;">Your Message:</h3>
              <p style="margin: 5px 0; color: #555; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 14px; color: #555; line-height: 1.6;">
              If you have any urgent queries, feel free to contact us directly at <a href="mailto:screwbazar@gmail.com" style="color: #0066cc;">screwbazar@gmail.com</a> or call us at <a href="tel:18008330066" style="color: #0066cc;">1800 833 0066</a>
            </p>
            
            <p style="font-size: 14px; color: #555; margin-top: 20px;">
              Best regards,<br>
              <strong>Team <span style="font-weight: 900; color: #000000;">SCREW</span><span style="font-weight: 300; color: #000000;">BAZAR</span></strong>
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
