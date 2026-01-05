const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_EMAIL_USER, 
    pass: process.env.MAILER_EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: `"Reservation System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent, 
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.message); // SHOULD HAVE AN ERROR HANDLER
  }
}

module.exports = {
  sendEmail
}