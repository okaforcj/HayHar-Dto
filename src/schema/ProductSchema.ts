import { number, string, z } from "zod";
import { ProductVariantSchema } from "..";



export const PhotoSchema= z.object({
  url: z.string(),
  size: z.object({
    width: z.number(),
    height: z.number(),
  }),
});

export type Photo = z.infer<typeof PhotoSchema>

export const ProductSchema = z.object({
  id: string(),
  name: string(),
  price: number(),
  description: string(),
  photos: PhotoSchema,
  size: number().optional(),
  backImg: string().optional(),
  salePercentage: number().optional(),
  color: string().optional(),
  variants: ProductVariantSchema,
});


export type ProductSchemaDto = z.infer<typeof ProductSchema>
