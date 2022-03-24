import { z } from "zod";

//just testing
export const ColorSchema = z.object({
  _id: z.string(),
  name: z.string(),
  bgColor: z.string(),
});
export type ProductColor = z.infer<typeof ColorSchema>;

export const SizeSchema = z.object({
  _id: z.string(),
  type: z.string(),
  sizes: z.array(z.string()),
});
export type Size = z.infer<typeof SizeSchema>;

export const ProductImageSchema = z.object({
  path: z.string(),
  url: z.string(),
  alt: z.string(),
});
export type ProductImage = z.infer<typeof ProductImageSchema>;
export type ProductDetail = {
  name: string;
  items: string[];
};

const zodDate = z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date());
export const ProductRegSchema = z.object({
  name: z.string().nonempty(),
  price: z.number().gt(0),
  images: z.array(ProductImageSchema),
  colors: z.array(ColorSchema),
  description: z.string().nonempty(),
  category: z.string().nonempty(),
  sizes: z.array(z.string()),
  details: z.array(z.string().nonempty()),
  _id: z.string().min(1).optional(),
  createdAt: zodDate.optional(),
});

export const ProductSchema = ProductRegSchema.merge(
  z.object({
    _id: z.string().min(1),
    createdAt: zodDate,
    modifiedAt: zodDate,
  })
);
export const ExistingProductSchema = ProductRegSchema.merge(ProductSchema).omit(
  { _id: true, createdAt: true }
);
export type ProductReg = z.infer<typeof ProductRegSchema>;
export type Product = z.infer<typeof ProductSchema>;
export type ExistingProduct = z.infer<typeof ExistingProductSchema>;
