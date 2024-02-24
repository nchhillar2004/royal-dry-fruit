import Header from "@/components/header/Header";
import SiteConfig from "@/config/site";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="__next w-full h-full">
            <Header />
            <div className="header pt-[64px] bg-red-900 h-[100vh] w-full">
                <div className="flex w-[96%] items-center max-md:flex-col justify-around h-full m-auto animate__animated animate__fadeInUp">
                    <div className="intro text-red-50 max-md:w-full w-2/5 max-md:text-center">
                        <h1>{SiteConfig.title}</h1>
                        <p className="h-fit mb-4">{SiteConfig.description}</p>
                        <Link
                            href="/products"
                            className="bg-red-100 text-red-800 py-4 px-6"
                        >
                            Explore{" "}
                        </Link>
                    </div>
                    <div className="banner max-md:w-full w-2/5 flex items-center justify-center">
                        <Image
                            src="/photo.jpg"
                            width={250}
                            height={250}
                            alt="Dry fruits"
                        />
                    </div>
                </div>
            </div>
            <main className="h-full py-6 space-y-4">
                <div className="card">
                    <div className="flex items-center justify-between">
                        <h1>Products</h1>
                        <Link href="/products" className="link">
                            All products
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <h1>Products</h1>
                </div>
                <div className="card">
                    <h1>Videos</h1>
                </div>
                <div className="card">
                    <h1>Products</h1>
                </div>
                <div className="card">
                    <h1>Contact</h1>
                </div>
            </main>
            <Footer />
        </div>
    );
}
