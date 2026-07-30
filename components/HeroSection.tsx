"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const textShadow = "0 2px 16px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)";

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

      {/* Desktop bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none hidden md:block" />

      {/* Mobile deep gradient — dark reading zone from 45% down */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none block md:hidden"
        style={{
          height: "62%",
          background:
            "linear-gradient(to top, #0B0E11 0%, rgba(11,14,17,0.95) 20%, rgba(11,14,17,0.82) 42%, rgba(11,14,17,0.4) 62%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════
          MOBILE LAYOUT (block md:hidden)
      ══════════════════════════════════════ */}
      <div className="block md:hidden relative z-10 flex flex-col h-full px-4 pb-8" style={{ paddingTop: "62%" }}>

        {/* Staggered headline */}
        <div
          className="flex flex-col leading-none select-none"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <motion.span
            {...fadeUp(0.1)}
            className="text-3xl font-semibold italic text-white -ml-4 pl-1"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            Designing Space
          </motion.span>

          <motion.span
            {...fadeUp(0.3)}
            className="text-3xl font-semibold italic text-white ml-10"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            that Endures
          </motion.span>

          <motion.span
            {...fadeUp(0.5)}
            className="text-5xl font-bold italic ml-20"
            style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "#7C3AED", textShadow }}
          >
            &
          </motion.span>

          <motion.span
            {...fadeUp(0.7)}
            className="text-3xl font-semibold italic text-white ml-8"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            Inspires
          </motion.span>
        </div>

        {/* CTA button — pushed to bottom with mt-auto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 flex justify-center"
        >
          {/* CTA button */}
          <button
            className="group flex items-center gap-0 rounded-full overflow-hidden font-outfit font-semibold text-sm transition-all duration-300 active:scale-[0.97]"
            style={{
              background: "#6B21A8",
              paddingLeft: "1.25rem",
              boxShadow: "0 8px 32px rgba(107,33,168,0.5)",
            }}
          >
            <span className="text-white pr-3 py-3 tracking-wide">Get a Quote</span>
            <span
              className="flex items-center justify-center rounded-full my-1.5 mr-1.5"
              style={{ width: "2.2rem", height: "2.2rem", background: "#fff", flexShrink: 0 }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#6B21A8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT (hidden md:flex)
      ══════════════════════════════════════ */}
      <div className="hidden md:flex relative z-10 mt-auto px-14 pb-12">
        <div className="flex items-end justify-between w-full gap-4">

          {/* LEFT — Staggered headline */}
          <div
            className="flex flex-col leading-none select-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <motion.span
              {...fadeUp(0.1)}
              className="text-5xl font-light italic text-white -ml-14 pl-1"
              style={{ letterSpacing: "-0.01em", textShadow }}
            >
              Designing Space
            </motion.span>

            <motion.span
              {...fadeUp(0.3)}
              className="text-5xl font-light italic text-white ml-24"
              style={{ letterSpacing: "-0.01em", textShadow }}
            >
              that Endures
            </motion.span>

            <motion.span
              {...fadeUp(0.5)}
              className="text-7xl font-bold italic ml-36"
              style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "#7C3AED", textShadow }}
            >
              &
            </motion.span>

            <motion.span
              {...fadeUp(0.7)}
              className="text-5xl font-light italic text-white ml-14"
              style={{ letterSpacing: "-0.01em", textShadow }}
            >
              Inspires
            </motion.span>
          </div>

          {/* CENTER — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="group flex items-center gap-0 rounded-full overflow-hidden font-outfit font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "#6B21A8",
                paddingLeft: "1.5rem",
                boxShadow: "0 8px 32px rgba(107,33,168,0.45)",
              }}
            >
              <span className="text-white pr-4 py-3.5 tracking-wide">Get a Quote</span>
              <span
                className="flex items-center justify-center rounded-full my-1.5 mr-1.5"
                style={{ width: "2.4rem", height: "2.4rem", background: "#fff", flexShrink: 0 }}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#6B21A8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* RIGHT — Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end gap-1.5"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-white text-sm font-medium text-right leading-tight" style={{ textShadow }}>
              Trusted by millions of<br />Canadian people
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
