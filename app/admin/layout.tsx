"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Loading from "@/components/common/loading";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status: sessionStatus }: any = useSession();

    if (sessionStatus === "loading") {
        return <Loading/>;
    }
    if (!session?.user?.isAdmin) {
        return (
            <div>
                <h1>Access denied!</h1>
                <br />
                <Link href="/" className="link">
                    Go back
                </Link>
            </div>
        );
    }
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/admin">
                        <div className="text-white">Admin Dashboard</div>
                    </Link>
                    <div className="flex items-center">
                        <Link href="/" className="text-white mr-4">
                            Home
                        </Link>
                        <button
                            className="text-white"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <main className="bg-gray-100 font-sans leading-normal tracking-normal">
                {children}
            </main>
            <footer className="bg-gray-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    &copy; 2024 Admin Dashboard. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
