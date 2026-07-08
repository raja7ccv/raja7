"use client";

const privacyPolicyData = {
  title: "Privacy Policy",
  lastUpdated: "July 2026",

  sections: [
    {
      id: 1,
      title: "Welcome",
      content: `
Welcome to our gaming platform. Your privacy and safety are important to us, and we are committed to protecting your personal information while providing a secure and enjoyable experience.

When users access services through our App, we make every effort to ensure that their information is handled responsibly and securely.

This Privacy Policy explains how we collect, use, and manage your information. We believe transparency is important, so we have written this policy in a simple and easy-to-understand format.
      `,
    },

    {
      id: 2,
      title: "Information We Collect",
      content: `
When you use our website, we may collect basic information such as your name, email address, device information, browser type, and general browsing activity.

This information helps us improve our services, provide better support, optimize website performance, and ensure a smooth experience for everyone using the platform.

Our website is built using a secure and organized architecture that helps us manage user information safely while improving website accessibility and performance.
      `,
    },

    {
      id: 3,
      title: "Cookies & Tracking",
      content: `
Our website uses cookies to improve and personalize your browsing experience.

Cookies help us understand visitor behavior, improve website performance, remember user preferences, and provide more relevant content.

You can disable cookies at any time through your browser settings. However, some features of the website may not function properly if cookies are disabled.
      `,
    },

    {
      id: 4,
      title: "Data Protection",
      content: `
Protecting your personal information is one of our highest priorities.

We use appropriate security practices and regularly monitor our systems to maintain a secure environment for all users.

Although we work hard to safeguard your information, no internet-based platform can guarantee complete security. We continuously improve our systems to provide a reliable and safe gaming experience.
      `,
    },

    {
      id: 5,
      title: "18+ Age Warning",
      content: `
Our platform is intended only for users who are at least 18 years old.

By accessing this website, you confirm that you meet this age requirement.

We do not knowingly collect information from individuals under the age of 18. If such information is discovered, it will be removed as quickly as possible.

Parents and guardians should monitor children's online activities to prevent access to age-restricted content.
      `,
    },

    {
      id: 6,
      title: "Responsible Use",
      content: `
Users are expected to use the platform responsibly and comply with all applicable rules and guidelines.

Any misuse of the website may result in restricted access or suspension from our services.

If you have questions regarding this Privacy Policy or our platform, please visit the Contact Us page for assistance.
      `,
    },
  ],
};

export function PrivacyPolicyController() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-600 md:text-6xl">
            {privacyPolicyData.title}
          </h1>

          <p className="text-gray-600">
            Last Updated: {privacyPolicyData.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-12">
            {privacyPolicyData.sections.map((section) => (
              <div
                key={section.id}
                className="border-b border-blue-100 pb-10 last:border-0"
              >
                <h2 className="mb-5 text-3xl font-bold text-blue-600">
                  {section.title}
                </h2>

                <p className="whitespace-pre-line leading-8 text-gray-700">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Box */}
          <div className="mt-16 rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-blue-600">
              Questions About Our Privacy Policy?
            </h3>

            <p className="mx-auto mb-6 max-w-2xl text-gray-600">
              If you have any questions regarding this Privacy Policy, data
              protection practices, or how we manage your information, feel free
              to contact our support team. We&apos;re always happy to help.
            </p>

            <a
              href="/contact"
              className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
