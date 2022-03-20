import { z } from "zod";
import { ColorSchema, SizeSchema } from "./ProductSchema";

export const CategoryRegSchema = z.object({
  name: z.string().nonempty(),
  imageUrl: z.string().url(),
  description: z.string().nonempty(),
  withColors: z.boolean(),
  sizeId: z.string().nonempty(),
});

export const CategorySchema = CategoryRegSchema.merge(
  z.object({
    _id: z.string(),
  })
);
export const ExpandedCategorySchema = CategorySchema.merge(
  z.object({
    size: SizeSchema,
    colors: z.array(ColorSchema),
  })
);

export type Category = z.infer<typeof CategorySchema>;
export type ExpandedCategory = z.infer<typeof ExpandedCategorySchema>;

export type CategoryReg = z.infer<typeof CategoryRegSchema>;
