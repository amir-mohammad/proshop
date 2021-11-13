import express from 'express';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/',async (req,res) => {
    const products = await Product.find();
    res.json(products);
})
router.get('/getbyCategory/:name/:category',async (req,res) => {
        const product = await Product.find({
            name:req.params.name,
            category:req.params.category
        });

        if(product.length === 0){
            res.status(404).json({
                message:'product not found'
            })    
        }
        res.json(product);
})
router.get('/:id',async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404).json({
            message:'product not found'
        })
    }

    res.json(product);
})


export default router;