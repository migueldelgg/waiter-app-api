import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndUpdate(orderId, { is_active: false });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
