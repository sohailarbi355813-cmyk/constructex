"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image — covers the full viewport */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Top gradient — masks Gemini star logos at the top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0E11] to-transparent pointer-events-none" />

      {/* Bottom gradient — blends into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none" />
    </section>
  );
}
