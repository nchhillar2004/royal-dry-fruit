import SiteConfig from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-red-900">
            <Link href="#top">
                <div className="top bg-red-800 border-y py-2 text-red-50 cursor-pointer h-fit border-red-950 text-center hover:bg-red-700">
                    Back to top
                </div>
            </Link>

            <div className="footer-nav">
                <div className="flex w-[96%] justify-between py-10 items-start text-red-50 m-auto flex-wrap">
                    <nav className="max-md:hidden">
                        <h4>Get to know us</h4>
                        <ul>
                            <li>
                                <Link href="/">About us</Link>
                            </li>
                            <li>
                                <Link href="/">Owner</Link>
                            </li>
                            <li>
                                <Link href="/">Manager</Link>
                            </li>
                            <li>
                                <Link href="/">Developer</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h4>Important links</h4>
                        <ul>
                            <li>
                                <Link href="/">Products</Link>
                            </li>
                            <li>
                                <Link href="/">Services</Link>
                            </li>
                            <li>
                                <Link href="/">Terms</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy</Link>
                            </li>
                            <li>
                                <Link href="/">Locate us</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className="max-md:hidden">
                        <h4>Help & contact</h4>
                        <ul>
                            <li>
                                <Link href="/">Contact us</Link>
                            </li>
                            <li>
                                <Link href="/">Help & support</Link>
                            </li>
                            <li>
                                <Link href="/">Report</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <h4>Social links</h4>
                        <ul>
                            <li>
                                <Link href="/">Youtube</Link>
                            </li>
                            <li>
                                <Link href="/">Instagram</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook</Link>
                            </li>
                            <li>
                                <Link href="/">Twitter</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="logo py-5 flex bg-red-950 items-center justify-center border-y border-t-red-950 border-b-red-900">
                <Link
                    href={SiteConfig.url}
                    className="div flex space-x-2 h-fit items-center"
                >
                    <Image
                        src="/logo.png"
                        width={44}
                        height={44}
                        alt="Royal dry fruit point"
                        className="bg-red-50 rounded-full"
                    />

                    <p className="text-red-50 h-full font-bold text-xl">
                        {SiteConfig.title}
                    </p>
                </Link>
            </div>
            <div className="flex items-center justify-center py-2 bg-red-950">
                <p className="text-[12px] max-md:text-[11px] text-neutral-300">
                    Copyright &copy; 2024, {SiteConfig.title}. All rights
                    reserved
                </p>
            </div>
        </footer>
    );
}
