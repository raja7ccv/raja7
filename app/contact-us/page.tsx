import { ContactUsController } from "./contactUs.controller";

export const metadata = {
  title: "Contact Raja7 — Support & Business Inquiries",
  description:
    "Contact the Raja7 support and business teams for assistance, partnerships, and technical inquiries.",
  alternates: {
    canonical: "https://raja7.live/contact-us",
  },
};

const ContactUsPage = () => {
  return <ContactUsController />;
};

export default ContactUsPage;
