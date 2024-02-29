import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header/>
            <main className="min-h-[70vh] pt-[62px] w-[96%] m-auto pb-10">{children}</main>
            <Footer/>
        </div>
    );
}
