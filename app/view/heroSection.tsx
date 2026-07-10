"use client";

import Image from "next/image";
import Link from "next/link";
import { downloadLink } from "@/app/constant";
import Raja7_Favicon from "../../public/images/Raja7_Favicon.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-28">
      <div className="absolute inset-0 bg-linear-to-b from-blue-50 via-white to-cyan-50" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-left">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 animate-fade-in">
              🎮 Raja7 APK Download
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl animate-slide-up">
              Download
              <span className="block bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Raja7 APK
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 animate-stagger-2">
              Download the latest Raja7 APK for Android and enjoy a smooth
              gaming experience with fast performance, secure access, exciting
              features, and regular updates. Get the newest version from a
              trusted download source.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex items-center justify-center"
              >
                Download APK
              </Link>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-600">Latest</h3>
                <p className="text-sm text-gray-600">APK Version</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">Safe</h3>
                <p className="text-sm text-gray-600">Secure Download</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">Fast</h3>
                <p className="text-sm text-gray-600">Installation</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-blue-600">Free</h3>
                <p className="text-sm text-gray-600">APK Access</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-slide-right">
            <div className="card-premium p-8">
              <Image
                src={Raja7_Favicon}
                alt="Raja7"
                width={380}
                height={700}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
