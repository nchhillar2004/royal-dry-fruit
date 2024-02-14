const isProduction = process.env.NODE_ENV === "production";

const SiteConfig = {
    title: "Royal dry fruit point",
    shortTitle: "RDF",
    description:
        "",
    url: isProduction
        ? "https://app.nishantchhillar.tech"
        : "http://localhost:3000",
    ogImage: "https://app.nishantchhillar.tech/og.jpg",
    links: {
        github: "https://github.com/nchhillar2004/",
        discord: "https://discord.com/",
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
    },
};

export default SiteConfig;