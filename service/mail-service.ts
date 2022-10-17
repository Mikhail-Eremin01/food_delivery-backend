import nodemailer from 'nodemailer';
import { google } from "googleapis";
require("dotenv").config();

class MailService {
    async sendActivationMail(to:string, link:string) {
        try {
            const oAuth2Client = new google.auth.OAuth2(
                process.env.CLIENT_ID,
                process.env.CLIENT_SECRET,
                process.env.REDIRECT_URI
            );
            oAuth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
            });
            
            const transport = nodemailer.createTransport({
                service: "Gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.SMTP_USER,
                    clientId: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    refreshToken: process.env.REFRESH_TOKEN
                },
            });

            const result = await transport.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: `account activation ${process.env.API_URL}`,
                text: "",
                html: `<div>
                        <h1>To activate follow the link </h1>
                        <a href = "${link}">${link}</a>
                       </div>`,
            });
            console.log("Email sent...", result);
        } catch (err) {
            console.log((err as Error).message);
        }
    }
}

export default new MailService();
