import { z } from "zod";

export const CartProductSchema = z.object({
  name: z.string().nonempty(),
  description: z.string(),
  price: z.number().gt(0),
  size: z.string(),
  color: z.string(),
  id: z.string(),
  image: z.string().url(),
  qty: z.number(),
});
export type CartProduct = z.infer<typeof CartProductSchema>;
