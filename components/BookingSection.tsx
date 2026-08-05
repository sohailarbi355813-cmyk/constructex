"use client";

import { motion } from "framer-motion";

export default function BookingSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="contact">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7C3AED]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 text-center border border-luxury-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
        >
          <h2 className="text-4xl md:text-6xl font-black text-luxury-white mb-6 font-heading">
            Ready to Build?
          </h2>
          <p className="text-lg text-luxury-paragraph max-w-2xl mx-auto mb-10">
            Let's discuss your next architectural project. We bring precision engineering and premium finishing to every interior.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7C3AED] text-white font-bold text-lg hover:bg-[#6D28D9] transition-all shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-1">
              Request an Estimate
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-[#7C3AED] text-[#7C3AED] font-bold text-lg hover:bg-[#7C3AED]/5 transition-all">
              Call (555) 123-4567
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
