const { z } = require('zod');

const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().nonempty(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});
