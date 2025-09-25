require('dotenv').config();

let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendEmail(to, subject, text) {
    let info = await transporter.sendMail({
        from: `"Galactic HQ" <${process.env.EMAIL}>`,
        to,
        subject,
        text,
    });

    console.log(`Email sent: ${info.messageId}`);
    return info;
}

module.exports = { sendEmail };