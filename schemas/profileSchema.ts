import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .min(1, { message: "First Name is required" }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .min(1, { message: "Last Name is required" }),
  email: z
    .string({ required_error: "Last Name is required" })
    .min(1, { message: "Last Name is required" }),
  contact: z.string().optional(),
  createdAt: z.string().optional()
});

export type TUser = z.infer<typeof userSchema>;

export const changePassSchema = z.object({
  password: z
    .string({ required_error: "Required ***" })
    .min(1, { message: "Required ***" })
    .min(8, { message: "Passwod of 8 characters required" }),
  current_password: z
    .string({ required_error: "Required ***" })
    .min(1, { message: "Required ***" }),
});

export type TChangePass = z.infer<typeof changePassSchema>;
