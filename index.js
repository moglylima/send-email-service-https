const dotenv = require('dotenv');
const fs = require('fs');
const http = require('http');
const https = require('https');
const appConf = require('./src/config/express');
const emailRoutes = require('./src/routes/emailRoutes');

dotenv.config();

const PORT = process.env.PORT || 3000;
const PORT_HTTPS = process.env.PORT_HTTPS || 3443;

appConf.use('/api', emailRoutes);

const httpServer = http.createServer(appConf);
const httpsServer = https.createServer({
    key: fs.readFileSync('./certs/certbot/private.key'),
    cert: fs.readFileSync('./certs/certbot/certificate.crt'),
    //key: fs.readFileSync('./certs/server.key'),
    //cert: fs.readFileSync('./certs/server.cert'),
}, appConf);

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);

httpsServer.listen(PORT_HTTPS, () => {
    console.log(`Server running on port ${PORT_HTTPS}`);
}
);