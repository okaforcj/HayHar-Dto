// firebase.firestore.FieldValue

type ReviewSchema = {
    title: string,
    description: string,
    rating: number,
    emailAddress: string,
    createdTime: any,
    productId: string,
    reviewee: string,
    uid: string,
    photos?: string[]
}

export default ReviewSchema