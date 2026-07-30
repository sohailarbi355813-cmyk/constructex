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

      {/* ── TRUST BADGE — absolute right side ── */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.88 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-28 md:bottom-36 right-4 md:right-12 z-20"
      >
        <div
          className="rounded-2xl p-4 md:p-5 min-w-[155px] md:min-w-[175px]"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2.5 mb-3">
            {avatars.map((av, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-xs text-white font-bold shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${av.from}, ${av.to})`,
                  zIndex: avatars.length - i,
                }}
              >
                {av.initials}
              </div>
            ))}
            {/* + circle */}
            <div
              className="w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center text-xs text-white font-bold shadow-md"
              style={{ background: "#1e1e2e", zIndex: 0 }}
            >
              +
            </div>
          </div>

          {/* Number */}
          <div className="text-white font-black text-3xl md:text-4xl leading-none tracking-tight">
            1200+
          </div>

          {/* Label */}
          <div
            className="text-white/60 text-[10px] md:text-xs tracking-widest uppercase mt-1 font-medium"
          >
            Customer Review
          </div>
        </div>
      </motion.div>

      {/* ── BOTTOM 3-COLUMN ROW ── */}
      <div className="relative z-10 mt-auto px-6 md:px-14 pb-8 md:pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-4">

          {/* LEFT — Staggered headline with landing animations */}
          <div
            className="flex flex-col leading-none select-none overflow-hidden"
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

          {/* RIGHT — bottom trust text badge (small pill) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-end md:pb-2"
          >
            <div
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/20"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-xs font-medium tracking-wide">
                Trusted by millions of Canadian people
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
