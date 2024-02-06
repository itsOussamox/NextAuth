'use server'
import { LoginSchema, RegisterSchema } from '@/schemas';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import {db} from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { signIn } from '@/auth';
import { DefaultLoggedRoute } from '@/routes';
import { AuthError } from 'next-auth';

export const login = async (data : z.infer<typeof LoginSchema>) =>
{
   const validateFields = LoginSchema.safeParse(data);
    if (!validateFields.success) {
        return ({ error: "Email and password are not valid." });
    }
    const { email, password } = validateFields.data;
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo : DefaultLoggedRoute,
        })
    }
    catch (error) {
        if (error instanceof AuthError)
        {
            if (error.type == "CredentialsSignin")
                return ({error: "Invalid Credentials."});
            else
                return ({error: "Something went wrong while loggin..."});
        }
        throw error;
    }
    return { success : "Logged successfully."}
}

export const register = async (data : z.infer<typeof RegisterSchema>) =>
{
    const validateFields = RegisterSchema.safeParse(data);
    if (!validateFields.success) {
        return ({ error: "Email, password and name are not valid." });
    }
    const { email, password, name } = validateFields.data;
    const emailExists = await getUserByEmail(email);
    if (emailExists) return { error: "Email already exists." };
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
        }
    })
    return { success : "Registered successfully."}
}