"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SiteConfig from "@/config/site";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function Header() {
    const { data: session, status: sessionStatus } = useSession();
    var isLoading = false;
    if (sessionStatus === "loading") {
        isLoading = true;
    }
    return (
        <header
            className="fixed z-10 top-0 w-full animate__animated animate__fadeInDown bg-red-900"
            id="top"
        >
            <div className="flex justify-between py-4 text-red-50 items-center w-[96%] lg:w-[96%] m-auto">
                <div className="left flex w-fit cursor-pointer space-x-2">
                    <div className="lg:hidden">{/* <MenuSidebar/> */}</div>
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            height={36}
                            width={36}
                            alt="Royal dry fruit point logo"
                            className="bg-red-50 rounded-full"
                        />
                    </Link>
                    <div className="flex flex-col justify-around">
                        <p className="leading-none text-xl font-bold">Royal</p>
                        <p className="text-base font-semibold leading-none text-nowrap">
                            Dry Fruit Point
                        </p>
                    </div>
                </div>
                <div className="center max-lg:hidden space-x-1">
                    <Link
                        href="/about"
                        className="nav-buttons hover:bg-red-800"
                    >
                        About us
                    </Link>
                    <Link
                        href="/products"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Products
                    </Link>
                    <Link
                        href={SiteConfig.location}
                        className="nav-buttons hover:bg-red-800"
                        target="_blank"
                    >
                        Locate us
                    </Link>
                    <Link
                        href="/contact"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Contact
                    </Link>
                    <Link href="/help" className="nav-buttons hover:bg-red-800">
                        Help
                    </Link>
                </div>
                <div className="right">
                    {isLoading ? (
                        <div className="flex">loading...</div>
                    ) : (
                        <div className="flex">
                            {session ? (
                                <div className="profile space-x-2 flex items-center">
                                    <Image src={`${session?.user?.image}`} height={24} width={24} alt={`${session?.user?.name}`} />
                                    <p className="max-md:hidden">
                                        {session.user?.name}
                                    </p>
                                    <button
                                        className="hover:bg-red-800 py-2 px-4 rounded-[24px]"
                                        onClick={() => {
                                            signOut();
                                            toast.success("Signed out");
                                        }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/login"
                                    className="nav-buttons hover:bg-red-800"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
