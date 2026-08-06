"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "@/data/projects";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate transforms for Card 1 (moves left)
  const card1X = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Calculate transforms for Card 2 (stays center, comes up slightly)
  const card2Scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [-10, 0]);

  // Calculate transforms for Card 3 (moves right)
  const card3X = useTransform(scrollYProgress, [0, 1], [0, 380]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section 
      ref={containerRef} 
      className="h-[300vh] relative bg-[#FAFAF9]" 
      id="services"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        
        <div className="text-center mb-12 absolute top-24 left-0 right-0 z-50">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Expertise</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Specialized architectural solutions and premium finishing.</p>
        </div>

        {/* The Card Deck Container */}
        <div className="relative w-full max-w-7xl mx-auto h-[400px] flex items-center justify-center mt-20">
          
          {projects.slice(0, 3).map((project, i) => {
            // Assign transforms based on index
            let x: any = 0;
            let y: any = 0;
            let rotate: any = 0;
            let scale: any = 1;

            if (i === 0) {
              x = card1X;
              y = card1Y;
              rotate = card1Rotate;
            } else if (i === 1) {
              y = card2Y;
              scale = card2Scale;
            } else if (i === 2) {
              x = card3X;
              y = card3Y;
              rotate = card3Rotate;
            }

            // z-index logic: middle card is on top initially
            const zIndex = i === 1 ? 30 : 20;

            return (
              <motion.div
                key={project.id}
                style={{ x, y, rotate, scale, zIndex }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`absolute w-[340px] h-[360px] p-8 rounded-3xl cursor-pointer border shadow-2xl transition-colors duration-300 ${
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
