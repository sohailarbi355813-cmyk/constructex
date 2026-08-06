"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#7C3AED]/10 text-[#7C3AED] font-bold text-xs tracking-widest uppercase mb-6">
              Established 2006
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 font-heading leading-[1.1] mb-8">
              Building the GTA's Architectural Backbone.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-medium">
              Since 2006, Constructex has been the premier partner for luxury residential and high-end commercial developments across the Greater Toronto Area. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We don't just build walls; we engineer flawless structural foundations and deliver absolute Level-5 finishes that set the standard for modern architectural excellence. With nearly two decades of precision craftsmanship in the GTA, our commitment to zero-flex durability and seamless geometry remains unmatched.
            </p>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-black text-[#7C3AED] mb-1">18+</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Years Active</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-[#7C3AED] mb-1">GTA</h4>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Service Area</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 md:mt-0"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative border border-gray-100">
              <div className="absolute inset-0 bg-[url('/images/living-room.jpg')] bg-cover bg-center transition-transform duration-700 hover:scale-105" />
              {/* Subtle tint */}
              <div className="absolute inset-0 bg-[#7C3AED]/5 mix-blend-overlay pointer-events-none" />
            </div>
            
            {/* Floating accent block */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] z-10 hidden sm:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#7C3AED]/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">Precision Guaranteed</h5>
                  <p className="text-xs text-gray-500 font-medium">Fully licensed & insured in Ontario.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
