import { Request, Response } from "express";

import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN PRODUCTION", "DONE"].includes(status)) {
      res.status(400).json({
        message: "Status should be one of: WAITING, IN PRODUCTION, DONE",
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
