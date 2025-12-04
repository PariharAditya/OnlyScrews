import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'bulk-enquiry';
}

// Email validation regex (RFC 5322 compliant)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Phone validation (Indian format - 10 digits, optional +91)
const PHONE_REGEX = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

// Validate and sanitize all inputs
function validateAndSanitize(body: ContactRequest): { valid: boolean; error?: string; data?: ContactRequest } {
  const { name, email, phone, message, type } = body;

  // Check required fields
  if (!name || !email || !message) {
    return { valid: false, error: 'Name, email, and message are required' };
  }

  // Validate name length
  if (name.length < 2 || name.length > 100) {
    return { valid: false, error: 'Name must be between 2 and 100 characters' };
  }

  // Validate email format
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }

  // Validate phone if provided
  if (phone && phone.trim() && !PHONE_REGEX.test(phone.replace(/\s/g, ''))) {
    return { valid: false, error: 'Please enter a valid Indian phone number' };
  }

  // Validate message length
  if (message.length < 10 || message.length > 5000) {
    return { valid: false, error: 'Message must be between 10 and 5000 characters' };
  }

  // Validate type
  if (type !== 'contact' && type !== 'bulk-enquiry') {
    return { valid: false, error: 'Invalid form type' };
  }

  return {
    valid: true,
    data: {
      name: sanitizeInput(name),
      email: email.toLowerCase().trim(),
      phone: phone ? sanitizeInput(phone) : undefined,
      message: sanitizeInput(message),
      type,
    },
  };
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Parse request body
    let body: ContactRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate and sanitize inputs
    const validation = validateAndSanitize(body);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { name, email, phone, message, type } = validation.data;

    // Get credentials (required for Netlify/Vercel serverless)
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error('[CONTACT API] Missing email credentials - EMAIL_USER or EMAIL_PASS not set');
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later or contact us directly at screwbazar@gmail.com' },
        { status: 503 }
      );
    }

    // Create transporter with production settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: true, // Enable in production for security
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('[CONTACT API] SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later or contact us directly at screwbazar@gmail.com' },
        { status: 503 }
      );
    }

    const isContact = type === 'contact';
    const subjectPrefix = isContact ? '📬 New Contact Message' : '📦 New Bulk Enquiry';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Email to screwbazar@gmail.com
    const mailOptions = {
      from: `"SCREWBAZAR Website" <${emailUser}>`,
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
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666; width: 120px;">Name:</td>
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
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #666;">Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #1a1a1a;">${isContact ? 'Contact Form' : 'Bulk Enquiry'}</td>
              </tr>
            </table>

            <h2 style="color: #1a1a1a; border-bottom: 2px solid #A3F61E; padding-bottom: 10px;">Message</h2>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              <p>This message was submitted from the <span style="font-weight: 900; color: #000000;">SCREW</span><span style="font-weight: 300; color: #000000;">BAZAR</span> website.</p>
              <p>Timestamp: ${timestamp} IST</p>
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
Submitted: ${timestamp} IST
      `,
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: `"SCREWBAZAR" <${emailUser}>`,
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
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 11px;">
              <p>This is an automated confirmation email. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(customerMailOptions),
    ]);

    const duration = Date.now() - startTime;
    console.log(`[CONTACT API] Success - ${type} from ${email} - ${duration}ms`);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[CONTACT API] Error after ${duration}ms:`, error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later or contact us directly at screwbazar@gmail.com' },
      { status: 500 }
    );
  }
}
