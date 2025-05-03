import path from 'node:path'
import fs from 'fs';

import { Router } from "express";
import multer from 'multer';

import { listCategories } from "./app/useCases/categories/listCategory";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { getProductsByCategory } from './app/useCases/categories/getProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrder';

export const router = Router();

const uploadPath = path.resolve(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      const uploadPath = path.resolve(__dirname, '..', 'uploads');
      callback(null, uploadPath);
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}--${file.originalname}`);
    }
  })
});

// List Category
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', listProducts);

// Create Products
router.post('/products', upload.single('image'), createProduct);

// Get Products by Category
router.get(`/categories/:categoryId/products`, getProductsByCategory);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change Order Status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:orderId', deleteOrder);
