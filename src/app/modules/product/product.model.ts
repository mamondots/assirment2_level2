import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const VariantSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [{ type: String, required: true }],
  variants: [VariantSchema],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
});

export const productModel = model<Product>('Product', productSchema);
