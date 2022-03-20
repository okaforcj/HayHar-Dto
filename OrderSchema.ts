import { CartProduct } from "./CartProductSchema";

export type OrderSchema = {
  order: CartProduct[];
  createdTime: any;
  orderId: string;
  progressMessage: string;
  edd?: Date; // Estimated Delivery Date
  deliveryDate?: Date;
};
