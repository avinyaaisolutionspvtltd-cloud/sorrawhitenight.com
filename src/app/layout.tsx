import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Great_Vibes } from "next/font/google";
import InstallPrompt from "@/components/InstallPrompt";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sorra White Night | Café & Restaurant | Wardha",
  description:
    "An elegant rooftop café and restaurant in Wardha. Good food, great vibes, better together. Perfect for fine dining, date nights, celebrations and special moments.",
  keywords: [
    "Sorra White Night",
    "café Wardha",
    "restaurant Wardha",
    "rooftop dining Wardha",
    "fine dining Maharashtra",
    "date night restaurant",
    "events Wardha",
    "multi-cuisine Wardha",
  ],
  openGraph: {
    title: "Sorra White Night | Café & Restaurant | Wardha",
    description:
      "Good Food. Great Vibes. Better Together. An elegant rooftop café and restaurant in Wardha.",
    url: "https://sorrawhitenight.com",
    siteName: "Sorra White Night",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorra White Night | Café & Restaurant | Wardha",
    description: "Good Food. Great Vibes. Better Together.",
  },
  metadataBase: new URL("https://sorrawhitenight.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/images/sorra_logo_transparent.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0a08" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}