"use client";

import Navbar from "@/components/Navbar";

const OptionHeader = ({ number, title }: { number: number; title: string }) => (
  <div className="absolute top-10 left-10 z-50">
    <div className="bg-[#7C3AED] text-white px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg border border-[#7C3AED]/50">
      <p className="text-xs md:text-sm font-semibold opacity-80 uppercase tracking-wider md:mb-1">Option {number}</p>
      <p className="text-sm md:text-xl font-bold">{title}</p>
    </div>
  </div>
);

export default function HeroTestPage() {
  return (
    <main className="relative min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      {/* Option 1: Bulky Top, Light Bottom (Centered, Tightly Stacked) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={1} title="Bulky Top, Light Bottom" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-gray-900 leading-[0.85] flex flex-col items-center">
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter">Dry Wall</span>
            <span className="font-light text-5xl md:text-7xl block tracking-wide mt-2">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 2: Light Top, Bulky Bottom (Centered, Tightly Stacked) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={2} title="Light Top, Bulky Bottom" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-gray-900 leading-[0.85] flex flex-col items-center">
            <span className="font-light text-5xl md:text-7xl block tracking-wide mb-2">Dry Wall</span>
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 3: Massive Bulky + Tiny Spaced Light (Centered) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={3} title="Massive Bulky + Spaced Light" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-gray-900 leading-none flex flex-col items-center">
            <span className="font-black text-[5.5rem] md:text-[9rem] block tracking-tighter">Dry Wall</span>
            <span className="font-light text-xl md:text-3xl block tracking-[0.5em] uppercase text-gray-500 mt-4 ml-3">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 4: Tiny Spaced Light + Massive Bulky (Centered) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={4} title="Spaced Light + Massive Bulky" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-gray-900 leading-none flex flex-col items-center">
            <span className="font-light text-xl md:text-3xl block tracking-[0.5em] uppercase text-gray-500 mb-4 ml-3">Dry Wall</span>
            <span className="font-black text-[5.5rem] md:text-[9rem] block tracking-tighter">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 5: Bulky Top, Light Bottom (Left Aligned for mobile elegance) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={5} title="Left Aligned (Bulky Top)" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 px-6 max-w-5xl mx-auto w-full flex justify-start md:justify-center">
          <h1 className="text-gray-900 leading-[0.85] text-left">
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter">Dry Wall</span>
            <span className="font-light text-5xl md:text-7xl block tracking-wide mt-2 text-gray-500">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 6: Bulky Bottom, Light Top (Left Aligned) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={6} title="Left Aligned (Light Top)" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 px-6 max-w-5xl mx-auto w-full flex justify-start md:justify-center">
          <h1 className="text-gray-900 leading-[0.85] text-left">
            <span className="font-light text-5xl md:text-7xl block tracking-wide mb-2 text-gray-500">Dry Wall</span>
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 7: Overlapping Interlock (Bulky Top, Light overlapping from below) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={7} title="Overlapping Interlock" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="text-gray-900 leading-none flex flex-col items-center">
            <span className="font-black text-[5.5rem] md:text-[9rem] block tracking-tighter relative z-0">Dry Wall</span>
            <span className="font-light text-6xl md:text-[7rem] block tracking-tight -mt-10 md:-mt-16 bg-white/50 backdrop-blur-md px-4 rounded-3xl z-10 text-[#7C3AED]">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 8: Highlight Light Word (Bulky Dark, Light Purple) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={8} title="Bulky Dark / Light Purple" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="leading-[0.85] flex flex-col items-center">
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter text-gray-900">Dry Wall</span>
            <span className="font-light text-6xl md:text-7xl block tracking-tight mt-2 text-[#7C3AED]">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 9: Highlight Bulky Word (Light Dark, Bulky Purple) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-8 border-gray-900">
        <OptionHeader number={9} title="Light Dark / Bulky Purple" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">
          <h1 className="leading-[0.85] flex flex-col items-center">
            <span className="font-light text-6xl md:text-7xl block tracking-tight mb-2 text-gray-600">Dry Wall</span>
            <span className="font-black text-7xl md:text-[8rem] block tracking-tighter text-[#7C3AED]">Experts</span>
          </h1>
        </div>
      </section>

      {/* Option 10: The Inline Flex (Stacked but tightly grouped like a logo) */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <OptionHeader number={10} title="The Logo Stack" />
        <div className="absolute inset-0 bg-[url('/images/hero_bg_mobile.jpeg')] md:bg-[url('/images/hero_bg_desktop.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px]" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full flex justify-center">
          <h1 className="text-gray-900 text-left border-l-8 border-[#7C3AED] pl-6 py-2">
            <span className="font-black text-6xl md:text-8xl block tracking-tighter leading-none mb-2">Dry Wall</span>
            <span className="font-light text-5xl md:text-7xl block tracking-wide leading-none text-gray-500">Experts</span>
          </h1>
        </div>
      </section>
      
    </main>
  );
}
