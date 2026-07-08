"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../view/blogList";

export function BlogDetailController() {
  const params = useParams<{ id: string }>();

  const post = useMemo(() => {
    const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
    return blogPosts.find((p) => String(p.id) === String(id)) ?? null;
  }, [params?.id]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg mb-4">Post not found</p>
        <Link href="/blog" className="premium-button">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium mb-8 inline-flex items-center gap-2"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="text-blue-600 text-4xl md:text-5xl font-bold mb-4 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-4 border-t border-blue-100">
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-600">
                {new Date(post.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-700 leading-relaxed space-y-6 text-base md:text-lg">
            <p className="text-xl text-gray-600 italic">{post.excerpt}</p>
            <p className="whitespace-pre-line">{post.content}</p>

            {/* Additional content sections */}
            <div className="card-premium border-2 border-blue-200 p-6 md:p-8 rounded-xl my-8">
              <h2 className="text-blue-600 text-2xl font-bold mb-4">
                Key Takeaways
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Understanding the fundamentals improves your overall
                    experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Practice responsible gaming habits for long-term enjoyment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>
                    Stay informed with the latest updates and features
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Thank you for reading this article. We hope you found it
              informative and helpful. For more insights, tips, and updates,
              make sure to visit our blog regularly and stay connected with our
              gaming community.
            </p>
          </div>
        </article>

        {/* Share and Back */}
        <div className="border-t border-blue-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gray-600 mb-3">Share this article:</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Share
                </a>
              </div>
            </div>
            <Link href="/blog" className="premium-button">
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
