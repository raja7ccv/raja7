"use client";

const aboutData = {
  hero: {
    heading: "About Raja7",
    subheading: "Reliable • Secure • Easy APK Downloads",
    description:
      "Raja7 is a trusted platform dedicated to providing the latest APK downloads, helpful guides, and useful information to help users access the newest version quickly and safely.",
  },

  about: {
    title: "Welcome to Raja7",
    content: `
Raja7 is a platform created to make downloading the latest APK simple, fast, and secure.

Our goal is to provide users with reliable download links, easy-to-follow installation guides, and accurate information about the latest app versions. We regularly update our content so visitors can always access the newest releases without unnecessary complications.

Whether you're looking for the latest APK version or helpful resources, Raja7 offers a clean, user-friendly experience across all devices.
`,
  },

  mission: {
    title: "Our Mission",
    content: `
Our mission is to provide a safe and reliable platform where users can easily find the latest APK downloads and useful information.

We focus on maintaining updated content, fast website performance, responsive design, and a seamless browsing experience for every visitor.
`,
  },

  architecture: {
    title: "Our Website",
    content: `
Our website is designed with simplicity and usability in mind.

Visitors can quickly access:

• Home

• About Us

• Blog

• Privacy Policy

• Disclaimer

• Contact Us

Every page is organized to make navigation simple, ensuring users can quickly find the information they need.
`,
  },

  experience: {
    title: "User Experience",
    content: `
User experience is our highest priority.

Our responsive layout, optimized performance, and clean interface provide a smooth browsing experience on desktop, tablet, and mobile devices.

We continuously improve our website to ensure faster loading speeds and easier navigation.
`,
  },

  community: {
    title: "Why Choose Raja7",
    content: `
Raja7 is committed to providing reliable information and secure APK downloads.

We regularly update our content, maintain a user-friendly interface, and focus on delivering accurate resources that help visitors download and install the latest application versions with confidence.
`,
  },

  vision: {
    title: "Our Vision",
    content: `
Our vision is to become a trusted source for APK downloads and informative content.

By continuously improving website quality, performance, accessibility, and user experience, we aim to provide valuable resources for users looking for the latest app updates.
`,
  },
};

const sections = [
  aboutData.about,
  aboutData.mission,
  aboutData.architecture,
  aboutData.experience,
  aboutData.community,
  aboutData.vision,
];

export function AboutUsController() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50 via-white to-cyan-50" />
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 text-center animate-fade-in">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            About Raja7
          </span>

          <h1 className="mt-6 text-4xl font-bold text-blue-700 md:text-6xl animate-slide-up">
            {aboutData.hero.heading}
          </h1>

          <p className="mt-4 text-lg font-semibold text-blue-500 md:text-2xl">
            {aboutData.hero.subheading}
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-gray-600 md:text-lg">
            {aboutData.hero.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="card-premium p-8 animate-slide-up"
            >
              <h2 className="mb-5 section-title text-2xl md:text-3xl">
                {section.title}
              </h2>

              <div className="whitespace-pre-line leading-8 text-gray-700">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
