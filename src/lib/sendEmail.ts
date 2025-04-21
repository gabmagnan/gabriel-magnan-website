import { createTransport } from 'nodemailer';
import { GMAIL_PASS, GMAIL_USER } from '@/env-constants';
import { type EmailRequest } from '@/types/emailRequest';

export const sendEmail = async ({ name, from, message }: EmailRequest) => {
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: from,
    to: GMAIL_USER,
    subject: `[gabriel-magnan-website-portfolio] New message from ${name} (${from})`,
    text: message,
  };

  try {
    const mail = await transporter.sendMail(mailOptions);
    return mail.response;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};
