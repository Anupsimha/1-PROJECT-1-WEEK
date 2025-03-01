import express from "express";
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = 5000 || process.env.PORT; 

dotenv.config();

app.use(express.json());

app.use("/api/auth" , authRoutes);



app.listen(PORT , () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
});