import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";
import { blogPosts } from "./blog/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "about-us",
    "blog",
    "contact-us",
    "privacy-policy",
    "disclaimer",
  ];

  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route ? "/" + route : ""}`,
      lastModified,
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1.0 : 0.8,
    })),
    // Add blog posts dynamically
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
  ];

  return routes as MetadataRoute.Sitemap;
}
