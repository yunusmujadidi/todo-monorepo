import z from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const SignUpSchema = z
  .object({
    name: z.string(),
    email: z.email(),
    username: z.string().optional(),
    password: z.string().min(6, "Password min 6 char!."),
    confirmPassword: z.string().min(6, "Password min 6 char!."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password is not same.",
    path: ["confirmPassword"],
  });
