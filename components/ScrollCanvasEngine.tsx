"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Project } from "@/data/projects";
import { useScrollCanvas } from "@/hooks/useScrollCanvas";

interface ScrollCanvasEngineProps {
  project: Project;
  sectionIndex: number;
}

const TRACK_HEIGHT_VH = 400;

export default function ScrollCanvasEngine({
  project,
  sectionIndex,
}: ScrollCanvasEngineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackStart, setTrackStart] = useState(0);
  const [trackEnd, setTrackEnd] = useState(4000);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const textOpacity1 = useTransform(scrollYProgress, [0, 0.1, 0.22, 0.28], [0, 1, 1, 0]);
  const textY1 = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  const textOpacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.47, 0.53], [0, 1, 1, 0]);
  const textY2 = useTransform(scrollYProgress, [0.25, 0.4], [40, 0]);

  const textOpacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.72, 0.78], [0, 1, 1, 0]);
  const textY3 = useTransform(scrollYProgress, [0.5, 0.65], [40, 0]);

  const textOpacity4 = useTransform(scrollYProgress, [0.78, 0.88, 1], [0, 1, 1]);
  const textY4 = useTransform(scrollYProgress, [0.78, 0.92], [40, 0]);

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setMounted(true);
    const update = () => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const start = window.scrollY + rect.top;
        const end = start + trackRef.current.offsetHeight - window.innerHeight;
        setTrackStart(start);
        setTrackEnd(end);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { canvasRef } = useScrollCanvas({
    folderPath: project.folderPath,
    frameCount: project.frameCount,
    scrollStart: trackStart,
    scrollEnd: trackEnd,
  });

  const sections = [
    { title: project.section1.title, subtitle: project.section1.subtitle, opacity: textOpacity1, y: textY1 },
    { title: project.section2.title, subtitle: project.section2.subtitle, opacity: textOpacity2, y: textY2 },
    { title: project.section3.title, subtitle: project.section3.subtitle, opacity: textOpacity3, y: textY3 },
    { title: project.section4.title, subtitle: project.section4.subtitle, opacity: textOpacity4, y: textY4 },
  ];

  return (
    <div
      ref={trackRef}
      className="relative"
      style={{ height: `${TRACK_HEIGHT_VH}vh` }}
      id={`showcase-${project.id}`}
    >
      {/* Sticky canvas window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas or fallback gradient */}
        {project.frameCount > 0 ? (
          <canvas
            ref={canvasRef as React.RefObject<HTMLCanvasElement>}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: project.gradient }}
          >
            {/* Fallback visual for projects without image sequences */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="w-32 h-32 mx-auto mb-8 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${project.themeColor}40 0%, transparent 70%)`,
                    border: `1px solid ${project.themeColor}40`,
                  }}
                >
                  <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                    <rect x="8" y="28" width="48" height="8" rx="2" fill={project.themeColor} opacity="0.6"/>
                    <rect x="16" y="16" width="4" height="32" rx="1" fill={project.themeColor} opacity="0.4"/>
                    <rect x="28" y="12" width="4" height="40" rx="1" fill={project.themeColor} opacity="0.6"/>
                    <rect x="40" y="16" width="4" height="32" rx="1" fill={project.themeColor} opacity="0.4"/>
                  </svg>
                </div>
                <p className="text-white/30 text-sm tracking-widest uppercase">
                  Renovation Sequence Coming Soon
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dark vignette overlays */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0E11] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0B0E11] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0B0E11]/80 to-transparent" />
        </div>

        {/* Progress bar */}
        {mounted && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
            <motion.div
              className="h-full"
              style={{
                width: progressBarWidth,
                backgroundColor: project.themeColor,
              }}
            />
          </div>
        )}

        {/* Overlaid text sections */}
        {mounted && sections.map((sec, i) => (
          <motion.div
            key={i}
            style={{ opacity: sec.opacity, y: sec.y }}
            className="absolute inset-0 flex items-end pointer-events-none"
          >
            <div className="p-10 md:p-16 max-w-2xl">
              {/* Section number */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold tracking-[0.3em] uppercase"
                  style={{ color: project.themeColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="w-8 h-px bg-white/20" />
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-medium">
                  {project.name}
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-3">
                {sec.title}
              </h2>
              {sec.subtitle && (
                <p className="text-base md:text-lg text-white/55 font-light max-w-lg leading-relaxed">
                  {sec.subtitle}
                </p>
              )}

              {/* Stats row on last section */}
              {i === 3 && (
                <div className="flex gap-6 mt-8">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span
                        className="text-2xl md:text-3xl font-black"
                        style={{ color: project.themeColor }}
                      >
                        {stat.val}
                      </span>
                      <span className="text-xs tracking-widest uppercase text-white/40 mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Section counter indicator */}
        {mounted && (
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
            {sections.map((_, i) => {
              const thresholds = [0.1, 0.35, 0.6, 0.85];
              return (
                <motion.div
                  key={i}
                  className="w-1 h-6 rounded-full"
                  style={{
                    backgroundColor: project.themeColor,
                    opacity: 0.3,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
