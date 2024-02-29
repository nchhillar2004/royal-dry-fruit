import React from "react";
import Link from "next/link";
import PagesLayout from "./(pages)/layout";

export default function NotFound() {
    return (
        <PagesLayout>
            <div className="flex h-full flex-col items-center justify-center">
                <h1>Page not found</h1>
                <Link href="/">Go Back</Link>
            </div>
        </PagesLayout>
    );
}
