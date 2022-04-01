import Stripe from "stripe";

export type OrderSchema = {
  products: ProductOrder[];
  _id: string;
  totalPrice: number;
  customerId: string;
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
  description: string;
  _id: string;
  qty: number;
  imageUrl: string;
  metadata: { [key: string]: string };
};

//test alias