import {Request, Response} from 'express';
import { createProduct, getAllProducts } from '@services/product.service';
// import {prisma} from '@db/prisma';

export const getProductsHandler = async(req: Request, res: Response) => {
    const products =  await getAllProducts();
    res.json(products);
}


export const createProductHandler = async (req: Request, res: Response) => {
    console.log('🔥 req.body:', req.body);

    if (!req.body) {
        return res.status(400).json({ error: 'No body sent' });
    }

    const {name, description, price, inStock} = req.body;

    if (!name || price === undefined || inStock === undefined) {
        return res.status(400).json({error: 'Missing required fields'});
    }
        const product = await  createProduct({name, description, price, inStock});

        return res.status(201).json(product);
}