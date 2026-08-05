"use client";

import { Project } from "@/data/projects";

interface ProjectSwitcherProps {
  projects: Project[];
  activeIndex: number;
  onSwitch: (index: number) => void;
}

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function ProjectSwitcher({
  projects,
  activeIndex,
  onSwitch,
}: ProjectSwitcherProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-16 px-6 overflow-hidden" 
      id="services"
      style={{ "--scroll-progress": scrollYProgress } as any}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(104,107,108,0.05) 50%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-luxury-muted" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-luxury-muted">
              Our Services
            </span>
            <span className="w-10 h-px bg-luxury-muted" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-luxury-white font-heading">
            Select a Service
          </h2>
        </div>

        {/* Cards Grid (Bento Box Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              id={`service-tab-${project.id}`}
              onClick={() => onSwitch(i)}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative aspect-square ${i === 0 ? "md:col-span-2 md:aspect-[2/1]" : "md:col-span-1 md:aspect-square"} rounded-3xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl text-left stack-card-${i}`}
              style={{
                border: `1px solid ${
                  i === activeIndex
                    ? project.themeColor + "90"
                    : "rgba(255,255,255,0.08)"
                }`,
                boxShadow: i === activeIndex ? `0 20px 40px -10px ${project.themeColor}40` : "none"
              }}
            >
              {/* Dynamic Abstract Background */}
              <div 
                className="absolute inset-0 transition-opacity duration-700 opacity-30 group-hover:opacity-60"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.themeColor}80 0%, transparent 60%),
                               repeating-linear-gradient(45deg, transparent, transparent 10px, ${project.themeColor}15 10px, ${project.themeColor}15 20px)`,
                  backgroundSize: "200% 200%",
                }}
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to top, #0B0E11 0%, transparent 100%)`,
                  opacity: i === activeIndex ? 0.9 : 0.7
                }}
              />

              {/* Active Indicator Glow */}
              {i === activeIndex && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.themeColor}40 0%, transparent 60%)`,
                  }}
                />
              )}

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  {i === activeIndex && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                      style={{ backgroundColor: project.themeColor, color: project.themeColor }}
                    />
                  )}
                  <span
                    className="text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                    style={{
                      color: i === activeIndex ? project.themeColor : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-2xl font-bold font-heading text-luxury-white mb-2 group-hover:text-[#7C3AED] transition-colors duration-300">
                  {project.name}
                </div>
                <div className="text-sm text-luxury-muted mb-3 group-hover:text-luxury-white transition-colors duration-300">
                  {project.subName}
                </div>
                <div 
                  className={`text-xs uppercase tracking-widest font-bold transition-all duration-300 ${i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"}`}
                  style={{ color: project.themeColor }}
                >
                  View Details &rarr;
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active project description banner */}
        <div
          className="glass-card rounded-2xl px-8 py-6 text-center max-w-2xl mx-auto overflow-hidden relative"
          style={{
            borderColor: `${projects[activeIndex].themeColor}25`,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-luxury-paragraph leading-relaxed">
                {projects[activeIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
