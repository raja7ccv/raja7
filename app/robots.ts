import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // disallow common internal routes
      {
        userAgent: "*",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://raja7.live/sitemap.xml",
    host: "https://raja7.live",
  };
}
