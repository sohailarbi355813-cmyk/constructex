"use client";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/landing-bg.png')" }}
      />

      {/* Atmospheric background overlay (optional, but good for contrast with navbar) */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

    </section>
  );
}
