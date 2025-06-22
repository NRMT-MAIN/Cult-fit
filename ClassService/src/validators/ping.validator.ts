import z from "zod"

export const pingSchema = z.object({
    message : z.string().min(2).max(50)
})