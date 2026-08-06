"use client";

import Navbar from "@/components/Navbar";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const OptionHeader = ({ number, title }: { number: number; title: string }) => (
  <div className="absolute top-10 left-10 z-50">
    <div className="bg-[#7C3AED] text-white px-6 py-3 rounded-xl shadow-lg border border-[#7C3AED]/50">
      <p className="text-sm font-semibold opacity-80 uppercase tracking-wider mb-1">Option {number}</p>
      <p className="text-xl font-bold">{title}</p>
    </div>
  </div>
);

export default function HeroTestPage() {
  return (
    <main className="relative min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Option 1: The Classic Contrast (Ultra Bold + Ultra Light) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={1} title="The Classic Contrast" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9]">
            <span className="font-black block tracking-tight">Dry Wall</span>
            <span className="font-light block tracking-widest uppercase text-5xl md:text-7xl mt-2 text-gray-600">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 2: The Inverse Contrast (Ultra Light + Ultra Bold) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={2} title="The Inverse Contrast" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9]">
            <span className="font-light block tracking-tight text-gray-600">Dry Wall</span>
            <span className="font-black block tracking-tight">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 3: The Outline Accent (Solid + Transparent Outline) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={3} title="The Outline Accent" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9] font-black">
            <span className="block tracking-tight">Dry Wall</span>
            <span 
              className="block tracking-tight text-transparent"
              style={{ WebkitTextStroke: "3px #111827" }}
            >
              Experts
            </span>
          </h1>
        </div>
      </section>

      {/* Option 4: The Ghost Outline (Transparent Outline + Solid) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={4} title="The Ghost Outline" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9] font-black">
            <span 
              className="block tracking-tight text-transparent"
              style={{ WebkitTextStroke: "3px #7C3AED" }}
            >
              Dry Wall
            </span>
            <span className="block tracking-tight mt-[-10px]">
              Experts
            </span>
          </h1>
        </div>
      </section>

      {/* Option 5: The Modern Pop (Dark + Vibrant Purple Accent) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={5} title="The Modern Pop" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tight">
            <span className="block text-gray-900">Dry Wall</span>
            <span className="block text-[#7C3AED]">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 6: The Elegant Serif (Sans-serif + Serif Italic) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={6} title="The Elegant Serif" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9]">
            <span className="font-bold block tracking-tight">Dry Wall</span>
            <span className={`${cormorant.className} italic block font-semibold text-[#7C3AED]`}>
              Experts
            </span>
          </h1>
        </div>
      </section>

      {/* Option 7: The Corporate Wide (All Caps + Standard) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={7} title="The Corporate Wide" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] text-gray-900 leading-[0.9]">
            <span className="font-extrabold block tracking-[0.2em] uppercase text-5xl md:text-7xl mb-4">DRY WALL</span>
            <span className="font-bold block tracking-tight text-[#7C3AED]">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 8: The Overlap (Massive + Smaller overlapping) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={8} title="The Overlap" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-gray-900 leading-none relative">
            <span className="font-black block text-[8rem] md:text-[10rem] tracking-tighter opacity-10">
              DRYWALL
            </span>
            <span className="font-bold block text-6xl md:text-8xl tracking-tight absolute inset-0 flex items-center justify-center">
              Experts
            </span>
          </h1>
        </div>
      </section>

      {/* Option 9: The Gradient (Dark + Purple to Orange gradient) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={9} title="The Gradient" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tight">
            <span className="block text-gray-900">Dry Wall</span>
            <span className="block bg-gradient-to-r from-[#7C3AED] to-orange-400 bg-clip-text text-transparent">
              Experts
            </span>
          </h1>
        </div>
      </section>

      {/* Option 10: The Split Muted (Dark + Soft Gray) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <OptionHeader number={10} title="The Split Muted" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-[8rem] font-black leading-[0.9] tracking-tight">
            <span className="block text-gray-900">Dry Wall</span>
            <span className="block text-gray-400">Experts</span>
          </h1>
        </div>
      </section>
      
    </main>
  );
}
