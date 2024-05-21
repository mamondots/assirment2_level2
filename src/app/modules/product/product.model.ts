import { Schema, model } from 'mongoose';
import { Product, Variants } from './product.interface';

const variantsSchema = new Schema<Variants>({
  type: { type: String },
  value: { type: String },
});

const productSchema = new Schema<Product>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: [{ type: String }],
  variants: [variantsSchema],
  inventory: {
    quantity: { type: String },
    inStock: { type: String },
  },
});

export const productModel = model<Product>('Product', productSchema);
