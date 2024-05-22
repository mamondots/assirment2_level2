import { Request, Response } from 'express';
import { orderService } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const validationparsedData = orderValidationSchema.parse(orderData);

    const result = await orderService.createOrder(validationparsedData);

    res.status(200).json({
      success: true,
      message: 'order is created successfully',
      data: result.order,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  const email: string = req.query.email as string;
  try {
    const result = await orderService.getAllOrder(email);
    const message = email
      ? `order matching search term '${email}' fetched successfully!`
      : 'getting all order successfully';
    res.status(200).json({
      success: true,
      message: message,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'something wrong here',
      error: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
