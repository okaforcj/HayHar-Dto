import { ProductSchema } from "./ProductSchema";

export type CartProductSchema = {
    cartProduct: ProductSchema
    qty: number
    variants?: any
}