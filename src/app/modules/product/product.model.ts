import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: [{ type: String }],
  variants: [
    {
      type: { type: String },
      value: { type: String },
    },
  ],
  inventory: {
    quantity: { type: String },
    inStock: { type: String },
  },
});

export const productModel = model<Product>('Product', productSchema);
