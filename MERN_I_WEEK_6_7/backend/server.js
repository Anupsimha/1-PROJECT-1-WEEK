import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app , server } from './socket/socket.js';


const PORT = 5000 || process.env.PORT; 

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);
app.use("/api/users" , userRoutes);


server.listen(PORT , () => {    
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});