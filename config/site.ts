const isProduction = process.env.NODE_ENV === "production";

const SiteConfig = {
    title: "Royal dry fruit point",
    shortTitle: "RDF",
    description:
        "Find the best dry fruits at Royal Dry Fruit Point in Kharkhoda, Jhajjar, Haryana, India. Enjoy premium quality at unbeatable prices, making your snacking experience truly delightful.",
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
    location: "https://maps.app.goo.gl/jN5XkFMBb3mTBtfF8",
};

export default SiteConfig;