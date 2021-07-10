import "stripe-v3"
import ShippingDetailsAddress = stripe.ShippingDetailsAddress;

type LandedUser = {
   firstName: string;
   lastName: string;
   email: string;
   uid: string;
   dob?: string;
   addresses?: Map<ShippingDetailsAddress, boolean>;
   stripeId?: string;
   orderedProducts?: String[];
   wishlist?: string[]
   photoUrl?: string;
}

export default LandedUser;