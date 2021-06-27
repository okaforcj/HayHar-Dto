import ProductVariant from "./productVariants";

type ProductSchema = {
    id: string
    name: string;
    price: number;
    description: string;
    photos: string[];
    size?: number;
    backImg?: string;
    salePercentage?: number;
    color?: string;
    noOfReviews?: number;
    averageRating?: number;
    variants?: ProductVariant[];
}

export default ProductSchema;