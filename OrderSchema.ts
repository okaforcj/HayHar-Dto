import Stripe from "stripe";

export type OrderSchema = {
  orders: ProductOrder[];
  _id: string;
  totalPrice: number
  progressMessage: string;
  stripeCustomerId: string;
  trackingNo?: string;
  createdAt: Date;
  updatedAt: Date;
  customerEmail: string;
  shippingDetails: Stripe.Checkout.Session.Shipping;
  shippingRate: {
    name: string;
    price: number;
    deliveryEstimate: Stripe.ShippingRate.DeliveryEstimate | null;
  };
};

export type ProductOrder = {
  name: string;
  price: number;
  stripeId: string;
  _id: string;
  qty: number;
  metadata: { [key: string]: string };
};
