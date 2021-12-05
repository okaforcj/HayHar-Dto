export type IUser = {
   firstName: string;
   lastName: string;
   email: string;
   uid: string;
   dob?: string;
   addresses?: AddressType[];
   stripeId?: string;
   orderedProducts?: String[];
   wishlist?: string[]
   photoUrl?: string;
   createdAt: Date;
   updatedAt: Date;
}

export type AddressType = {
   address: any,
   preferred: boolean
   id: string;
}