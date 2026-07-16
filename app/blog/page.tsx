import BlogController from "./blogController.controller";
import { blogPosts } from "./data";

export const metadata = {
  title: "Raja7 Blog — Guides, Tips & Updates",
  description:
    "Read the Raja7 blog for guides, tips, and latest updates about the app and platform.",
  alternates: {
    canonical: "https://raja7.live/blog",
  },
  openGraph: {
    title: "Raja7 Blog — Guides, Tips & Updates",
    description:
      "Read the Raja7 blog for guides, tips, and latest updates about the app and platform.",
    url: "https://raja7.live/blog",
    images: blogPosts
      .slice(0, 1)
      .map((p) => ({ url: `https://raja7.live${p.image}` })),
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja7 Blog — Guides, Tips & Updates",
    description:
      "Read the Raja7 blog for guides, tips, and latest updates about the app and platform.",
    images: blogPosts.slice(0, 1).map((p) => `https://raja7.live${p.image}`),
  },
};

const BlogPage = () => {
  return <BlogController />;
};

export default BlogPage;
