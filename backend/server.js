import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import products from '../data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

const app = express();
dotenv.config();

//connect to db
connectDB();
app.use(cors());


app.get('/',(req,res) => {
    res.send('hello world');
})

app.get('/api/products',(req,res) => {
    res.json(products);
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find(p => p.id == req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 6000;

app.listen(PORT,() => {
    console.log(`server is running on ${process.env.NODE_DEVELOPMENT} port ${PORT}`.bgBlue);
})
