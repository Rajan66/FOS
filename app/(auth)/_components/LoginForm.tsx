"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

import { loginSchema, TLogin } from "@/schemas/authSchema";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { authenticate } from "@/lib/actions";

import { Button } from "@/components/ui/button";
import { AtSign, CircleAlert, KeyRound, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";


const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: TLogin) => {
    setLoading(true);
    try {
      const res = (await authenticate(data)) as any;
      console.log(res)
      if (res === process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL) {
        toast.success("Login Successfull");
        console.log("logged in")
        router.push('/dashboard/vehicles')
      } else {
        setErrorMsg(res);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-5 bg-gray-100 justify-center items-center max-w-sm rounded-md p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl text-black font-bold opacity-80 ">
        Please log in to continue.
      </h1>
      {errorMsg && (
        <div
          className="flex items-center justify-center bg-destructive/20 text-center py-3 rounded-lg gap-x-2 font-semibold"
          aria-live="polite"
          aria-atomic="true"
        >
          <CircleAlert strokeWidth={2} className="size-7 text-red-600" />
          <p className="text-sm text-red-600">{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col gap-y-5  justify-center items-center">
        <div className="relative flex flex-col gap-y-3">
          <Label htmlFor="email" className="opacity-80">Email</Label>
          <div className="relative flex flex-col gap-y-1">
            <Input
              {...register("email")}
              className={cn("pl-10 py-5", {
                "border-primary": errors?.email?.message,
              })}
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <AtSign className="pointer-events-none absolute top-[0.7rem] left-3 size-5 text-gray-500 peer-focus:text-gray-900" />
            {errors?.email?.message && (
              <span className="text-destructive text-xs font-semibold">
                {errors?.email?.message}
              </span>
            )}
          </div>
        </div>

        <div className="relative flex flex-col gap-y-3">
          <Label htmlFor="password" className="opacity-80">Password</Label>
          <div className="relative flex flex-col gap-y-1">
            <Input
              {...register("password")}
              className={cn("pl-10 py-5", {
                "border-primary": errors?.password?.message,
              })}
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
            />
            <KeyRound className="pointer-events-none absolute top-[0.7rem] left-3 size-5 text-gray-500 peer-focus:text-gray-900" />
            {errors?.password?.message && (
              <span className="text-destructive text-xs font-semibold">
                {errors?.password?.message}
              </span>
            )}
          </div>
        </div>
        <Button type="submit" className="px-5 py-2.5 my-auto text-[16px] w-[200px] h-[40px] font-medium text-white uppercase bg-red-500 border-r-0 rounded-sm">
          {loading ? (
            <span className="flex items-center gap-x-2">
              <Loader2 className="size-5 animate-spin" />
              Logging In...{" "}
            </span>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
