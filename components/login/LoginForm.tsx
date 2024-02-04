"use client";
import { useForm } from "react-hook-form"
import { zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormLabel, FormField, FormItem, FormMessage}
from "@/components/ui/form"
import * as z from "zod"

import { LoginSchema } from "@/schemas"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useState, useTransition } from "react";
import { login } from "@/actions/login";
import { Progress } from "../ui/progress";
import { FormError, FormSuccess } from "./LoginState";


export default function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const [formError, setFormError] = useState<string | undefined>("");
    const [formSuccess, setFormSuccess] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = (data: z.infer<typeof LoginSchema>) => {
        if (isPending) return;
        startTransition(()=> {
            login(data)
            .then((data) => {
                setFormSuccess(data.success);
                setFormError(data.error);
            })
        })
    }
    return (
        <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6">
                <div className="space-y-4">
                    <FormField control={form.control} name="email" 
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className="bg-white text-black" {...field} type="email" placeholder="Lee.Hwak@gmail.com"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                </div>
                <div className="space-y-4">
                    <FormField control={form.control} name="password" 
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input className="bg-white text-black" {...field} type="password" placeholder="*********"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={formError}/>
                <FormSuccess message={formSuccess}/>
                <Button type="submit" variant="default">Login</Button>
            </form>
        </Form>
        </>

    )
}