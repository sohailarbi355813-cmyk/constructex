import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
