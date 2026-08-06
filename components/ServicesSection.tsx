"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);

  // Animation variants for the scatter effect
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      x: 0,
      rotate: 0,
      scale: 0.9
    },
    visible: (i: number) => {
      // Calculate final positions based on index
      let x = 0;
      let rotate = 0;
      let scale = 1;
      let y = 0;

      if (i === 0) {
        x = -380;
        rotate = -5;
      } else if (i === 1) {
        y = -20;
        scale = 1.05;
      } else if (i === 2) {
        x = 380;
        rotate = 5;
      }

      return {
        opacity: 1,
        x,
        y,
        rotate,
        scale,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 15,
          delay: 0.2 + (i * 0.1),
        }
      };
    },
    hover: (i: number) => ({
      scale: i === 1 ? 1.08 : 1.03,
      y: i === 1 ? -30 : -10,
      rotate: 0,
      zIndex: 50,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    })
  };

  return (
    <section 
      className="py-32 relative bg-[#FAFAF9] overflow-hidden min-h-screen flex flex-col justify-center" 
      id="services"
    >
      <div className="w-full flex flex-col justify-center items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24 z-50"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Specialized architectural solutions and premium finishing.</p>
        </motion.div>

        {/* The Card Deck Container */}
        <div className="relative w-full max-w-7xl mx-auto h-[400px] flex items-center justify-center">
          
          {projects.slice(0, 3).map((project, i) => {
            // Initial z-index logic: middle card is on top initially
            const initialZIndex = i === 1 ? 30 : 20;

            return (
              <motion.div
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{ zIndex: active === i ? 50 : initialZIndex }}
                className={`absolute w-[340px] h-[380px] p-8 rounded-3xl cursor-pointer border shadow-2xl transition-colors duration-300 ${
                  active === i 
                    ? "bg-[#7C3AED]/5 border-[#7C3AED]/30" 
                    : "bg-white border-gray-100"
                }`}
              >
                <div 
                  className={`w-12 h-12 rounded-full mb-8 flex items-center justify-center transition-colors duration-300 ${
                    active === i || active === null && i === 1 ? "bg-[#7C3AED] text-white" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">{project.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-4 leading-relaxed">{project.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
