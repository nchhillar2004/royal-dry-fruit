"use client";
import React from "react";
import { time } from "@/utils/getTime";
import Image from "next/image";
import Link from "next/link";
import SiteConfig from "@/config/site";

export default function RegisterPage() {
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
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
                    <div className="auth-card bg-white border border-zinc-200 rounded-md w-[350px] py-5 px-7 m-auto">
                        <h1 className="font-normal text-[28px] leading-[1.2rem] mb-3">
                            Create account
                        </h1>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-3 mt-1"
                        >
                            <div className="auth">
                                <label htmlFor="name">Full name</label>
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div className="auth">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="auth">
                                <label htmlFor="password">
                                    Create password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Atleast 6 characters"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-red-600 mt-1 rounded-md border-none w-full text-white py-3 font-medium hover:bg-red-700"
                            >
                                Register
                            </button>
                            <p className="text-[14px]">
                                By creating an account, you agree to{" "}
                                {SiteConfig.shortTitle}&apos;s 
                                <Link href="/terms" className="ml-1 link">
                                    Terms and Conditions
                                </Link>
                                .
                            </p>
                        </form>
                        <hr className="my-5"/>
                        <div className="flex">
                            <p>Already have an account?</p>
                            <Link href="/login" className="ml-1 link">
                                Login &#10148;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
