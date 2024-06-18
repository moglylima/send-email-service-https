// src/services/emailService.js
const transporter = require('../config/mailer');

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.GMAIL_FROM,
        to: to,
        subject: subject,
        text: text
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    sendEmail,
};
