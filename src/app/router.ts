import { Router } from "express";
import { listCategories } from "./useCases/categories/listCategory";
import { createCategory } from "./useCases/categories/createCategory";

export const router = Router();

// List Category
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// List Products
router.get('/products', (req, res) => {
  res.send('ok');
});

// Create Products
router.post('/products', (req, res) => {
  res.send('ok');
});

// Get Products by Category
router.get(`/categories/:categoryId/products`, (req, res) => {
  res.send('ok');
});

// List Orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

// Create Order
router.post('/orders', (req, res) => {
  res.send('ok');
});

// Change Order Status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// Delete/Cancel Order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
