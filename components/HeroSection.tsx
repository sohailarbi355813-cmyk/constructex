"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 120, damping: 20, mass: 1.2, delay },
});

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden"
      id="hero"
    >
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-30 blur-[120px]"
          style={{ background: "#7C3AED" }} 
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-10 blur-[140px]"
          style={{ background: "#F59E0B" }} 
        />
      </div>

      <div className="relative z-10 text-center px-6 mt-16">
        <motion.div
          className="flex flex-col items-center select-none font-heading"
        >
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-luxury-white tracking-tight leading-tight mb-2"
          >
            Dry wall &
          </motion.h1>
          <motion.h1
            {...fadeUp(0.3)}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-luxury-white tracking-tight leading-tight"
          >
            general contractor
          </motion.h1>
          <motion.p
            {...fadeUp(0.5)}
            className="mt-6 text-lg md:text-xl text-luxury-paragraph max-w-2xl mx-auto"
          >
            Premium craftsmanship and architectural perfection for modern interior environments.
          </motion.p>
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
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40 z-20" />
    </section>
  );
}
