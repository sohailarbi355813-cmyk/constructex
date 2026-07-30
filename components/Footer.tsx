"use client";

import ConstructexLogo from "./ConstructexLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-white/5 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <ConstructexLogo size={38} className="mb-4" />
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Precision structural framing and Level-5 drywall. Engineered
              interiors built to architectural perfection.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              {[
                "Structural Steel Framing",
                "Precision Wood Framing",
                "Level-5 Drywall Finishing",
                "Architectural Light Renovation",
                "Acoustic Partition Systems",
              ].map((s) => (
                <li key={s} className="hover:text-white/70 transition-colors cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.25em] uppercase text-white/30 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@constructex.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 000-0000
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Licensed & Operating<br />Across the Region</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 tracking-widest">
            © {year} CONSTRUCTEX. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25 tracking-wide">
            <span className="hover:text-white/50 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white/50 transition-colors cursor-pointer">Terms of Service</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-slow" />
              Licensed & Insured
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
