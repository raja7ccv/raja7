"use client";

import { useState } from "react";

const contactData = {
  title: "Contact Us",

  description:
    "We're always here to help you and ensure your gaming experience is smooth, enjoyable, and completely hassle-free. Whether you have a question, need technical support, want to share feedback, or are interested in partnership opportunities, our team is always ready to assist you.",

  sections: [
    {
      title: "Get in Touch",
      content: `
If you have any questions regarding our platform, games, or services, feel free to contact us through the available channels. Our team aims to respond as quickly as possible and provide the assistance you need.

Before contacting us, you may also explore other sections of our website:

• About Us

• Games Library

• Help & Support

These pages contain useful information and answers to many common questions.
      `,
    },

    {
      title: "Customer Support",
      content: `
Our support team is dedicated to resolving issues as efficiently as possible. Whether you are experiencing technical difficulties, account-related concerns, or gameplay problems, we are here to help.

To help us resolve your issue quickly, please include:

• Your Name

• Email Address

• Description of the issue

• Screenshot (if available)

• Device & Browser Information

Providing complete information helps us investigate and respond faster.
      `,
    },

    {
      title: "Business & Partnership Inquiries",
      content: `
We welcome partnerships, sponsorships, advertising opportunities, and business collaborations.

If you represent a company, developer, or content creator and would like to work with us, please contact our business team. Every inquiry is reviewed carefully, and we aim to respond as soon as possible.
      `,
    },

    {
      title: "Technical Assistance",
      content: `
If you encounter bugs, website errors, download issues, or gameplay problems, please report them to our technical team.

Our developers continuously monitor the platform and work to improve website performance, stability, and user experience.

You may also visit:

• Latest Updates

• Community Hub

These sections often contain helpful solutions and announcements regarding recent improvements.
      `,
    },

    {
      title: "Response Time",
      content: `
We strive to reply to all inquiries within 24–48 hours.

Some requests, including technical investigations or partnership inquiries, may require additional time depending on their complexity.

Every message is reviewed carefully to ensure you receive accurate and helpful support.
      `,
    },
  ],

  contactMethods: [
    {
      id: 1,
      icon: "📧",
      title: "Email Support",
      value: "raja7ccv@gmail.com",
      response: "24-48 Hours",
    },
    {
      id: 2,
      icon: "💼",
      title: "Business",
      value: "raja7ccv@gmail.com",
      response: "1-3 Business Days",
    },
    {
      id: 3,
      icon: "🛠️",
      title: "Technical Support",
      value: "raja7ccv@gmail.com",
      response: "24 Hours",
    },
    {
      id: 4,
      icon: "🌐",
      title: "Website",
      value: "www.raja7.com",
      response: "Available 24/7",
    },
  ],

  departments: [
    {
      id: 1,
      name: "General Support",
      email: "raja7ccv@gmail.com",
      description:
        "Questions about your account, games, or general platform use.",
    },
    {
      id: 2,
      name: "Business & Partnerships",
      email: "raja7ccv@gmail.com",
      description:
        "Sponsorships, advertising, and collaboration opportunities.",
    },
    {
      id: 3,
      name: "Technical Support",
      email: "raja7ccv@gmail.com",
      description:
        "Bugs, website errors, download issues, or gameplay problems.",
    },
  ],

  footer: `
Thank you for visiting our Contact Us page.

We appreciate your trust in our platform and are committed to providing a fast, secure, and enjoyable gaming experience.

If you need assistance, our team is always ready to help. You can also return to the Home page to explore games, discover new features, and stay updated with the latest platform improvements.
`,
};

type FormData = {
  name: string;
  email: string;
  department: string;
  subject: string;
  message: string;
};

export function ContactUsController() {
  const data = contactData;
  const loading = false;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    department: data.departments[0]?.email ?? "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);

    try {
      // TODO: wire this up to your actual submit endpoint / API call.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        department: data.departments[0]?.email ?? "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit contact form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading)
    return <div className="text-center py-12 text-gray-700">Loading...</div>;

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-blue-600 text-5xl md:text-6xl font-bold mb-4">
            {data?.title}
          </h1>
          <p className="text-gray-600 text-lg">{data?.description}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-blue-600 text-3xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {data?.contactMethods.map((method) => (
              <div
                key={method.id}
                className="card-premium p-6 border-2 border-blue-200 rounded-xl text-center"
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-blue-600 font-bold mb-2">{method.title}</h3>
                <p className="text-gray-700 font-semibold mb-3">
                  {method.value}
                </p>
                <p className="text-sm text-gray-500">{method.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-blue-600 text-2xl font-bold mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Department
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                  >
                    {data?.departments.map((dept) => (
                      <option key={dept.id} value={dept.email}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-gray-900"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="premium-button w-full disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-center">
                    Thank you! We&apos;ll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-blue-600 text-2xl font-bold mb-6">
                Our Departments
              </h2>
              <div className="space-y-4">
                {data?.departments.map((dept) => (
                  <div
                    key={dept.id}
                    className="card-premium p-6 border-2 border-blue-200 rounded-lg"
                  >
                    <h3 className="text-blue-600 font-bold text-lg mb-2">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {dept.description}
                    </p>
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
