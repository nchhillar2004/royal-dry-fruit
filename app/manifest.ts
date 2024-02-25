import { MetadataRoute } from "next";
import SiteConfig from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${SiteConfig.title}`,
        short_name: `${SiteConfig.shortTitle}`,
        description: `${SiteConfig.description}`,
        start_url: `${SiteConfig.url}`,
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
