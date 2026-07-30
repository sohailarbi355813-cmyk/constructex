"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Project } from "@/data/projects";

interface StatsBannerProps {
  project: Project;
}

export default function StatsBanner({ project }: StatsBannerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 overflow-hidden"
      id="services"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: project.gradient }}
      />
      <div
        className="absolute inset-0 opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, ${project.themeColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-purple-500/30 transition-all duration-500"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15 + 0.2,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="text-5xl md:text-6xl font-black mb-2"
                style={{ color: project.themeColor }}
              >
                {stat.val}
              </motion.div>
              <div className="text-xs tracking-[0.25em] uppercase text-white/50 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {project.features.map((feature, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/8 text-sm text-white/60"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.themeColor }}
              />
              {feature}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
