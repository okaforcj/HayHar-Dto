import ProductVariant from "./productVariants";

type ProductSchema = {
    id: string
    name: string;
    price: number;
    description: string;
    photos: Photo[];
    size?: number;
    backImg?: string;
    salePercentage?: number;
    color?: string;
    noOfReviews?: number;
    averageRating?: number;
    variants?: ProductVariant[];
}

export type Photo = {
    url: string,
    size?: {
        width: string,
        height: string,
    }
}

export default ProductSchema;