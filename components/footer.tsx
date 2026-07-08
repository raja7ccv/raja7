"use client";

import Link from "next/link";

const currentYear = new Date().getFullYear();

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
];

const SUPPORT_LINKS = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-blue-200 bg-gradient-to-b from-white to-blue-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Raja7</h2>

            <p className="text-gray-600 text-sm leading-7">
              Raja7 is your trusted destination for gaming information, guides,
              updates, and APK downloads. We are committed to providing secure,
              reliable, and up-to-date content for our users.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="gradient-text font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="gradient-text font-semibold mb-5">Support</h4>

            <ul className="space-y-3">
              {SUPPORT_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="gradient-text font-semibold mb-5">Information</h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>✓ Secure Downloads</li>
              <li>✓ Latest Updates</li>
              <li>✓ 24/7 Content Access</li>
              <li>✓ Free Guides & Resources</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} <span className="font-semibold">Raja7</span>. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
