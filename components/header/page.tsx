import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="fixed z-10 top-0 w-full animate__animated animate__fadeInDown bg-red-900" id="top">
            <div className="flex justify-between py-4 text-red-50 items-center w-[96%] lg:w-[96%] m-auto">
                <div className="left flex w-fit cursor-pointer space-x-2">
                    <Image
                        src="/logo.png"
                        height={36}
                        width={36}
                        alt="Royal dry fruit point logo"
                        className="bg-red-50 rounded-full"
                    />
                    <div className="flex flex-col justify-around">
                        <p className="leading-none text-xl font-bold">Royal</p>
                        <p className="text-base font-semibold leading-none">
                            Dry Fruit Point
                        </p>
                    </div>
                </div>
                <div className="center max-md:hidden space-x-1">
                    <Link
                        href="#contact-form"
                        className="nav-buttons hover:bg-red-800"
                    >
                        About us
                    </Link>
                    <Link
                        href="#contact-form"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Products
                    </Link>
                    <Link
                        href="#contact-form"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Locate us
                    </Link>
                    <Link
                        href="#contact-form"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Contact
                    </Link>
                </div>
                <div className="right">
                    <Link
                        href="#contact-form"
                        className="nav-buttons hover:bg-red-800"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}
