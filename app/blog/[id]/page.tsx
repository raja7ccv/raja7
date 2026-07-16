import { blogPosts } from "../data";
import { BlogDetailController } from "./blogDetail.controller";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const post = blogPosts.find((p) => String(p.id) === String(id));

  if (!post) {
    return {
      title: "Post Not Found | Raja7",
      alternates: { canonical: `https://raja7.live/blog/${id}` },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://raja7.live/blog/${post.id}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://raja7.live/blog/${post.id}`,
      images: [{ url: `https://raja7.live${post.image}`, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://raja7.live${post.image}`],
    },
  };
}

const BlogDetailPage = () => {
  return <BlogDetailController />;
};

export default BlogDetailPage;
