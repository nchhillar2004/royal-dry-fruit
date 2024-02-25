"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status: sessionStatus }: any = useSession();

    if (sessionStatus === "loading"){
        return(<div>loading...</div>)
    }
    if (!session?.user?.isAdmin) {
        return(<div><h1>Access denied!</h1><br /><Link href='/' className="link">Go back</Link></div>)
    }
    return (
        <div>
            <p>Admin layout</p>
            <main className="w-full px-4 py-4 lg:py-5 lg:px-6">{children}</main>
        </div>
    );
}
