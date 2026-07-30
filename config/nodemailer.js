import nodemailer from "nodemailer"
import { EMAIL_PASSWORD } from "./env.js"

export const accountEmail = 'yfrp.dev@gmail.com';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD.replace(/\s/g, ''),
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export default transporter