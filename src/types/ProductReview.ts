import { ReviewSchema } from "./ReviewSchema";



export type ProductReview = {
    noOfReviews: number;
    totalRating: number;
    reviewSnapshot: ReviewSchema[]
}