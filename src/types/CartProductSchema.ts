import { any, number, object, z } from "zod";
import { ProductSchema } from "./ProductSchema";

export const CartProductSchema = object({
    cartProduct: ProductSchema,
    qty: number(),
    variants: any()
})



export type CartProductSchema = z.infer<typeof CartProductSchema>