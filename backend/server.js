import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import products from '../data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoute from './route/productRoute.js';


const app = express();
dotenv.config();

//connect to db
connectDB();
app.use(cors());
app.use((req,res,next) => {
    console.log(req.originalUrl);
   
    next();
})

app.use('/api/products',productRoute);



const PORT = process.env.PORT || 6000;

app.listen(PORT,() => {
    console.log(`server is running on ${process.env.NODE_DEVELOPMENT} port ${PORT}`.bgBlue);
})
