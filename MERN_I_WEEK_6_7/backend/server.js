import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app , server } from './socket/socket.js';

const PORT = 5000 || process.env.PORT; 

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);

app.use(express.static(path.join(__dirname , "/frontend/dist")));

app.get('*' , (req , res) => {
    res.sendFile(path.join(__dirname , "frontend" , "dist" ,"index.html"));
})

server.listen(PORT , () => {    
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});