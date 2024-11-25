const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');
const fs = require('fs');
const https = require('https')

dotenv.config();

const router = require('./router/userRouter');
const authrouter = require('./router/authRouter');
const mongoConnect = require("../server/db/connect");

mongoConnect();

app.use(cors());  // Enable CORS for API requests
const axios = require('axios');
// app.use(express.static(path.join(__dirname, '../client')));  // Serve static files correctly
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "7mb" }));
app.use(router);
app.use(authrouter);

app.get('/test', (req, res) => {
    res.status(200).send('Test successful');
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  }, app).listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
