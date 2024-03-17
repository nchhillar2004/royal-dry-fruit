"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { time } from "@/utils/getTime";
import Loading from "@/components/common/Loading";
import Link from "next/link";

export default function ContactForm() {
    const router = useRouter();
    const { data: session, status: sessionStatus }: any = useSession();

    const handlePost = async (e: any) => {
        e.preventDefault();
        const title = e.target[0].value;
        const body = e.target[1].value;
        const type = e.target[2].value;

        if (!title || !body) {
            toast.error("Fill all fields");
        }
        try {
            const authorId = session.user?.id;
            const authorEmail = session.user?.email;

            const res = await fetch("/api/post/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    body,
                    type,
                    authorEmail,
                    authorId,
                    time,
                }),
            });
            if (res.status === 200) {
                toast.success("Mail sent successfully");
                router.push("/");
            }
        } catch (error) {
            console.log("Error while sending mail");
        }
    };
    if (sessionStatus === "loading") {
        return <Loading />;
    }

    return (
        <>
            {session ? (
                <div className="">
                    <h1 className="lg:text-4xl text-3xl my-4">Contact form</h1>
                    <div className="card w-full">
                        <form onSubmit={handlePost} className="inputfld">
                            <label htmlFor="title">Mail title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Mail title"
                                required
                            />
                            <label htmlFor="content">Mail Content</label>
                            <textarea
                                className="min-h-[150px]"
                                id="content"
                                name="content"
                                placeholder="Content..."
                                required
                            />
                            <label htmlFor="type">Mail type</label>
                            <br />
                            <div className="relative inline-block">
                                <select
                                    name="type"
                                    id="type"
                                    required
                                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                                >
                                    <option value="Contact">
                                        Contact/ Inquiery
                                    </option>
                                    <option value="Report">
                                        Report/ Feedback
                                    </option>
                                    <option value="Help">Help & Support</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 12.183l-6.65-6.65a1 1 0 0 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 1 0-1.414-1.414L10 12.183z" />
                                    </svg>
                                </div>
                            </div>
                            <br />
                            <button
                                type="submit"
                                className="bg-red-700 mt-4 hover:bg-red-800 py-2 px-4 rounded-md text-white"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="main h-full flex flex-col items-center justify-center">
                    <h1>Login to send mail</h1>
                    <Link href="/login" className="link">Login</Link>
                </div>
            )}
        </>
    );
}
