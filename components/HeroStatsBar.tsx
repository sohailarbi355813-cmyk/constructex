"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "4.9 Google Reviews",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "50% Faster Delivery",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    label: "Sustainable Framing",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22c1-4 4-9 10-10C13 7 18 4 22 2c-2 4-5 9-10 10C11 17 6 20 2 22z" />
        <path d="M12 12c-1 3-3 6-6 8" />
      </svg>
    ),
  },
  {
    label: "Superior Quality",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function HeroStatsBar() {
  return (
    <div
      className="relative w-full py-5 px-4 md:px-14 bg-gradient-to-b from-luxury-primary via-luxury-secondary/50 to-luxury-secondary"
    >
      {/* Subtle top glow line */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full"
            style={{
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.25)",
            }}
          >
            <span className="text-luxury-accent flex-shrink-0">{stat.icon}</span>
            <span className="text-luxury-white text-sm font-medium tracking-wide whitespace-nowrap font-heading">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom fade to blend into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-8 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(10,10,10,0.6))",
        }}
      />
    </div>
  );
}
