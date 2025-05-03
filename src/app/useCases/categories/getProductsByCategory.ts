import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function getProductsByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const result = await Product.find().where('category').equals(categoryId);

    if(result.length=== 0) {
      res.status(404).json({ message: "No products found for this category" });
    }

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
