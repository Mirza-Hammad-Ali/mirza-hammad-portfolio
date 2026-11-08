import nodemailer from 'nodemailer'
export async function sendContactNotification(contact) {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE, EMAIL_USER, EMAIL_PASS, CONTACT_RECEIVER } = process.env
  if (!EMAIL_USER || !EMAIL_PASS || !CONTACT_RECEIVER) return false
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST || 'smtp.gmail.com',
    port: Number(EMAIL_PORT || 465),
    secure: EMAIL_SECURE !== 'false',
    auth: { user:EMAIL_USER, pass:EMAIL_PASS }
  })
  await transporter.sendMail({
    from: `"Portfolio Contact" <${EMAIL_USER}>`,
    to: CONTACT_RECEIVER,
    replyTo: contact.email,
    subject: `New portfolio message from ${contact.name}`,
    text: `Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}\n\nMessage:\n${contact.message}`
  })
  return true
}
