import { PrivacyPolicyController } from "./privacyPolicy.controller";

export const metadata = {
  title: "Privacy Policy — Raja7",
  description:
    "Read the Raja7 privacy policy to learn how we collect, use, and protect user data.",
  alternates: { canonical: "https://raja7.live/privacy-policy" },
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicyController />;
};

export default PrivacyPolicyPage;
