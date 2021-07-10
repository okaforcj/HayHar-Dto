import "stripe-v3"
import ShippingDetailsAddress = stripe.ShippingDetailsAddress;

type LandedUser = {
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
}

export type AddressType = {
   address: ShippingDetailsAddress,
   preferred: boolean
   id: string;
}

export default LandedUser;