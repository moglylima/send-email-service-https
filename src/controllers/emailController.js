// src/controllers/emailController.js
const emailService = require('../services/emailService');

const sendEmail = async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        await emailService.sendEmail(to, subject, text);
        res.status(200).send('Success - Email sent');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error - Email not sent');
    }
};
module.exports = {
    sendEmail,
};

