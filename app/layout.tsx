import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SiteConfig from "@/config/site";
import 'animate.css';

const font = Roboto({
    weight: ["100", "300", "400", "500", "700", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: SiteConfig.title,
    metadataBase: new URL(SiteConfig.url),
    description: SiteConfig.description,
    keywords: [
        "Royal dry fruit point",
        "Best dry fruits shop in Kharkhoda",
        "Kharkhoda village",
        "Royal dry fruits",
        "Dry fruit shop",
        "Bahadurgarh",
        "Jhajjar dry fruits"
    ],
    authors: [
        {
            name: "Nishant Chhillar",
            url: "https://nishantchhillar.tech",
        },
    ],
    creator: "Nishant Chhillar",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SiteConfig.url,
        title: SiteConfig.title,
        description: SiteConfig.description,
        siteName: SiteConfig.title,
        images: [
            {
                url: SiteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: SiteConfig.title,
            },
        ],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.jpg",
    },
    manifest: `${SiteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
