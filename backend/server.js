import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import products from '../data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoute from './route/productRoute.js';
import { notFount,errorHandler} from './middleware/errorMiddleware.js'

const app = express();
dotenv.config();

//connect to db
connectDB();
app.use(cors());


app.use('/api/products',productRoute);
app.use(notFount)
app.use(errorHandler)


const PORT = process.env.PORT || 6000;

app.listen(PORT,() => {
    console.log(`server is running on ${process.env.NODE_DEVELOPMENT} port ${PORT}`.bgBlue);
})
