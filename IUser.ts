import z from "zod";

export const UserRegSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
});
// extract the inferred type
export type UserReg = z.infer<typeof UserRegSchema>;

export const AddressTypeSchema = z.object({
  address: z.any(),
  preferred: z.boolean(),
  id: z.string(),
});

export const IUserSchema = UserRegSchema.merge(
  z.object({
    _id: z.string().nonempty(),
    dob: z.string().optional(),
    addresses: AddressTypeSchema.optional(),
    stripeId: z.string().optional(),
    orderedProducts: z.array(z.string()).optional(),
    wishlist: z.array(z.string()).optional(),
    photoUrl: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
).omit({ password: true });

export type IUser = z.infer<typeof IUserSchema>;

export type AddressType = {
  address: any;
  preferred: boolean;
  id: string;
};
