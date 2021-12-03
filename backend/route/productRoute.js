import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.get('/',asyncHandler(async (req,res) => {
    const products = await Product.find();

    res.json(products);
}));
router.get('/getbyCategory/:name/:category',asyncHandler(async (req,res) => {
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
}));
router.get('/:id',asyncHandler(async (req,res) => {

        const product = await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
              res.status(404).json({
                message:'product not found'
            })
        }    
      
}));


export default router;