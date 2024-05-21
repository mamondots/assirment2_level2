import express from 'express';
import { productController } from './product.controller';
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productID', productController.getSingleProduct);
router.put('/:productID', productController.updateSingleProduct);
router.delete('/:productID', productController.deleteSingleProduct);

export const productRoutes = router;
