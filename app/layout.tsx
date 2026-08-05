import type { Metadata } from "next";
import { Syne, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CONSTRUCTEX | Drywall • Framing — Architectural Mastery",
  description:
    "CONSTRUCTEX delivers precision structural framing, Level-5 drywall finishes, and architectural light renovation. Engineering interior environments built to last generations.",
  keywords: [
    "drywall",
    "framing",
    "structural framing",
    "Level-5 drywall",
    "architectural renovation",
    "construction",
    "CONSTRUCTEX",
  ],
  openGraph: {
    title: "CONSTRUCTEX | Drywall • Framing",
    description:
      "Precision structural framing & Level-5 drywall. Engineered for architectural perfection.",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import FontTweakPanel from "@/components/FontTweakPanel";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FontTweakPanel />
      </body>
    </html>
  );
}
