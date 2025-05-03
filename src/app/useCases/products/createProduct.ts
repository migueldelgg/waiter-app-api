import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
      description,
      name,
      imagePath: req.file?.filename,
      price: Number(price),
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      category,
    });

    res.status(201).json({ product });

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
