import Crendentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Crendentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);
            if (!validatedFields.success) return null;
            const { email, password } = validatedFields.data;
            const user = await getUserByEmail(email);
            if (!user || !user.password) return null;
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) return null;
            return user;
        },
    })
  ],
} satisfies NextAuthConfig