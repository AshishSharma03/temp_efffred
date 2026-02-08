// Alternatively, you can use direct SMTP with a Node.js backend
// For now, we'll use Formspree which is easier for frontend apps

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
}

// Generate thank you email HTML
const getThankYouEmailTemplate = (name: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #fff; }
        .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #98ABA4; }
        .logo { font-size: 28px; font-weight: bold; color: #98ABA4; margin-bottom: 5px; letter-spacing: 2px; }
        .tagline { color: #666; font-size: 14px; margin: 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #98ABA4; }
        .content h2 { color: #0C0C0C; margin: 0 0 15px 0; font-size: 20px; }
        .content p { margin: 10px 0; color: #555; }
        .content ul { margin: 15px 0; padding-left: 20px; color: #555; }
        .content li { margin: 8px 0; }
        .cta-box { background: #f0faf8; padding: 20px; border-radius: 8px; border-left: 4px solid #C2D8CF; margin: 20px 0; }
        .cta-box strong { color: #0C0C0C; }
        .cta-box a { color: #98ABA4; text-decoration: none; font-weight: bold; }
        .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
        .footer p { margin: 5px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">EFFRED</div>
            <p class="tagline">Enterprise AI Automation Platform</p>
        </div>

        <div class="content">
            <h2>Thank You for Contacting Effred!</h2>
            <p>Hi ${name},</p>
            <p>We appreciate you reaching out to us. Your inquiry is important, and we're committed to getting back to you as soon as possible.</p>
            
            <p><strong>What happens next:</strong></p>
            <ul>
                <li>Our team will review your request within 24 hours</li>
                <li>We'll send you a personalized response with next steps</li>
                <li>You can expect to hear from us shortly</li>
            </ul>
            
            <p>In the meantime, feel free to explore our platform and learn more about how Effred can transform your business.</p>
        </div>

        <div class="cta-box">
            <strong>Need immediate assistance?</strong><br>
            Contact us directly at <a href="mailto:info@effred.com">info@effred.com</a>
        </div>

        <div class="footer">
            <p>© 2024 Effred. All rights reserved.</p>
            <p>This is an automated response. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>
`;

// Generate admin notification HTML
const getAdminEmailTemplate = (data: FormData) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #fff; }
        .header { text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #98ABA4; }
        .logo { font-size: 20px; font-weight: bold; color: #98ABA4; margin-bottom: 5px; }
        .content { margin-bottom: 20px; }
        .content h2 { color: #0C0C0C; margin: 0 0 20px 0; }
        .field { margin-bottom: 15px; padding: 12px; background: #f5f5f5; border-radius: 6px; border-left: 3px solid #98ABA4; }
        .field-label { font-weight: bold; color: #0C0C0C; margin-bottom: 3px; font-size: 13px; text-transform: uppercase; }
        .field-value { color: #555; word-break: break-word; }
        .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">NEW CONTACT FORM SUBMISSION</div>
        </div>

        <div class="content">
            <h2>Inquiry Details</h2>
            
            <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${data.firstName} ${data.lastName}</div>
            </div>

            <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${data.email}">${data.email}</a></div>
            </div>

            ${data.phone ? `<div class="field">
                <div class="field-label">Phone</div>
                <div class="field-value"><a href="tel:${data.phone}">${data.phone}</a></div>
            </div>` : ''}

            ${data.company ? `<div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${data.company}</div>
            </div>` : ''}

            ${data.service ? `<div class="field">
                <div class="field-label">Service Interest</div>
                <div class="field-value">${data.service}</div>
            </div>` : ''}

            ${data.message ? `<div class="field">
                <div class="field-label">Message</div>
                <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>` : ''}
        </div>

        <div class="footer">
            <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}</p>
        </div>
    </div>
</body>
</html>
`;

// Submit form to Formspree
export async function submitFormToFormspree(formData: FormData) {
  try {
    // Using Formspree endpoint - you need to replace with your actual form ID
    const response = await fetch('https://formspree.io/f/xgolenql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || '',
        company: formData.company || '',
        service: formData.service || '',
        message: formData.message || '',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    console.log('[Email Service] Form submitted successfully');
    return { success: true, data };
  } catch (error) {
    console.error('[Email Service] Error submitting form:', error);
    throw error;
  }
}

// Alternative: Send email via backend service
export async function sendFormEmails(formData: FormData) {
  try {
    // Send thank you email to user
    const thankYouEmailHTML = getThankYouEmailTemplate(`${formData.firstName} ${formData.lastName}`);

    // Send admin notification
    const adminEmailHTML = getAdminEmailTemplate(formData);

    // Log for debugging
    console.log('[Email Service] Email templates generated');

    return {
      success: true,
      thankYouTemplate: thankYouEmailHTML,
      adminTemplate: adminEmailHTML,
    };
  } catch (error) {
    console.error('[Email Service] Error generating email templates:', error);
    throw error;
  }
}

export default { submitFormToFormspree, sendFormEmails };
