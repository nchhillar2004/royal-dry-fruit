import { MetadataRoute } from "next";
import SiteConfig from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${SiteConfig.url}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SiteConfig.url}/login`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${SiteConfig.url}/signup`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${SiteConfig.url}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
    ];
}
