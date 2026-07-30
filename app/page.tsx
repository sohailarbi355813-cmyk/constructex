"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroStatsBar from "@/components/HeroStatsBar";
import ProjectSwitcher from "@/components/ProjectSwitcher";
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

      <HeroSection />
      <HeroStatsBar />

      {/* Project Switcher Tabs */}
      <ProjectSwitcher
        projects={projects}
        activeIndex={activeIndex}
        onSwitch={setActiveIndex}
      />

      <div key={`${activeProject.id}-content`}>
        <StatsBanner project={activeProject} />
        <DetailsSection project={activeProject} />
        <CraftsmanshipSection project={activeProject} />
      </div>

      <BookingSection project={activeProject} />

      <Footer />
    </main>
  );
}
