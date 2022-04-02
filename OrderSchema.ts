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
  paymentInfo: PaymentInfo;
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
  qty: number;
  imageUrl: string;
  metadata: ProductMetaData;
};

export type ProductMetaData = {
  description: string;
  id: string;
  size?: string;
  color?: string;
};

export type PaymentInfo =
  | {
      type: "card";
      expMonth: number;
      expYear: number;
      last4: string;
      walletType?: string | null;
    }
  | {
      type: "klarna";
    };
