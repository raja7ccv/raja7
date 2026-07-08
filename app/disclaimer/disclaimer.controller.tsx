"use client";

export function DisclaimerController() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-80" />

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
            Disclaimer
          </h1>

          <p className="text-lg text-gray-600">
            Please read this disclaimer carefully before using the App.
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          {/* Introduction */}
          <div className="card-premium p-8 border-2 border-blue-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Welcome</h2>

            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                Welcome to our gaming platform. This Disclaimer section is
                created to help you clearly understand how our website works,
                what you can expect from our content, and the responsibilities
                of both the users and our platform. Through{" "}
                <strong>the APK download</strong>, we aim to provide users with
                clear information so they can access and use the platform with
                confidence.
              </p>

              <p>
                Our goal is to keep everything simple, transparent, and easy to
                understand so that every visitor can navigate and explore the
                website without confusion. By choosing{" "}
                <strong>the platform download</strong>, users acknowledge that
                they understand how the platform operates and the guidelines
                that apply while using our content.
              </p>
            </div>
          </div>

          {/* General Information */}
          <div className="card-premium p-8 border-2 border-blue-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              General Information
            </h2>

            <p className="text-gray-700 leading-8">
              All the content available on our website is provided for
              entertainment and general informational purposes only. While we
              strive to keep everything accurate, updated, and relevant, we
              cannot guarantee that all information will always be complete or
              entire-free. Users accessing content through{" "}
              <strong>the platform download</strong> should understand that the
              information is offered as-is for general use.
            </p>

            <p className="mt-5 text-gray-700 leading-8">
              Our platform is built with a clean and well-organized website
              architecture, allowing visitors to easily explore different
              sections such as games, updates, and community pages. This
              structure also helps search engines crawl and index our pages
              efficiently.
            </p>
          </div>

          {/* Use of Content */}
          <div className="card-premium p-8 border-2 border-blue-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Use of Content
            </h2>

            <p className="text-gray-700 leading-8">
              By using our website, you agree that any action you take based on
              the information available here is entirely at your own risk. While
              we strive to provide accurate and useful information, we cannot
              accept responsibility for losses, damages, or issues resulting
              from the use of our website or services.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Games Library for gameplay information.
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Help & Support for common issues.
              </li>

              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Contact Us for direct assistance.
              </li>
            </ul>
          </div>

          {/* Platform Performance */}
          <div className="card-premium p-8 border-2 border-blue-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Platform Performance
            </h2>

            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                We continuously work to deliver a smooth, fast, and reliable
                experience through modern rendering techniques and optimized
                performance.
              </p>

              <p>
                Although we work hard to maintain stability, we cannot guarantee
                uninterrupted availability due to maintenance, server issues, or
                unexpected technical problems beyond our control.
              </p>

              <p>
                Our technical team regularly improves server stability,
                rendering, website architecture, crawling, and indexing to
                provide the best possible experience across desktop, tablet, and
                mobile devices.
              </p>
            </div>
          </div>

          {/* User Responsibility */}
          <div className="card-premium p-8 border-2 border-blue-200 rounded-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              User Responsibility
            </h2>

            <div className="space-y-5 text-gray-700 leading-8">
              <p>
                Users are responsible for how they interact with the platform.
                We expect all visitors to use the website respectfully and avoid
                any activity that may harm the platform or other users.
              </p>

              <p>
                If you experience any issues, please visit our Help & Support
                section or contact our support team through the Contact Us page.
              </p>

              <p>
                The information available on this App is provided for general
                informational purposes only. While we strive to keep content
                accurate and current, we make no guarantees regarding its
                completeness, reliability, or accuracy. Any action taken based
                on the information found on this website is entirely at your own
                risk.
              </p>

              <p>
                If you would like to learn more about our platform, please visit
                the About Us page. If you have any questions, suggestions, or
                concerns, feel free to contact us through our Contact Us page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
