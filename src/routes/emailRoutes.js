// src/routes/emailRoutes.js
const express = require('express');
const emailController = require('../controllers/emailController');

const router = express.Router();

router.post('/sendmails', emailController.sendEmail);

module.exports = router;
