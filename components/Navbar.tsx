"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ConstructexLogo from "@/components/ConstructexLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-card shadow-lg bg-white/60 backdrop-blur-xl border border-luxury-border"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <ConstructexLogo className="w-auto h-8 text-[#7C3AED]" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "Projects", "Process", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-luxury-white hover:text-[#7C3AED] transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA / Menu */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2.5 rounded-full bg-[#7C3AED] text-white text-sm font-bold hover:bg-[#6D28D9] transition-colors shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)]">
              Estimate
            </button>
            <button className="md:hidden p-2 text-luxury-white">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
