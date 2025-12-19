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

export const taskSchema = z.object({
  title: z.string().min(3, "Title min 3 char").max(60, "Title max 60 char"),
  description: z
    .string()
    .min(3, "Description min 3 char")
    .max(160, "Description max 160 char"),
  status: z.enum(["TODO", "IN_PROGRESS", "DONE"]).optional(),
  deadline: z.string().min(1, "Deadline required"),
});
