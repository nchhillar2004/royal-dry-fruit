import { MetadataRoute } from "next";
import SiteConfig from "@/config/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin",
        },
        sitemap: `${SiteConfig.url}/sitemap.xml`,
    };
}
