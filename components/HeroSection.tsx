"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  const headline1 = ["We", "Build", "The"];
  const headline2 = ["Invisible", "Backbone."];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Atmospheric background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-800/10 blur-[100px]" />
        <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full bg-violet-900/15 blur-[100px]" />
      </div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(123,34,206,1) 1px, transparent 1px), linear-gradient(90deg, rgba(123,34,206,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card border border-purple-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse-slow" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-300">
            Structural Framing & Drywall Excellence
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-tight mb-6"
        >
          <div className="flex flex-wrap justify-center gap-x-[0.3em] mb-2">
            {headline1.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block text-white"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-[0.2em]">
            {headline2.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block ${
                  i === headline2.length - 1 ? "gradient-text text-glow" : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg md:text-xl text-white/50 font-light tracking-wide max-w-2xl mx-auto mb-12"
        >
          Heavy-gauge steel framing. Kiln-dried timber assemblies. Level-5
          drywall finishes. Engineered for permanence.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#showcase"
            id="hero-cta-showcase"
            className="group relative px-8 py-4 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500 rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <span className="relative flex items-center gap-2 text-white font-semibold tracking-widest uppercase text-sm">
              View Showcase
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-purple-500/50 font-medium tracking-widest uppercase text-sm transition-all duration-300"
          >
            Request Estimate
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white/30 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-purple-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
