import { z } from 'zod';

const VariantSchema = z.object({
  type: z.string().max(20),
  value: z.string().max(20),
});

const ProductValidationSchema = z.object({
  name: z.string().min(1).max(20),
  description: z.string().min(1),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(VariantSchema),
  inventory: z.object({
    quantity: z.number().int().positive(),
    inStock: z.boolean(),
  }),
});

export default ProductValidationSchema;
