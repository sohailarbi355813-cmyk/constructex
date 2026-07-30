"use client";

import { Project } from "@/data/projects";

interface StatsBannerProps {
  project: Project;
}

export default function StatsBanner({ project }: StatsBannerProps) {
  return (
    <section
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
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-8 text-center group hover:border-[#686B6C]/50 transition-colors duration-300"
            >
              <div
                className="text-5xl md:text-6xl font-black mb-2"
                style={{ color: project.themeColor }}
              >
                {stat.val}
              </div>
              <div className="text-xs tracking-[0.25em] uppercase text-white/50 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features list */}
        <div
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
        </div>
      </div>
    </section>
  );
}
