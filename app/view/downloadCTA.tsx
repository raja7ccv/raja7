"use client";

export function DownloadCTA() {
  return (
    <section className="relative py-16 md:py-28 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="section-title mb-8 text-4xl md:text-5xl">
            Download The Official Gaming App
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Get instant access to premium gaming experiences on your mobile
            device
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Play Store */}
            <a
              href="#"
              className="card-premium flex items-center gap-4 px-8 py-5 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-300 w-full md:w-auto group"
            >
              <div className="text-left">
                <div className="text-xs text-blue-600 font-medium">
                  GET IT ON
                </div>
                <div className="font-bold text-blue-900 text-lg">
                  Google Play
                </div>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="card-premium flex items-center gap-4 px-8 py-5 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-300/30 transition-all duration-300 w-full md:w-auto group"
            >
              <div className="text-left">
                <div className="text-xs text-blue-600 font-medium">
                  Download On
                </div>
                <div className="font-bold text-blue-900 text-lg">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
