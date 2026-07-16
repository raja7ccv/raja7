"use client";

import Link from "next/link";
import { blogPosts } from "../data";

export function BlogList() {
  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="card-premium border-2 border-blue-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer h-full flex flex-col">
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Read Time Info */}
                  <div className="flex items-center justify-end mb-3">
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-blue-600 mb-2 line-clamp-2 hover:text-blue-700">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-blue-100">
                    <span className="text-xs text-gray-500">{post.author}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
}
