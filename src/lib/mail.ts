import nodemailer from "nodemailer";
import { Options } from "nodemailer/lib/mailer";

export function mail(options: Options) {
    if(!options.from) {
        options.from = process.env.MAIL_FROM;
    }

    return nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT || 587),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    }).sendMail(options);
}