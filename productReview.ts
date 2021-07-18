import ReviewSchema from "./reviewSchema";

type ProductReview = {
    noOfReviews: number;
    totalRating: number;
    reviewSnapshot: ReviewSchema[]
}

export default ProductReview