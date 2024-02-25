"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push("/");
    }
    return (
        <div>
            <main className="w-full p-4">{children}</main>
        </div>
    );
}
