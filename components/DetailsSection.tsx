"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";

interface DetailsSectionProps {
  project: Project;
}

export default function DetailsSection({ project }: DetailsSectionProps) {
  return (
    <section
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
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
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

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 font-heading">
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
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
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
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative group"
        >
          {/* Main visual card */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-card transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
            style={{ border: `1px solid ${project.themeColor}30` }}
          >
            {/* Generated Image with Parallax Scale */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-luxury-primary"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image 
                src={`/images/details/${project.id}.png`}
                alt={project.detailsSection.imageAlt}
                fill
                className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              />
              <div 
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${project.themeColor}10 0%, #0B0E1195 100%)` }}
              />
            </motion.div>

            {/* Image alt overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-xs text-white/50 tracking-widest uppercase">
                {project.detailsSection.imageAlt}
              </p>
            </div>
          </div>

          {/* Floating accent card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 border shadow-2xl"
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
