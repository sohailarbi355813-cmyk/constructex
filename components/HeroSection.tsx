"use client";

export default function HeroSection() {
  const headline1 = ["We", "Build", "The"];
  const headline2 = ["Invisible", "Backbone."];

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

      {/* Atmospheric background overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/50" />

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card border border-[#686B6C]/20"
        >
          <span className="w-2 h-2 rounded-full bg-[#9A9D9E]" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#9A9D9E]">
            Structural Framing & Drywall Excellence
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.9] tracking-tight mb-6"
        >
          <div className="flex flex-wrap justify-center gap-x-[0.3em] mb-2">
            {headline1.map((word, i) => (
              <span
                key={i}
                className="inline-block text-white"
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-[0.2em]">
            {headline2.map((word, i) => (
              <span
                key={i}
                className={`inline-block ${
                  i === headline2.length - 1 ? "gradient-text text-glow" : "text-white"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-lg md:text-xl text-white/70 font-light tracking-wide max-w-2xl mx-auto mb-12"
        >
          Heavy-gauge steel framing. Kiln-dried timber assemblies. Level-5
          drywall finishes. Engineered for permanence.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#showcase"
            id="hero-cta-showcase"
            className="group relative px-8 py-4 rounded-full overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#3A3D3E] to-[#686B6C] rounded-full" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#686B6C] to-[#9A9D9E] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <span className="relative flex items-center gap-2 text-white font-semibold tracking-widest uppercase text-sm">
              View Showcase
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            id="hero-cta-contact"
            className="px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-[#686B6C]/50 font-medium tracking-widest uppercase text-sm transition-all duration-300"
          >
            Request Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
