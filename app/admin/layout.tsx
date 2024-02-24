export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <p>Admin layout</p>
            <main className="w-full px-4 py-4 lg:py-5 lg:px-6">
                {children}
            </main>
        </div>
    );
}
