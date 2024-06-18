const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_FROM,
        pass: process.env.GMAIL_PASS_APP,
    },
});

module.exports = transporter;
