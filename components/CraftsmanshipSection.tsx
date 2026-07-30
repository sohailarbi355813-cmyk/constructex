"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Project } from "@/data/projects";

interface CraftsmanshipSectionProps {
  project: Project;
}

export default function CraftsmanshipSection({
  project,
}: CraftsmanshipSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
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
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "Precision Alignment",
              description: "Laser-verified stud placement with sub-millimeter tolerances on every job site.",
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
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 14v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
              title: "On-Time Delivery",
              description: "Strict schedule adherence with daily progress reporting and milestone accountability.",
            },
            {
              icon: (
                <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                  <path d="M20 4L4 12v8c0 9 7.2 16.4 16 18 8.8-1.6 16-9 16-18v-8L20 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Licensed & Insured",
              description: "Fully licensed engineers, comprehensive site liability coverage, and bonded craftsmanship warranty.",
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
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group glass-card rounded-2xl p-7 hover:border-purple-500/30 transition-all duration-500 cursor-default"
              style={{
                borderColor: i === 0 ? `${project.themeColor}30` : undefined,
              }}
            >
              <div
                className="mb-5 text-white/30 group-hover:text-opacity-70 transition-colors duration-300"
                style={{ color: `${project.themeColor}80` }}
              >
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
