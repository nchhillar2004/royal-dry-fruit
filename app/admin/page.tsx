"use client";
import { useSession } from "next-auth/react";
import React from "react";

export default function AdminDashboard() {
    const { data: session, status: sessionStatus }: any = useSession();
    if (sessionStatus === "loading") {
        return <div>loading...</div>;
    }
    return (
        <div>
            <h1>Welcome {session.user?.name}</h1>
        </div>
    );
}
