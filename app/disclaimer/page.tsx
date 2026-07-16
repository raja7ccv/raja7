import { DisclaimerController } from "./disclaimer.controller";

export const metadata = {
  title: "Disclaimer — Raja7",
  description:
    "Read the Raja7 disclaimer for legal and informational disclosures about our content and services.",
  alternates: { canonical: "https://raja7.live/disclaimer" },
};

const DisclaimerPage = () => {
  return <DisclaimerController />;
};

export default DisclaimerPage;
