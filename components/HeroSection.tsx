"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image positioned to bottom to show greenery */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/landing-bg.png')" }}
      />

      {/* Atmospheric background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Bottom gradient mask to hide the Gemini logo and blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-16 bg-[#0B0E11] blur-xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-16 bg-[#0B0E11] blur-xl pointer-events-none" />

    </section>
  );
}
