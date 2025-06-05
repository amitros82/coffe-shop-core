import {Router} from 'express'
import {getProductsHandler, createProductHandler} from '@controllers/product.controller'
const router = Router();

router.get('/', getProductsHandler);

router.post('/', createProductHandler);

export default router;
