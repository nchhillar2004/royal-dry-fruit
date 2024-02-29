"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function ErrorPage() {
    return (
        <>
            <Head>
                <title>RDFP - Error</title>
            </Head>
            <header className="bg-[#555555] py-2">
                <div className="w-[96%] m-auto text-white">
                    <h1>Server Error</h1>
                </div>
            </header>
            <main className="h-full bg-gray-100">
                <div className="bg-white p-[10px] mt-2 w-[96%] m-auto">
                    <div className="border-2 border-gray-800 px-5 py-2">
                        <code className="text-red-600 text-2xl font-semibold">
                        500 Internal Server Error
                        </code>
                        <p className="font-semibold">An unexpected error occured <Link href='/' className="link">Go back</Link>, or try again later.</p>
                    </div>
                </div>
            </main>
        </>
    );
}
