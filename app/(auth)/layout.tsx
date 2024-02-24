export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <main className="w-full p-4">
                {children}
            </main>
        </div>
    );
}
