"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
      id="hero"
    >
      {/* Background Image with Frosted Glass Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')]"
      >
        {/* White frosted glass overlay so the dark text remains perfectly readable */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
      </div>

      <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="leading-[0.85] flex flex-col items-center">
            <span className="font-black text-7xl md:text-[8rem] lg:text-[10rem] block tracking-tighter text-gray-900">Dry Wall</span>
            <span className="font-light text-6xl md:text-7xl lg:text-[8rem] block tracking-tight mt-2 text-[#7C3AED]">Experts</span>
          </h1>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 200, damping: 20 }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-0 rounded-full overflow-hidden font-heading font-semibold text-lg transition-shadow duration-300 bg-[#7C3AED] hover:bg-[#6D28D9] shadow-[0_10px_40px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_50px_rgba(124,58,237,0.5)]"
            style={{ paddingLeft: "2rem" }}
          >
            <span className="text-white pr-4 py-4 tracking-wide">Get an Estimate</span>
            <span
              className="flex items-center justify-center rounded-full my-2 mr-2 bg-white shrink-0 transition-transform duration-300 group-hover:rotate-45"
              style={{ width: "2.8rem", height: "2.8rem" }}
            >
              <svg className="w-5 h-5 stroke-[#7C3AED]" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Noise overlay for texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 z-20" />
    </section>
  );
}
