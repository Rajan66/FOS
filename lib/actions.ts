"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import { TLogin } from "@/schemas/authSchema";

export async function authenticate(formData: TLogin) {
  try {
    const data = await signIn("credentials", { ...formData });
    return data;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          console.log(error)
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function logoutUser() {
  try {
    const data = await signOut();
    return data;
  } catch (error) {
    return "Something went wrong.";
  }
}