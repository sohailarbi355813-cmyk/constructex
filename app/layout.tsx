import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      <body className={`${jakarta.className} antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
