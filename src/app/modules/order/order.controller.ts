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

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrder();
    res.status(200).json({
      success: true,
      message: 'getting all order successfully',
      data: result,
    });
  } catch (error) {}
};

export const orderController = {
  createOrder,
  getAllOrder,
};
