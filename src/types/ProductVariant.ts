import { number, object, string, z } from "zod"

export const ProductVariantSchema = object({
    id: string(),
    name: string(), 
    colour: string().optional(),
    price: number(),
    size: string(),
    mainImg: string(),
    prodImgs: string().array().optional()
})




export type ProductVariant= z.infer<typeof ProductVariantSchema>