const express = require('express');
const cors = require('cors');

const appConf = express();

// Middleware para parsear JSON e URL-encoded bodies
appConf.use(express.json());
appConf.use(express.urlencoded({ extended: true }));

// Configurar CORS
appConf.use(cors({
    origin: ["*"], // Ajuste isso conforme necessário
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

module.exports = appConf;
