import { date, object, string, z } from "zod";
import { CartProductSchema } from "./CartProductSchema";

export const OrderSchema = object({
  order: CartProductSchema,
  createdTime: date(),
  orderId: string(),
  progressMessage: string(),
  edd: date(), // Estimated Delivery Date
  deliveryDate: date().optional(),
});

export type OrderSchemaDto = z.infer<typeof OrderSchema>