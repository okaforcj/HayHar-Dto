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
        width: number,
        height: number,
    }
}

export default ProductSchema;