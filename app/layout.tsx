import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { SITE_CONFIG } from "@/config/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raja7.live"),

  title: {
    default: "Raja7 - Best Online Casino & Sports Betting Platform",
    template: "%s | Raja7",
  },

  description:
    "Raja7 is a trusted online casino and sports betting platform offering live casino games, Aviator, slots, cricket betting, football betting, Teen Patti, Andar Bahar, Roulette, Blackjack, Baccarat, and secure real money gaming.",
  keywords: [
    "Raja7",
    "raja7 game",
    "raja7 apk",
    "new raja7",
    "new raja7 game",
    "new raja7 game download",
    "raja7 game download",
    "raja7 app",
    "raja7 casino",
    "raja7 betting",
    "Raja7 Live",
    "Raja7 Casino",
    "Raja7 Betting",
    "Raja7 Login",
    "Raja7 Register",
    "Raja7 Official",
    "Raja7 App",
    "Online Casino",
    "Best Online Casino",
    "Live Casino",
    "Casino Games",
    "Casino India",
    "Real Money Casino",
    "Online Gambling",
    "Sports Betting",
    "Cricket Betting",
    "IPL Betting",
    "Football Betting",
    "Tennis Betting",
    "Live Betting",
    "Betting Exchange",
    "Aviator",
    "Aviator Game",
    "Crash Game",
    "Lucky Jet",
    "JetX",
    "Slots",
    "Slot Games",
    "Online Slots",
    "Jackpot Slots",
    "Roulette",
    "Blackjack",
    "Baccarat",
    "Poker",
    "Teen Patti",
    "Andar Bahar",
    "Dragon Tiger",
    "Live Roulette",
    "Live Blackjack",
    "Live Baccarat",
    "Indian Casino",
    "Mobile Casino",
    "Online Gaming",
    "Win Real Money",
    "Sportsbook",
    "Bet Online",
    "Fast Withdrawal",
    "Secure Betting",
    "24x7 Customer Support",

    "Raja7 login link",
    "Raja7 old version apk",
    "Raja7 latest version download",
    "Raja7 real or fake",
    "Raja7 signup bonus",
    "Raja7 promo code",
    "Raja7 referral code",
    "Raja7 customer care number",
    "Raja7 WhatsApp group link",
    "Raja7 telegram channel",
    "Raja7 APK update",
    "Raja7 VIP membership",
    "Raja7 agent login",
    "Raja7 online betting app",

    "Raja7 deposit method",
    "Raja7 instant withdrawal",
    "Raja7 UPI deposit",
    "Raja7 Paytm withdrawal",
    "Minimum deposit in Raja7",
    "Raja7 withdrawal proof",
    "Fast payout online casino",
    "UPI betting sites India",
    "Crypto betting India",
    "Trusted betting sites in India",

    "Aviator predictor app",
    "Aviator trick and strategy",
    "Aviator multiplier hack",
    "Spribe Aviator game",
    "Crash game online money",
    "Mines game online",
    "Balloon crash game",
    "Plinko real money",
    "Tower crash game",
    "High multiplier crash games",

    "IPL live betting odds",
    "Cricket exchange ID online",
    "T20 World Cup betting app",
    "Online cricket matka betting",
    "Football live score betting",
    "Pro Kabaddi League betting",
    "Tennis live match betting",
    "Virtual sports betting India",
    "Esports betting platform",

    "Real money Teen Patti app",
    "3 Patti real cash game",
    "Andar Bahar online strategy",
    "Dragon vs Tiger trick",
    "Jhandi Munda online cash game",
    "Rummy real cash game",
    "Callbreak real money game",
    "Live dealer Teen Patti",

    "Evolution Gaming Live Roulette",
    "Crazy Time live casino",
    "Monopoly Live casino",
    "Lightning Roulette online",
    "Mega Ball live",
    "High roller online casino",
    "Best slot game with high RTP",
    "Mega Moolah jackpot slot",
    "Pragmatic Play slots online",
    "Speed Baccarat live",

    "No deposit bonus casino India",
    "Free signup bonus betting app",
    "100% welcome bonus casino",
    "Free spins no deposit",
    "Casino cashback offers India",
    "Daily bonus betting app",
    "VIP loyalty rewards casino",
  ],

  applicationName: "Raja7",

  authors: [
    {
      name: "Raja7",
      url: "https://raja7.live",
    },
  ],

  creator: "Raja7",
  publisher: "Raja7",

  referrer: "origin-when-cross-origin",
  category: "gaming",

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  alternates: {
    canonical: "https://raja7.live",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Raja7 - Online Casino & Sports Betting",
    description:
      "Experience the best online casino games, live casino, sports betting, and Aviator on Raja7.",
    url: "https://raja7.live",
    siteName: "Raja7",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raja7.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raja7",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raja7 - Online Casino & Sports Betting",
    description:
      "Join Raja7 for live casino, sports betting, Aviator, and exciting online games.",
    creator: "@raja7",
    images: ["https://raja7.live/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// themeColor moved out of `metadata` — Next.js 14+ requires it in a
// separate `viewport` export instead.
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Raja7",
  url: "https://raja7.live",
  description: "Raja7 is a trusted online casino and sports betting platform.",
  publisher: {
    "@type": "Organization",
    name: "Raja7",
    url: "https://raja7.live",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Raja7",
  url: "https://raja7.live",
  logo: "https://raja7.live/favicon.ico",
  sameAs: ["https://twitter.com/raja7"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="abc123xyz456" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
