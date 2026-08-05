"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ConstructexLogo from "@/components/ConstructexLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Services", "Projects", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between px-6 py-4 rounded-full transition-all duration-300 ${
              scrolled
                ? "glass-card shadow-lg bg-white/60 backdrop-blur-xl border border-luxury-border"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center">
              <ConstructexLogo className="w-auto h-7 sm:h-8 text-[#7C3AED]" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((item) => (
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
              
              {/* Mobile Menu Toggle */}
              <button 
                className="md:hidden p-2 text-[#7C3AED] hover:bg-[#7C3AED]/10 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-luxury-border rounded-3xl p-6 shadow-2xl flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-luxury-white font-heading hover:text-[#7C3AED] transition-colors"
                >
                  {item}
                </Link>
              ))}
              <hr className="border-luxury-border" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-4 rounded-full bg-[#7C3AED] text-white text-base font-bold hover:bg-[#6D28D9] transition-colors shadow-lg"
              >
                Get an Estimate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
