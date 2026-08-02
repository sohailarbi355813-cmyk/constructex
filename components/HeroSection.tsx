"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 120, damping: 20, mass: 1.2, delay },
});

const textShadow = "0 2px 16px rgba(0,0,0,0.95), 0 1px 4px rgba(0,0,0,0.9)";

export default function HeroSection() {
  return (
    <section
      className="relative h-[72vh] md:h-screen flex flex-col overflow-hidden"
      id="hero"
    >
      {/* Background Image — Desktop */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/images/bg-hero-desktop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Background Image — Mobile */}
      <div
        className="absolute inset-0 bg-no-repeat block md:hidden"
        style={{
          backgroundImage: "url('/images/bg-architect.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 60/30/10 Color Rule Overlay: 
          30% Secondary for readability, 60% White (text), 10% Purple (accents) */}
      <div className="absolute inset-0 pointer-events-none bg-luxury-secondary/40" />

      {/* Top gradient for navbar blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-luxury-secondary/80 to-transparent pointer-events-none" />

      {/* ══════════════════════════════════════
          MOBILE LAYOUT (block md:hidden)
      ══════════════════════════════════════ */}
      <div className="block md:hidden relative z-10 flex flex-col h-full px-4 pb-8" style={{ paddingTop: "62%" }}>

        {/* Staggered headline */}
        <div
          className="flex flex-col leading-none select-none font-heading"
        >
          <motion.span
            {...fadeUp(0.1)}
            className="text-3xl font-bold text-white -ml-4 pl-1"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            Best metal
          </motion.span>

          <motion.span
            {...fadeUp(0.3)}
            className="text-5xl font-bold italic font-cormorant ml-6"
            style={{ letterSpacing: "-0.03em", lineHeight: 1, color: "#7C3AED", textShadow }}
          >
            &
          </motion.span>

          <motion.span
            {...fadeUp(0.5)}
            className="text-3xl font-bold text-white ml-12"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            wooden framing
          </motion.span>

          <motion.span
            {...fadeUp(0.7)}
            className="text-3xl font-bold text-white ml-20"
            style={{ letterSpacing: "-0.01em", textShadow }}
          >
            service across the Canada
          </motion.span>
        </div>

        {/* CTA button — pushed to bottom with mt-auto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          {/* CTA button */}
          <button
            className="group flex items-center gap-0 rounded-full overflow-hidden font-heading font-semibold text-sm transition-all duration-300 active:scale-[0.97] bg-[#7C3AED] hover:bg-[#6D28D9] shadow-[0_8px_32px_rgba(124,58,237,0.5)]"
            style={{
              paddingLeft: "1.25rem",
            }}
          >
            <span className="text-luxury-white pr-3 py-3 tracking-wide">Get a Quote</span>
            <span
              className="flex items-center justify-center rounded-full my-1.5 mr-1.5 bg-luxury-white shrink-0"
              style={{ width: "2.2rem", height: "2.2rem" }}
            >
              <svg className="w-3.5 h-3.5 stroke-luxury-accent" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
            className="flex flex-col leading-[0.85] select-none font-heading pt-20"
          >
            <motion.span
              {...fadeUp(0.1)}
              className="text-5xl md:text-[5rem] lg:text-[6.5rem] font-black text-white -ml-2 pl-1 tracking-tighter"
              style={{ textShadow }}
            >
              BEST METAL
            </motion.span>

            <motion.span
              {...fadeUp(0.3)}
              className="text-[7rem] md:text-[8rem] font-bold italic font-cormorant ml-12"
              style={{ letterSpacing: "-0.03em", lineHeight: 0.85, color: "#7C3AED", textShadow }}
            >
              &
            </motion.span>

            <motion.span
              {...fadeUp(0.5)}
              className="text-6xl md:text-[5rem] lg:text-[6.5rem] font-black text-white ml-16 tracking-tighter"
              style={{ textShadow }}
            >
              WOODEN FRAMING
            </motion.span>

            <motion.span
              {...fadeUp(0.7)}
              className="text-3xl md:text-[3rem] font-bold text-white/80 ml-24 tracking-tight mt-6"
              style={{ textShadow }}
            >
              service across Canada
            </motion.span>
          </div>

          {/* CENTER — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="group flex items-center gap-0 rounded-full overflow-hidden font-heading font-semibold text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] bg-[#7C3AED] hover:bg-[#6D28D9] shadow-[0_8px_32px_rgba(124,58,237,0.45)]"
              style={{
                paddingLeft: "1.5rem",
              }}
            >
              <span className="text-luxury-white pr-4 py-3.5 tracking-wide">Get a Quote</span>
              <span
                className="flex items-center justify-center rounded-full my-1.5 mr-1.5 bg-luxury-white shrink-0"
                style={{ width: "2.4rem", height: "2.4rem" }}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-luxury-accent"
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 13L13 3M13 3H6M13 3V10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
