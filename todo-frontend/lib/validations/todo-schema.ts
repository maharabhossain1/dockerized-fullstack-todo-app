import { z } from "zod";

export const todoSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "Title must be at least 50 characters.",
    }),
    completed: z.boolean(),
});
export type TodoSchemaType = z.infer<typeof todoSchema>;
