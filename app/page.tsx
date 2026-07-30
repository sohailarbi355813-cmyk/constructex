"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectSwitcher from "@/components/ProjectSwitcher";
import ScrollCanvasEngine from "@/components/ScrollCanvasEngine";
import StatsBanner from "@/components/StatsBanner";
import DetailsSection from "@/components/DetailsSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Primary Scroll Canvas Hero — Replaces static Hero */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ScrollCanvasEngine
            project={activeProject}
            sectionIndex={activeIndex}
          />
        </motion.div>
      </AnimatePresence>

      {/* Project Switcher Tabs - Moved below the Hero Scroll */}
      <ProjectSwitcher
        projects={projects}
        activeIndex={activeIndex}
        onSwitch={setActiveIndex}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeProject.id}-content`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <StatsBanner project={activeProject} />
          <DetailsSection project={activeProject} />
          <CraftsmanshipSection project={activeProject} />
        </motion.div>
      </AnimatePresence>

      {/* Booking section — always visible */}
      <BookingSection project={activeProject} />

      <Footer />
    </main>
  );
}
