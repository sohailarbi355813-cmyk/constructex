"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Project } from "@/data/projects";

interface DetailsSectionProps {
  project: Project;
}

export default function DetailsSection({ project }: DetailsSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      id="showcase"
    >
      {/* Glow backdrop */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: `${project.themeColor}18` }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="w-10 h-px"
              style={{ backgroundColor: project.themeColor }}
            />
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: project.themeColor }}
            >
              Project Detail
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            {project.detailsSection.title}
          </h2>

          <p className="text-base md:text-lg text-white/55 leading-relaxed mb-10">
            {project.detailsSection.description}
          </p>

          {/* Feature checklist */}
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${project.themeColor}25`, border: `1px solid ${project.themeColor}60` }}
                >
                  <svg
                    className="w-2.5 h-2.5"
                    fill="none"
                    viewBox="0 0 10 10"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke={project.themeColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm text-white/70 font-medium tracking-wide">
                  {feature}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Visual card column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Main visual card */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-card"
            style={{ border: `1px solid ${project.themeColor}30` }}
          >
            {/* Architectural illustration */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${project.themeColor}10 0%, #0B0E11 100%)` }}
            >
              {/* Schematic SVG illustration */}
              <svg
                viewBox="0 0 300 400"
                className="w-full h-full opacity-40"
                fill="none"
              >
                {/* Horizontal beams */}
                {[60, 120, 180, 240, 300, 360].map((y, i) => (
                  <line key={i} x1="30" y1={y} x2="270" y2={y} stroke={project.themeColor} strokeWidth="1.5" opacity="0.6"/>
                ))}
                {/* Vertical studs */}
                {[60, 100, 140, 180, 220, 260].map((x, i) => (
                  <line key={i} x1={x} y1="40" x2={x} y2="380" stroke={project.themeColor} strokeWidth="1" opacity="0.4"/>
                ))}
                {/* Corner brackets */}
                <path d="M30 40 L30 80 L70 80" stroke={project.themeColor} strokeWidth="2" strokeLinecap="round"/>
                <path d="M270 40 L270 80 L230 80" stroke={project.themeColor} strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 380 L30 340 L70 340" stroke={project.themeColor} strokeWidth="2" strokeLinecap="round"/>
                <path d="M270 380 L270 340 L230 340" stroke={project.themeColor} strokeWidth="2" strokeLinecap="round"/>
                {/* Center glow */}
                <circle cx="150" cy="200" r="30" stroke={project.themeColor} strokeWidth="1" opacity="0.5"/>
                <circle cx="150" cy="200" r="8" fill={project.themeColor} opacity="0.6"/>
              </svg>
            </div>

            {/* Image alt overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-white/50 tracking-widest uppercase">
                {project.detailsSection.imageAlt}
              </p>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 border"
            style={{ borderColor: `${project.themeColor}40` }}
          >
            <div className="text-xs tracking-widest uppercase text-white/40 mb-1">
              Standard
            </div>
            <div
              className="text-2xl font-black"
              style={{ color: project.themeColor }}
            >
              {project.stats[1]?.val}
            </div>
            <div className="text-xs text-white/40 mt-0.5">
              {project.stats[1]?.label}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
