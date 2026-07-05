import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/contact/thank-you", "/quote/thank-you"],
    },
    sitemap: "https://valits.com/sitemap.xml",
  };
}
