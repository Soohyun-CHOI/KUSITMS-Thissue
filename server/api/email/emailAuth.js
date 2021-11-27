const nodemailer = require('nodemailer');
require("dotenv").config();
const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'kusitms.lnr@gmail.com',  //보내는 메일의 주소
        pass: 'zxcv7226',  //보내는 메일의 비밀번호
    }
});

module.exports = transport;
//process.env.NODEMAILER_USER
//process.env.NODEMAILER_PASS