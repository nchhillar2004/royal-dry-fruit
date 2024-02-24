"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SiteConfig from "@/config/site";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });
            if (res?.status === 401) {
                console.log("user not found");
                
            }
            if (!res?.error) {
                if (res?.url) router.replace("/");
            } else {
                console.log(res?.error);
            }
        } catch (error) {}
    };
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex items-center justify-center mb-5">
                    <Link
                        href="/"
                        className="flex space-x-2 items-center text-lg font-semibold"
                    >
                        <Image
                            src="/logo.png"
                            width={40}
                            height={32}
                            alt={SiteConfig.title}
                        />
                        <p>{SiteConfig.title}</p>
                    </Link>
                </div>
                <div className="form">
                    <div className="auth-card bg-white border border-zinc-200 rounded-md max-md:w-[280px] w-[350px] lg:w-[380px] py-5 px-7 m-auto">
                        <h1 className="font-normal text-[28px] leading-[1.2rem] mb-4">
                            Login
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-3 mt-1"
                        >
                            <div className="auth">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="auth">
                                <label htmlFor="password">Enter password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                className="bg-red-600 mt-1 rounded-md border-none w-full text-white py-3 font-medium hover:bg-red-700"
                                type="submit"
                            >
                                Login
                            </button>
                            <p className="text-[14px]">
                                By continuing, you agree to{" "}
                                {SiteConfig.shortTitle}&apos;s
                                <Link href="/terms" className="ml-1 link">
                                    Terms and Conditions
                                </Link>
                                .
                            </p>

                            <div className="flex">
                                &#10148;<Link href="/help#login" className="ml-1 link">Need help?</Link>
                            </div>
                        </form>
                        <hr className="my-5" />
                        <div className="flex">
                            <p>Create an account?</p>
                            <Link href="/register" className="ml-1 link">
                                Register &#10148;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
