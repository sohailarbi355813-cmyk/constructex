"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/landing-bg.png')" }}
      />

      {/* Optional dark overlay for contrast */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Top gradient overlay to mask Gemini logos */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0B0E11] to-transparent pointer-events-none" />
    </section>
  );
}
