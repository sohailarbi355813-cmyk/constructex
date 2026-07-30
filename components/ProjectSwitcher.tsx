"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectSwitcherProps {
  projects: Project[];
  activeIndex: number;
  onSwitch: (index: number) => void;
}

export default function ProjectSwitcher({
  projects,
  activeIndex,
  onSwitch,
}: ProjectSwitcherProps) {
  return (
    <section className="relative py-16 px-6 overflow-hidden" id="services">
      {/* Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(123,34,206,0.05) 50%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-10 h-px bg-purple-600" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-purple-400">
              Our Services
            </span>
            <span className="w-10 h-px bg-purple-600" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Select a Service
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {projects.map((project, i) => (
            <motion.button
              key={project.id}
              id={`service-tab-${project.id}`}
              onClick={() => onSwitch(i)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-5 rounded-2xl text-left overflow-hidden transition-all duration-500 group"
              style={{
                background:
                  i === activeIndex
                    ? `linear-gradient(135deg, ${project.themeColor}30, ${project.themeColor}10)`
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${
                  i === activeIndex
                    ? project.themeColor + "60"
                    : "rgba(255,255,255,0.08)"
                }`,
              }}
            >
              {/* Active indicator */}
              {i === activeIndex && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${project.themeColor}20 0%, transparent 60%)`,
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  {i === activeIndex && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.themeColor }}
                    />
                  )}
                  <span
                    className="text-xs font-bold tracking-widest uppercase"
                    style={{
                      color: i === activeIndex ? project.themeColor : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {project.name}
                </div>
                <div className="text-sm text-white/40">{project.subName}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active project description banner */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl px-8 py-6 text-center max-w-2xl mx-auto"
            style={{
              borderColor: `${projects[activeIndex].themeColor}25`,
            }}
          >
            <p className="text-sm text-white/50 leading-relaxed">
              {projects[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
