import { CartProduct } from "./CartProductSchema";

export type OrderSchema = {
  order: CartProduct[];
  createdTime: Date;
  orderId: string;
  progressMessage: string;
  estimatedDeliveryDate: Date; // Estimated Delivery Date
  trackingNo?: string
  deliveryDate?: Date;
};
