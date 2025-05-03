import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
    .sort({ createdAt: 1 })
    .populate('products.product')
    .where('is_active').equals(true);

    if (orders.length === 0) {
      res.status(404).json({ message: "No orders found" });
    }

    res.json(orders);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
