import { z } from "zod";

export const ReviewSchema = z.object({
    title: z.string(),
    description: z.string(),
    rating: z.number(),
    emailAddress: z.string().email(),
    createdTime: z.date(),
    productId: z.string(),
    reviewee: z.string(),
    uid: z.string(),
    photos: z.string().array().optional()
})

export type ReviewSchemaDto = z.infer<typeof ReviewSchema>

