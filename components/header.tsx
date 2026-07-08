"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo.png";
import { downloadLink } from "@/app/constant";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact-us", label: "Contact Us" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="glass-effect border-b border-blue-200 sticky top-0 z-50 shadow-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-45 h-12.5">
            <Image
              src={logo}
              alt="Raja7 Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-200 text-sm font-medium hover:scale-110 relative group ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button text-xs md:text-sm inline-flex items-center justify-center"
          >
            Download
          </Link>
          <button
            className="md:hidden text-blue-600 text-2xl hover:text-blue-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-blue-50 backdrop-blur border-t border-blue-200 p-4 space-y-3 animate-slide-down">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block transition-all duration-200 hover:translate-x-1 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
