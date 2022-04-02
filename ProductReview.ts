import { z } from "zod";

export const ProductAggSchema = z.object({
  noOfReviews: z.number().default(0),
  totalRating: z.number().default(0),
  reviewAggregation: z
    .object({
      1: z.number().default(0),
      2: z.number().default(0),
      3: z.number().default(0),
      4: z.number().default(0),
      5: z.number().default(0),
    })
    .default({}),
});

export type ProductAgg = z.infer<typeof ProductAggSchema>;
