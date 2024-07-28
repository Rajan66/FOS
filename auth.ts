import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import type { LoginResponseData } from "@/lib/definitions";
import { PostRequest } from "./lib/axios/server/axios";
import Google from "next-auth/providers/google";

async function loginWithEmailAndPassword(
  email: string,
  password: string
): Promise<LoginResponseData | undefined> {
  try {
    const res = await PostRequest(`/api/login`, { email, password }, {});
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

async function loginWithGoogle(
  idToken: string | undefined
): Promise<LoginResponseData | undefined> {
  try {
    const res = await PostRequest("/api/login/google", { idToken }, {});
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  trustHost: true,
  basePath: "/api/auth",
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) throw new Error("Invalid Credentials");
        const { email, password } = parsedCredentials.data;

        const res = await loginWithEmailAndPassword(email, password);

        if (!res) {
          throw new Error("Invaid Credentials");
        }

        const UserData = {
          id: res.user.id.toString(),
          access_token: res.token,
          name: `${res.user.name}`,
          email: res.user.email,
          role: res.user.role,
        };
        return UserData;
      },
    }),
    // Google({
    //   profile: async (profile, tokens) => {
    //     const idToken = tokens.id_token;

    //     const res = await loginWithGoogle(idToken);

    //     if (!res) {
    //       throw new Error("Invaid Credentials");
    //     }

    //     const UserData = {
    //       id: res.user.id,
    //       access_token: res.token,
    //       name: `${res.user.name}`,
    //       email: res.user.email,
    //       role: res.user.role,
    //     };

    //     return UserData;
    //   },
    // }),
  ],
});
