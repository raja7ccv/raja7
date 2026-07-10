"use client";

import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Download Raja7 APK Safely",
    excerpt:
      "Step-by-step guide to downloading the latest Raja7 APK for Android.",
    content: "Complete Raja7 APK download guide...",
    author: "Raja7 Team",
    date: "2026-07-01",
    category: "Download",
    image: "/images/blog/1.webp",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Register a Raja7 Account",
    excerpt: "Learn how to create your Raja7 account in just a few minutes.",
    content: "Complete registration guide...",
    author: "Raja7 Team",
    date: "2026-07-02",
    category: "Guide",
    image: "/images/blog/2.webp",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "How to Login to Raja7",
    excerpt: "A simple guide for signing in to your Raja7 account.",
    content: "Complete login guide...",
    author: "Raja7 Team",
    date: "2026-07-03",
    category: "Guide",
    image: "/images/blog/3.webp",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "How to Install Raja7 APK on Android",
    excerpt: "Install Raja7 APK safely on your Android phone.",
    content: "Installation guide...",
    author: "Raja7 Team",
    date: "2026-07-04",
    category: "APK",
    image: "/images/blog/4.webp",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Top Features of Raja7 App",
    excerpt: "Explore the latest features available in Raja7.",
    content: "Feature overview...",
    author: "Raja7 Team",
    date: "2026-07-05",
    category: "Features",
    image: "/images/blog/5.webp",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Raja7 Beginner Guide",
    excerpt: "Everything new users should know before getting started.",
    content: "Beginner guide...",
    author: "Raja7 Team",
    date: "2026-07-06",
    category: "Guide",
    image: "/images/blog/6.webp",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Raja7 App Interface Explained",
    excerpt: "Learn about the Raja7 app interface and navigation.",
    content: "Interface guide...",
    author: "Raja7 Team",
    date: "2026-07-07",
    category: "Tutorial",
    image: "/images/blog/7.webp",
    readTime: "4 min read",
  },
  {
    id: 8,
    title: "How to Update Raja7 APK",
    excerpt: "Keep your Raja7 app updated with the latest version.",
    content: "Update guide...",
    author: "Raja7 Team",
    date: "2026-07-08",
    category: "Update",
    image: "/images/blog/8.webp",
    readTime: "4 min read",
  },
  {
    id: 9,
    title: "Raja7 Android Compatibility Guide",
    excerpt: "Check whether your Android device supports Raja7.",
    content: "Compatibility guide...",
    author: "Raja7 Team",
    date: "2026-07-09",
    category: "Android",
    image: "/images/blog/9.webp",
    readTime: "5 min read",
  },
  {
    id: 10,
    title: "Common Raja7 Login Issues and Solutions",
    excerpt: "Troubleshoot common Raja7 login problems.",
    content: "Troubleshooting guide...",
    author: "Raja7 Team",
    date: "2026-07-10",
    category: "Support",
    image: "/images/blog/10.webp",
    readTime: "6 min read",
  },
  {
    id: 11,
    title: "How to Download the Latest Raja7 Version",
    excerpt: "Download the latest version of Raja7 easily.",
    content: "Latest version guide...",
    author: "Raja7 Team",
    date: "2026-07-11",
    category: "Download",
    image: "/images/blog/11.webp",
    readTime: "5 min read",
  },
  {
    id: 12,
    title: "Raja7 App Performance Tips",
    excerpt: "Improve your Raja7 app performance on Android.",
    content: "Performance tips...",
    author: "Raja7 Team",
    date: "2026-07-12",
    category: "Tips",
    image: "/images/blog/12.webp",
    readTime: "5 min read",
  },
  {
    id: 13,
    title: "Why Keep Raja7 Updated?",
    excerpt: "Benefits of using the latest Raja7 version.",
    content: "Update benefits...",
    author: "Raja7 Team",
    date: "2026-07-13",
    category: "Update",
    image: "/images/blog/13.webp",
    readTime: "4 min read",
  },
  {
    id: 14,
    title: "Raja7 Mobile App Overview",
    excerpt: "Everything you should know about Raja7 mobile app.",
    content: "App overview...",
    author: "Raja7 Team",
    date: "2026-07-14",
    category: "Overview",
    image: "/images/blog/14.webp",
    readTime: "5 min read",
  },
  {
    id: 15,
    title: "How to Navigate Raja7 Dashboard",
    excerpt: "Understand every section of the Raja7 dashboard.",
    content: "Dashboard guide...",
    author: "Raja7 Team",
    date: "2026-07-15",
    category: "Tutorial",
    image: "/images/blog/15.webp",
    readTime: "6 min read",
  },
  {
    id: 16,
    title: "Raja7 APK Installation FAQ",
    excerpt: "Frequently asked questions about installing Raja7.",
    content: "FAQ...",
    author: "Raja7 Team",
    date: "2026-07-16",
    category: "FAQ",
    image: "/images/blog/16.webp",
    readTime: "4 min read",
  },
  {
    id: 17,
    title: "Getting Started with Raja7",
    excerpt: "A complete getting started guide for Raja7 users.",
    content: "Getting started...",
    author: "Raja7 Team",
    date: "2026-07-17",
    category: "Guide",
    image: "/images/blog/17.webp",
    readTime: "7 min read",
  },
  {
    id: 18,
    title: "Raja7 App Security Tips",
    excerpt: "Best practices to keep your Raja7 account secure.",
    content: "Security tips...",
    author: "Raja7 Team",
    date: "2026-07-18",
    category: "Security",
    image: "/images/blog/18.webp",
    readTime: "5 min read",
  },
  {
    id: 19,
    title: "Raja7 Latest Features in 2026",
    excerpt: "Discover the newest improvements in Raja7.",
    content: "Latest features...",
    author: "Raja7 Team",
    date: "2026-07-19",
    category: "News",
    image: "/images/blog/19.webp",
    readTime: "5 min read",
  },
  {
    id: 20,
    title: "Complete Raja7 User Guide",
    excerpt: "The ultimate guide covering everything about Raja7.",
    content: "Complete user guide...",
    author: "Raja7 Team",
    date: "2026-07-20",
    category: "Guide",
    image: "/images/blog/20.webp",
    readTime: "10 min read",
  },
];

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
