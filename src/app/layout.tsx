import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorra White Night | Rooftop Restaurant & Dining | Wardha",
  description:
    "Experience fine dining at Sorra White Night, Wardha's premier rooftop restaurant. Open 24 hours with outdoor seating, delicious multi-cuisine food, and stunning views. Located at Nagthana Square, Sawangi, Wardha, Maharashtra.",
  keywords: [
    "Sorra White Night",
    "restaurant Wardha",
    "rooftop dining Wardha",
    "best restaurant Sawangi",
    "24 hour restaurant Maharashtra",
    "multi-cuisine Wardha",
    "outdoor dining Nagpur bypass",
  ],
  openGraph: {
    title: "Sorra White Night | Rooftop Restaurant & Dining | Wardha",
    description:
      "Experience fine dining at Sorra White Night, Wardha's premier rooftop restaurant. Open 24 hours with outdoor seating.",
    url: "https://sorrawhitenight.com",
    siteName: "Sorra White Night",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorra White Night | Rooftop Restaurant & Dining | Wardha",
    description:
      "Experience fine dining at Sorra White Night, Wardha's premier rooftop restaurant.",
  },
  metadataBase: new URL("https://sorrawhitenight.com"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/images/sorra_logo_transparent.png"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
