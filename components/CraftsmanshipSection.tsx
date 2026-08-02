"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface CraftsmanshipSectionProps {
  project: Project;
}

export default function CraftsmanshipSection({
  project,
}: CraftsmanshipSectionProps) {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      id="craftsmanship"
    >
      {/* Background radial glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: project.themeColor }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="w-12 h-px"
              style={{ backgroundColor: project.themeColor }}
            />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: project.themeColor }}
            >
              Craftsmanship
            </span>
            <span
              className="w-12 h-px"
              style={{ backgroundColor: project.themeColor }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            {project.craftsmanshipSection.title}
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            {project.craftsmanshipSection.description}
          </p>
        </motion.div>

        {/* Bento grid of craft points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Precision Alignment",
              description: "Laser-verified stud placement with sub-millimeter tolerances on every job site. Our framing sets the absolute true line for everything that follows.",
              spanClass: "lg:col-span-2 lg:row-span-2",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <path d="M8 32L20 8l12 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 24h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Structural Integrity",
              description: "Every steel and timber assembly engineered for zero-flex durability across decades.",
              spanClass: "lg:col-span-2",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "On-Time Delivery",
              description: "Strict schedule adherence with daily milestone accountability.",
              spanClass: "lg:col-span-1",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <path d="M20 4L4 12v8c0 9 7.2 16.4 16 18 8.8-1.6 16-9 16-18v-8L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Licensed & Insured",
              description: "Comprehensive site liability coverage and warranty.",
              spanClass: "lg:col-span-1",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <rect x="6" y="10" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 16h28M14 22h4M22 22h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Acoustic Engineering",
              description: "Sound-dampening insulation and thermal breaks engineered into every partition wall.",
              spanClass: "lg:col-span-2",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <path d="M8 28L20 12l12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 32h32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Level-5 Finish",
              description: "Skim-coat plaster over drywall compound, delivering an invisible, paint-ready surface.",
              spanClass: "lg:col-span-2",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden border border-white/5 hover:border-white/20 flex flex-col justify-end ${item.spanClass}`}
              style={{
                boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)",
              }}
            >
              {/* Hover Glow Background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${project.themeColor}15, transparent 70%)` }}
              />

              <div
                className="mb-5 transition-colors duration-500"
                style={{ color: `${project.themeColor}60` }}
              >
                <div className="transition-all duration-500 group-hover:scale-110" style={{ color: `${project.themeColor}` }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
