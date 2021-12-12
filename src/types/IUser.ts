import { object, string, z } from "zod";

export type IUser = {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
  dob?: string;
  addresses?: AddressType[];
  stripeId?: string;
  orderedProducts?: String[];
  wishlist?: string[];
  photoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};

export const UserRegSchema = object({
  firstName: string(),
  lastName: string(),
  email: string(),
  password: string()
});

export type UserRegDto= z.infer<typeof UserRegSchema>

export type AddressType = {
  address: any;
  preferred: boolean;
  id: string;
};
