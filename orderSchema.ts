import CartProductSchema from "./cartProductSchema";
// firebase.firestore.FieldValue

type OrderSchema = {
    order: CartProductSchema[];
    createdTime: any;
    orderId: string,
    progressMessage: string,
    edd?: Date,
    deliveryDate?: Date,
}

export default OrderSchema;