import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().trim().min(1, { message: "field required" }),
  username: z.string().trim().min(1, { message: "field required" }),
  email: z.string().trim().min(1, { message: "field required" }).email(),
  password: z
    .string()
    .min(3, { message: "Password must contain at least 3 character(s)" })
    .max(20),
});

export const SignInSchema = z.object({
  email: z.string().trim().min(1, { message: "field required" }).email(),
  password: z
    .string()
    .min(3, { message: "Password must contain at least 3 character(s)" })
    .max(20),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;
