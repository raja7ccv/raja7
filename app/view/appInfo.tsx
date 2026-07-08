"use client";

interface AppInfoData {
  generalInfo: {
    title: string;
    description: string;
    specs: {
      name: string;
      size: string;
      version: string;
      downloadUrl: string;
    };
  };
}

// Static Data
const appInfo: AppInfoData = {
  generalInfo: {
    title: "General Information Of The App",
    description:
      "Our mobile gaming platform combines fun entertainment with earning opportunities. Designed for both beginners and experienced players, the app offers a smooth interface, fast performance, and engaging gameplay.\n\nIf you're looking for a simple and exciting way to enjoy games while earning rewards, this game platform is worth trying.",
    specs: {
      name: "Gaming App",
      size: "28 MB",
      version: "1.4.6v (2026)",
      downloadUrl: "#", // Replace with your actual download link
    },
  },
};

export function AppInfo() {
  const { generalInfo } = appInfo;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="section-title mb-4 text-4xl font-bold md:text-5xl">
            {generalInfo.title}
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Description */}
          <div>
            <p className="whitespace-pre-line text-base leading-8 text-gray-700 md:text-lg">
              {generalInfo.description}
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Name
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {generalInfo.specs.name}
              </h3>
            </div>

            {/* Size */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Size
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {generalInfo.specs.size}
              </h3>
            </div>

            {/* Version */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Version
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {generalInfo.specs.version}
              </h3>
            </div>

            {/* Download */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">
                Download
              </p>

              <a
                href={generalInfo.specs.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
