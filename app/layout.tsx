import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

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

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://raja7.live",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
