"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const avatars = [
  { initials: "S", from: "#f87171", to: "#ec4899" },
  { initials: "M", from: "#475569", to: "#1e293b" },
  { initials: "A", from: "#f59e0b", to: "#d97706" },
];

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      id="hero"
    >
      {/* Background Image — Desktop */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Background Image — Mobile */}
      <div
        className="absolute inset-0 bg-no-repeat block md:hidden"
        style={{
          backgroundImage: "url('/landing-bg-mobile.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/20" />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0E11] to-transparent pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none" />



      {/* ── BOTTOM 3-COLUMN ROW ── */}
      <div className="relative z-10 mt-auto px-6 md:px-14 pb-8 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-4">

          {/* LEFT — Staggered headline with landing animations */}
          <div
            className="flex flex-col leading-none select-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            {/* Line 1 — full left */}
            <motion.span
              {...fadeUp(0.1)}
              className="text-3xl md:text-5xl font-light italic text-white/90 -ml-6 md:-ml-14 pl-1"
              style={{ letterSpacing: "-0.01em" }}
            >
              Designing Space
            </motion.span>

            {/* Line 2 — pushed more right */}
            <motion.span
              {...fadeUp(0.3)}
              className="text-3xl md:text-5xl font-light italic text-white/90 ml-12 md:ml-24"
              style={{ letterSpacing: "-0.01em" }}
            >
              that Endures
            </motion.span>

            {/* Line 3 — & in purple */}
            <motion.span
              {...fadeUp(0.5)}
              className="text-5xl md:text-7xl font-bold italic ml-20 md:ml-36"
              style={{
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#7C3AED",
              }}
            >
              &
            </motion.span>

            {/* Line 4 — Inspires */}
            <motion.span
              {...fadeUp(0.7)}
              className="text-3xl md:text-5xl font-light italic text-white/90 ml-8 md:ml-14"
              style={{ letterSpacing: "-0.01em" }}
            >
              Inspires
            </motion.span>
          </div>

          {/* CENTER — CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:pb-2"
          >
            <button
              className="group flex items-center gap-0 rounded-full overflow-hidden font-outfit font-semibold text-sm md:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "#6B21A8",
                paddingLeft: "1.5rem",
                boxShadow: "0 8px 32px rgba(107,33,168,0.45)",
              }}
            >
              <span className="text-white pr-4 py-3.5 tracking-wide">Get a Quote</span>
              <span
                className="flex items-center justify-center rounded-full my-1.5 mr-1.5"
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  background: "rgba(255,255,255,1)",
                  flexShrink: 0,
                }}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 13L13 3M13 3H6M13 3V10"
                    stroke="#6B21A8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </motion.div>



        </div>
      </div>
    </section>
  );
}
