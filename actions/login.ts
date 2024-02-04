'use server'
import { LoginSchema, RegisterSchema } from '@/schemas';
import * as z from 'zod';


export const login = async (data : z.infer<typeof LoginSchema>) =>
{
   const validateFields = LoginSchema.safeParse(data);
    if (!validateFields.success) {
        return ({ error: "Email and password are not valid." });
    }
    return { success : "Logged successfully."}
}

export const register = async (data : z.infer<typeof RegisterSchema>) =>
{
    const validateFields = RegisterSchema.safeParse(data);
    if (!validateFields.success) {
        return ({ error: "Email, password and name are not valid." });
    }
    return { success : "Registered successfully."}
}