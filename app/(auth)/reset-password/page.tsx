"use client"

import InputBox from '@/components/InputBox';
import { Button } from '@/components/ui/button';
import { TNewPassword, TResetPassword, newPasswordSchema, resetPasswordSchema } from '@/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Loader2, LockKeyhole } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const page = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TNewPassword>({
        resolver: zodResolver(newPasswordSchema),
    });


    const onSubmit = async (data: TNewPassword) => {
        setLoading(true);

    };


    return (
        <section className="w-full flex items-center justify-center mt-24">
            <form
                className="w-full flex flex-col gap-y-8 bg-gray-50 justify-center items-center max-w-sm rounded-lg p-10 border border-input"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center border-black border-2">
                    <LockKeyhole className="text-black w-8 h-8" />
                </div>
                <div className='flex flex-col gap-y-4 justify-center items-center'>
                    <h2 className='text-lg '>Reset your password</h2>
                    {/* <p className='text-clip text-sm opacity-80 px-2'>Enter your email and we'll send you a link <br /><span className='flex justify-center'>to get back into your account.</span></p> */}
                </div>
                <InputBox<TNewPassword>
                    className="w-64"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    register={register}
                    error={(errors && errors?.password?.message?.toString()) || ""}
                />

                <InputBox<TNewPassword>
                    className="w-64"
                    name="confirm_password"
                    id="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    register={register}
                    error={(errors && errors?.confirm_password?.message?.toString()) || ""}
                />
                <Button type="submit" className="px-5 py-2.5 my-auto text-[16px] w-[200px] h-[40px] font-medium text-white rounded-md  border-r-0 ">
                    {loading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="size-5 animate-spin" />
                            <p>Submitting...</p>
                        </div>
                    ) : (
                        "Update Password"
                    )}
                </Button>
            </form>
        </section>
    )
}

export default page