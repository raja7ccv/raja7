import { AboutUsController } from "./aboutUs.controller";

export const metadata = {
  title: "About Raja7 — Trusted APK Downloads & Guides",
  description:
    "Learn about Raja7 — our mission, vision, and commitment to safe APK downloads and reliable guides for users.",
  alternates: {
    canonical: "https://raja7.live/about-us",
  },
};

const AboutUsPage = () => {
  return <AboutUsController />;
};

export default AboutUsPage;
