import "stripe-v3"
import ShippingDetailsAddress = stripe.ShippingDetailsAddress;

type LandedUser = {
   firstName: string;
   lastName: string;
   email: string;
   uid: string;
   dob?: string;
   addresses?: AddressType;
   stripeId?: string;
   orderedProducts?: String[];
   wishlist?: string[]
   photoUrl?: string;
}

type AddressType = {
   preferredAddress: ShippingDetailsAddress
   otherAddresses: ShippingDetailsAddress[]
}

export default LandedUser;