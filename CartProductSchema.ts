import { z } from "zod";
import { ProductSchema } from "./ProductSchema";

export const CartProductSchema = z.object({
  product: ProductSchema,
  qty: z.number(),
});
export type CartProduct = z.infer<typeof CartProductSchema>;
