import { BlogList } from "./view/blogList";

export default function BlogController() {
  return (
    <main className="bg-white">
      {/* Blog Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="section-title mb-4 text-5xl md:text-6xl">Our Blog</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Stay updated with the latest gaming tips, industry insights,
            community stories, and platform updates. Our blog is your go-to
            resource for all things gaming on our platform.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <BlogList />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4 text-3xl md:text-4xl">
            Don&apos;t Miss Our Latest Updates
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to stay informed about new articles and exclusive gaming
            content.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-500 flex-1 md:max-w-xs"
            />
            <button className="premium-button">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
