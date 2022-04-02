import { z } from "zod";
import { zodDate } from "./util";

export const ReviewRegSchema = z.object({
  title: z.string(),
  displayName: z.string(),
  description: z.string(),
  rating: z.number().gt(0).lte(5),
  productId: z.string(),
  photos: z.array(z.string()).optional(),
});

export const ReviewSchema = ReviewRegSchema.merge(
  z.object({
    reviewerId: z.string(),
    _id: z.string(),
    createdAt: zodDate,
    updatedAt: zodDate,
  })
);

export type Review = z.infer<typeof ReviewSchema>;
export type ReviewReg = z.infer<typeof ReviewRegSchema>;
