import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: 'order is created successfully',
      data: result,
    });
  } catch (error) {}
};

export const orderController = {
  createOrder,
};
