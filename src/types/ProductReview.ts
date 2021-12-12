import { number, object, z } from "zod";
import { ReviewSchema } from "./ReviewSchema";



export const ProductReviewSchema = object({
    noOfReviews: number(),
    totalRating: number(),
    reviewSnapshot: ReviewSchema
})

export type ProductReview =  z.infer<typeof ProductReviewSchema>