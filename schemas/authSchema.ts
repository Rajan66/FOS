import { z } from "zod";

export const registerSchema = z
  .object({
    firstname: z
      .string({ required_error: "First Name is required" })
      .min(1, { message: "First Name is required" }),
    lastname: z
      .string({ required_error: "Last Name is required" })
      .min(1, { message: "Last Name is required" }),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" })
      .min(8, { message: "Passwod of 8 characters required" }),
    confirm_password: z
      .string({ required_error: "Confirm Password is required" })
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords doesn't match",
    path: ["confirm_password"],
  });

export type TRegister = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, { message: "Email is required" })
    .email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password is required" }),
});

export type TLogin = z.infer<typeof loginSchema>;