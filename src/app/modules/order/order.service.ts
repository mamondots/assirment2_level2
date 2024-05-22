import { productModel } from '../product/product.model';
import { Order } from './order.interface';
import { orderModel } from './order.model';

const createOrder = async (order: Order) => {
  const { productId, quantity } = order;
  const product = await productModel.findById(productId);
  if (!product) {
    return {
      success: false,
      message: 'Order not found',
    };
  }

  if (product.inventory.quantity < quantity) {
    return {
      success: false,
      message: 'Insufficient quantity available in inventory',
    };
  }

  // Decrement the product quantity
  product.inventory.quantity -= quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  // Update product and order data
  // const updatedProduct = await productModel.findByIdAndUpdate(
  //   productId,
  //   product,
  //   { new: true },
  // );
  const newOrder = await orderModel.create(order);
  return { order: newOrder };
};

const getAllOrder = async (email: string) => {
  if (email) {
    const result = await orderModel.find({ email });
    return result;
  } else {
    const result = await orderModel.find();
    return result;
  }
};

export const orderService = {
  createOrder,
  getAllOrder,
};
