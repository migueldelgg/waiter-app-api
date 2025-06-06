import { Request, Response } from "express";

import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();
    if (categories.length === 0) {
      res.status(404).json({ message: "No categories found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
