import { CartProductSchema } from "./CartProductSchema";

export type OrderSchema = {
    order: CartProductSchema[];
    createdTime: any;
    orderId: string,
    progressMessage: string,
    edd?: Date, // Estimated Delivery Date
    deliveryDate?: Date,
}
