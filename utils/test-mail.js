// utils/test-mail.js
import nodemailer from "nodemailer"
import { EMAIL_PASSWORD } from "../config/env.js";
import { accountEmail } from "../config/nodemailer.js";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function testEmail() {
    try {
        // ✅ Test connection
        await transporter.verify();
        console.log('✅ STMP ready');

        // ✅ Send a test email
        const info = await transporter.sendMail({
            from: accountEmail,
            to: 'your-email@gmail.com', // <-- CHANGE to your email
            subject: 'Test Email from SubDub',
            html: '<h1>✅ Test Successful!</h1><p>Your nodemailer is working.</p>',
        });

        console.log('✅ Email sent:', info.response);
        console.log('📧 Message ID:', info.messageId);

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

testEmail();
