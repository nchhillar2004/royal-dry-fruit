"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()} className="py-2 px-4 rounded-md bg-red-700 hover:bg-red-800 text-white pt-1">Try again</button>
            </body>
        </html>
    );
}
