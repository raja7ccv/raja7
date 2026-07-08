"use client";

import { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Static FAQ Data
const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is this gaming platform?",
    answer:
      "Our platform is an online gaming destination that offers casino games, lottery, sports betting, slots, fishing games, and many other exciting entertainment options.",
  },
  {
    id: 2,
    question: "Is the App free to download?",
    answer:
      "Yes. The App is completely free to download. Simply download the latest APK from our website and install it on your Android device.",
  },
  {
    id: 3,
    question: "Is the App safe to use?",
    answer:
      "Yes. The App is regularly updated with the latest security improvements to provide users with a safe and reliable gaming experience.",
  },
  {
    id: 4,
    question: "How do I install the App?",
    answer:
      "Download the APK file, enable 'Install from Unknown Sources' in your device settings, and then open the downloaded APK file to complete the installation.",
  },
  {
    id: 5,
    question: "Can I play without creating an account?",
    answer:
      "Some games may be available without registration, but creating an account allows you to access rewards, bonuses, deposits, withdrawals, and all premium features.",
  },
  {
    id: 6,
    question: "How can I update the App?",
    answer:
      "Visit our website, download the latest APK version, and install it over your existing app to enjoy the newest features and improvements.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Everything you need to know about our gaming platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-xl border-2 border-blue-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-blue-50"
              >
                <span className="text-base font-semibold text-blue-900 md:text-lg">
                  {faq.question}
                </span>

                <span
                  className={`ml-4 flex-shrink-0 text-xl text-blue-600 transition-transform duration-300 ${
                    openId === faq.id ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openId === faq.id && (
                <div className="border-t border-blue-200 bg-blue-50/50 px-6 py-4 text-sm leading-7 text-gray-700 md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
