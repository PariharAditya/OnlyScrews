import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - uses environment variables for security
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address (e.g., screwbazar@gmail.com)
    pass: process.env.EMAIL_PASS, // Gmail App Password (NOT your regular password)
  },
});

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  quantity: string;
  message: string;
  product: string;
  material: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();
    const { name, email, phone, quantity, message, product, material } = body;

    // Validate required fields
    if (!name || !email || !phone || !quantity || !product) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content sent to screwbazar@gmail.com
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'screwbazar@gmail.com',
      replyTo: email, // So you can reply directly to the customer
      subject: `🔩 New Quote Request: ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1a1a1a; padding: 25px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0 0 15px 0; font-size: 22px; color: #BCFF83;">New Quote Request</h1>
            <div style="display: inline-block; background-color: #ffffff; padding: 12px 25px; border-radius: 8px;">
              <span style="font-size: 24px; font-weight: 900; color: #000000;">SCREW</span><span style="font-size: 24px; font-weight: 300; color: #000000;">BAZAR</span>
            </div>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #A3F61E; padding-bottom: 10px;">Product Details</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Product:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${product}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Material:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${material}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Quantity:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${quantity} units</td>
              </tr>
            </table>

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
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;"><a href="tel:${phone}" style="color: #0066cc;">${phone}</a></td>
              </tr>
            </table>

            ${message ? `
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #A3F61E; padding-bottom: 10px;">Additional Details</h2>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6;">${message}</p>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This quote request was submitted from the <span style="font-weight: 900; color: #000000;">SCREW</span><span style="font-weight: 300; color: #000000;">BAZAR</span> website.</p>
              <p>Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
New Quote Request - SCREWBAZAR

PRODUCT DETAILS:
- Product: ${product}
- Material: ${material}
- Quantity: ${quantity} units

CUSTOMER INFORMATION:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

${message ? `ADDITIONAL DETAILS:\n${message}` : ''}

---
Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for your quote request - SCREWBAZAR`,
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
              Thank you for your interest in <strong>${product}</strong>. We have received your quote request and our team will get back to you shortly.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px; color: #1a1a1a;">Your Request Summary:</h3>
              <p style="margin: 5px 0; color: #555;"><strong>Product:</strong> ${product}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Material:</strong> ${material}</p>
              <p style="margin: 5px 0; color: #555;"><strong>Quantity:</strong> ${quantity} units</p>
            </div>
            
            <p style="font-size: 14px; color: #555; line-height: 1.6;">
              If you have any urgent queries, feel free to contact us directly at <a href="mailto:screwbazar@gmail.com" style="color: #0066cc;">screwbazar@gmail.com</a>
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
      { message: 'Quote request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again later.' },
      { status: 500 }
    );
  }
}
