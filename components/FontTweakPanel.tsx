"use client";

import { useState, useEffect } from "react";

const PREMIUM_FONTS = [
  { name: "Space Grotesk", url: "Space+Grotesk:wght@400;700" },
  { name: "Syne", url: "Syne:wght@400;700;800" },
  { name: "Outfit", url: "Outfit:wght@400;700;900" },
  { name: "Oswald", url: "Oswald:wght@400;700" },
  { name: "Anton", url: "Anton" },
  { name: "Playfair Display", url: "Playfair+Display:wght@400;700;900" },
  { name: "Cinzel", url: "Cinzel:wght@400;700;900" },
  { name: "Montserrat", url: "Montserrat:wght@400;700;900" },
  { name: "Bebas Neue", url: "Bebas+Neue" },
  { name: "Plus Jakarta Sans", url: "Plus+Jakarta+Sans:wght@400;700;800" }
];

export default function FontTweakPanel() {
  const [activeFont, setActiveFont] = useState("Space Grotesk");
  const [isOpen, setIsOpen] = useState(true);

  // Rendering tweak panel for live design review

  useEffect(() => {
    // Inject the selected font stylesheet dynamically
    const fontUrl = PREMIUM_FONTS.find(f => f.name === activeFont)?.url;
    if (!fontUrl) return;

    const linkId = `dynamic-font-${activeFont.replace(/\s+/g, "")}`;
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontUrl}&display=swap`;
      document.head.appendChild(link);
    }

    // Override the CSS variable used by Tailwind's font-heading
    document.documentElement.style.setProperty("--font-syne", `"${activeFont}", sans-serif`);
    
  }, [activeFont]);

  return (
    <div className={`fixed bottom-4 left-4 z-[9999] bg-white/90 backdrop-blur-xl border border-[#7C3AED]/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'w-64' : 'w-14 h-14'}`}>
      
      {/* Header / Toggle */}
      <div 
        className="flex items-center justify-between bg-[#7C3AED] text-white px-4 py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-bold tracking-widest text-xs uppercase ${!isOpen && 'hidden'}`}>Font Tweaker</span>
        <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M19 9l-7 7-7-7" : "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Font List */}
      {isOpen && (
        <div className="max-h-80 overflow-y-auto p-2">
          {PREMIUM_FONTS.map(font => (
            <button
              key={font.name}
              onClick={() => setActiveFont(font.name)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${
                activeFont === font.name 
                  ? 'bg-[#7C3AED]/10 text-[#7C3AED] font-bold' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {font.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
