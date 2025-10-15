import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, company, email, phone, interest, message } = request.body;

    // Basic validation
    if (!name || !email || !message) {
      return response.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    // Length validation
    if (name.length > 100 || email.length > 100 || message.length > 2000) {
      return response.status(400).json({
        success: false,
        message: 'Form data exceeds maximum length limits.'
      });
    }

    // Send email using Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'MULTIVANTAGE Contact Form <noreply@resend.dev>',
            to: ['multivantagepvtltd@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #f97316 0%, #22c55e 100%); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                  <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">MULTIVANTAGE Website</p>
                </div>
                
                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                  <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
                      <td style="padding: 8px 0; color: #333;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                      <td style="padding: 8px 0; color: #333;">${email}</td>
                    </tr>
                    ${company ? `
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
                      <td style="padding: 8px 0; color: #333;">${company}</td>
                    </tr>
                    ` : ''}
                    ${phone ? `
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                      <td style="padding: 8px 0; color: #333;">${phone}</td>
                    </tr>
                    ` : ''}
                    ${interest ? `
                    <tr>
                      <td style="padding: 8px 0; font-weight: bold; color: #555;">Interest:</td>
                      <td style="padding: 8px 0; color: #333;">${interest}</td>
                    </tr>
                    ` : ''}
                  </table>
                </div>
                
                <div style="background: white; padding: 20px; border-radius: 10px; border-left: 4px solid #f97316;">
                  <h3 style="color: #333; margin-top: 0;">Message</h3>
                  <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 10px; font-size: 12px; color: #666;">
                  <p style="margin: 0;"><strong>Submission Details:</strong></p>
                  <p style="margin: 5px 0 0 0;">Submitted: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed:', await emailResponse.text());
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
      }
    }

    // Log the submission (for debugging)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      interest,
      timestamp: new Date().toISOString()
    });

    return response.status(200).json({
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return response.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
}
