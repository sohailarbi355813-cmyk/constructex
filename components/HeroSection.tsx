"use client";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
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

      {/* Background Image — Mobile (9:16 portrait, 100% width = no side clipping) */}
      <div
        className="absolute inset-0 bg-no-repeat block md:hidden"
        style={{
          backgroundImage: "url('/landing-bg-mobile.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black/20" />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0E11] to-transparent pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0E11] to-transparent pointer-events-none" />

      {/* ── CONTENT OVERLAY ── */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-10 md:pb-14 px-6 md:px-16 gap-5">

        {/* Staggered headline — left, pushed to lower half */}
        <div
          className="flex flex-col leading-none select-none"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span
            className="text-3xl md:text-5xl font-light italic text-white/90"
            style={{ letterSpacing: "-0.01em" }}
          >
            Designing Space
          </span>

          <span
            className="text-3xl md:text-5xl font-light italic text-white/90 ml-8 md:ml-16"
            style={{ letterSpacing: "-0.01em" }}
          >
            that Endures
          </span>

          <span
            className="text-4xl md:text-7xl font-bold italic ml-20 md:ml-28"
            style={{
              letterSpacing: "-0.03em",
              lineHeight: 1,
              background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &
          </span>

          <span
            className="text-3xl md:text-5xl font-light italic text-white/90 ml-10 md:ml-14"
            style={{ letterSpacing: "-0.01em" }}
          >
            Inspires
          </span>
        </div>

        {/* CTA button — centered */}
        <div className="flex justify-center">
          <button
            className="group flex items-center gap-0 rounded-full overflow-hidden font-outfit font-semibold text-sm md:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "#6B21A8",
              paddingLeft: "1.5rem",
              boxShadow: "0 8px 32px rgba(107,33,168,0.45)",
            }}
          >
            <span className="text-white pr-4 py-3.5 tracking-wide">Get a Quote</span>
            <span
              className="flex items-center justify-center rounded-full my-1.5 mr-1.5 transition-all duration-300"
              style={{
                width: "2.4rem",
                height: "2.4rem",
                background: "rgba(255,255,255,1)",
                flexShrink: 0,
              }}
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="#6B21A8"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Trust badge — bottom-right corner */}
        <div className="flex justify-end">
          <div
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/20"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-xs font-medium tracking-wide">
              Trusted by millions of Canadian people
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
