import ProductSchema from "./productSchema";
// import {Variants} from "framer-motion";

type CartProductSchema = {
    cartProduct: ProductSchema
    qty: number
    variants?: any
}

export default CartProductSchema;