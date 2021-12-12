export type ZodError = {
    code: string,
    minimum: number,
    type: string,
    message: string,
    path: string[]
  }