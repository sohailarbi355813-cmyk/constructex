"use client";

import { useState, useEffect } from "react";
import ConstructexLogo from "./ConstructexLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Showcase", href: "#showcase" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-luxury-primary/80 backdrop-blur-xl border-b border-luxury-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <ConstructexLogo size={36} />

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-luxury-muted hover:text-luxury-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7C3AED] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-widest uppercase overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#7C3AED] rounded-full" />
            <span className="absolute inset-0 bg-[#6D28D9] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-luxury-white">Get Estimate</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-luxury-white block transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-luxury-white block transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-luxury-white block transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden overflow-hidden bg-luxury-primary/95 backdrop-blur-xl border-t border-luxury-border/50"
        >
          <ul className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium tracking-widest uppercase text-luxury-muted hover:text-luxury-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-luxury-white text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
