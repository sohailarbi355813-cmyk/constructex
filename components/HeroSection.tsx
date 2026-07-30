"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image — Desktop (landscape) */}
      <div
        className="absolute inset-0 bg-no-repeat hidden md:block"
        style={{
          backgroundImage: "url('/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Background Image — Mobile (9:16 portrait)
          100% auto = full width, no side clipping, image anchored at top */}
      <div
        className="absolute inset-0 bg-no-repeat block md:hidden"
        style={{
          backgroundImage: "url('/landing-bg-mobile.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/10" />

      {/* Top gradient — fades in from dark at top */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0E11] to-transparent pointer-events-none" />

      {/* Bottom gradient — deep multi-stop fade, no hard black cutoff
          Much taller on mobile so the image melts into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "45%",
          background:
            "linear-gradient(to top, #0B0E11 0%, #0B0E11 20%, rgba(11,14,17,0.85) 50%, rgba(11,14,17,0.4) 75%, transparent 100%)",
        }}
      />
    </section>
  );
}
