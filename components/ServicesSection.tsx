"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useState } from "react";

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-luxury-white font-heading mb-4">Our Expertise</h2>
          <p className="text-luxury-paragraph max-w-2xl mx-auto">Specialized architectural solutions and premium finishing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              className={`p-8 rounded-3xl transition-all duration-500 cursor-pointer border ${
                active === i 
                  ? "bg-[#7C3AED]/5 border-[#7C3AED]/30 shadow-lg" 
                  : "bg-white border-luxury-border hover:border-[#7C3AED]/20"
              }`}
            >
              <div 
                className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center transition-colors duration-500 ${
                  active === i ? "bg-[#7C3AED] text-white" : "bg-luxury-primary text-luxury-muted"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-luxury-white font-heading mb-3">{project.name}</h3>
              <p className="text-sm text-luxury-paragraph line-clamp-3">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
