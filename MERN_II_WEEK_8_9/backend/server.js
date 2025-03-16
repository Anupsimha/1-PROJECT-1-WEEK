import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended : false }));  // for parsing application/x-www-form-urlencoded

app.use(cookieParser());

app.use('/api/auth' , authRoutes);
app.use('/api/users' , userRoutes);


app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
    connectToMongoDB();
})