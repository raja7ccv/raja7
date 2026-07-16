import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://raja7.live";

  const staticRoutes = [
    "",
    "about-us",
    "blog",
    "contact-us",
    "privacy-policy",
    "disclaimer",
  ];

  const routes = [
    ...staticRoutes.map((p) => ({
      url: `${base}/${p}`.replace(/\/$/, ""),
      lastModified: new Date(),
    })),
    // Add blog posts dynamically
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.id}`,
      lastModified: new Date(post.date),
    })),
  ];

  return routes as MetadataRoute.Sitemap;
}
