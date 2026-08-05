"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 bg-[#FAFAF9]" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-luxury-white font-heading mb-4">Featured Work</h2>
            <p className="text-luxury-paragraph max-w-xl">A curated selection of our finest architectural implementations.</p>
          </div>
          <button className="text-[#7C3AED] font-bold text-sm tracking-widest uppercase hover:text-[#6D28D9] transition-colors flex items-center gap-2">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative bg-white border border-luxury-border">
                {/* Simulated Project Image using Gradient */}
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80"
                  style={{
                    background: `linear-gradient(135deg, #F5F5F0 0%, ${project.themeColor}30 100%)`
                  }}
                />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#7C3AED]">
                  {project.name}
                </div>
              </div>
              <h3 className="text-2xl font-black text-luxury-white font-heading mb-2">{project.detailsSection.title}</h3>
              <p className="text-sm text-luxury-paragraph line-clamp-2">{project.detailsSection.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
