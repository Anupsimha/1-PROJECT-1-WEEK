import dotenv from "dotenv";
dotenv.config();

import transporter from "../config/mailConfig.js";
import Message from "../models/Message.js";

export const sendMessage = async (req , res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields are required!" });
    }

    try {
        // Store in MongoDB
        const newMessage = new Message({ name, email, message });
        await newMessage.save();

        // Send Email
        let mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent & stored successfully!" });

    } catch (error) {
        console.error("Error in contactController.js :", error.message);
        res.status(500).json({error : "Internal Server Error"})
    }
};
