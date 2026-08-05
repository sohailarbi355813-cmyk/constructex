import { 
  Space_Grotesk, 
  Syne, 
  Outfit, 
  Oswald, 
  Anton, 
  Playfair_Display,
  Cinzel,
  Montserrat,
  Bebas_Neue,
  Plus_Jakarta_Sans
} from "next/font/google";

const f1 = Space_Grotesk({ subsets: ["latin"], weight: ["400", "700"] });
const f2 = Syne({ subsets: ["latin"], weight: ["400", "700", "800"] });
const f3 = Outfit({ subsets: ["latin"], weight: ["300", "700", "900"] });
const f4 = Oswald({ subsets: ["latin"], weight: ["300", "700"] });
const f5 = Anton({ subsets: ["latin"], weight: ["400"] });
const f6 = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });
const f7 = Cinzel({ subsets: ["latin"], weight: ["400", "700", "900"] });
const f8 = Montserrat({ subsets: ["latin"], weight: ["300", "700", "900"] });
const f9 = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const f10 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function FontTestPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-black mb-2">Typography & Layout Sandbox</h1>
          <p className="text-gray-500">10 premium fonts tested with entirely different alignments, spacing, and styling treatments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Option 1: Space Grotesk - The Original (Centered, Tight) */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">Option 1: Modern Centered</div>
              <div className={`text-4xl md:text-5xl font-black text-black leading-none tracking-tighter text-center ${f1.className}`}>
                Dry wall &<br/>general contractor
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-start">Space Grotesk</span>
          </div>

          {/* Option 2: Syne - Ultra-Bold Left Aligned with Color Pop */}
          <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">Option 2: Brutalist Left</div>
              <div className={`text-4xl md:text-5xl font-extrabold text-white leading-[0.9] tracking-tight text-left ${f2.className}`}>
                <span className="text-[#7C3AED]">DRY WALL &</span><br/>GENERAL CONTRACTOR
              </div>
            </div>
            <span className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full self-start">Syne</span>
          </div>

          {/* Option 3: Playfair - Elegant Right Aligned Serif + Italic */}
          <div className="bg-[#F5F5F0] rounded-3xl p-8 border border-[#E5E5DF] shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6 text-right">Option 3: Editorial Right</div>
              <div className={`text-5xl md:text-6xl font-black text-[#1C1917] leading-tight text-right ${f6.className}`}>
                Dry wall &<br/><span className="italic font-normal text-[#7C3AED]">general contractor</span>
              </div>
            </div>
            <span className="bg-white border border-[#E5E5DF] text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-end">Playfair Display</span>
          </div>

          {/* Option 4: Outfit - Wide Tracking Minimalist */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-10 text-center">Option 4: Minimalist Wide</div>
              <div className={`text-3xl md:text-4xl font-light text-black leading-relaxed tracking-[0.2em] uppercase text-center ${f3.className}`}>
                Dry wall &<br/><span className="font-black text-[#7C3AED]">General Contractor</span>
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-center">Outfit</span>
          </div>

          {/* Option 5: Anton - Impact Poster Style */}
          <div className="bg-[#7C3AED] rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-6">Option 5: Impact Poster</div>
              <div className={`text-5xl md:text-7xl font-normal text-white leading-[0.85] tracking-normal uppercase text-left ${f5.className}`}>
                DRY WALL &<br/>GENERAL<br/><span className="text-[#F59E0B]">CONTRACTOR</span>
              </div>
            </div>
            <span className="bg-black/20 text-white text-sm font-medium px-4 py-2 rounded-full self-start">Anton</span>
          </div>

          {/* Option 6: Cinzel - Luxury Cinematic Center */}
          <div className="bg-black rounded-3xl p-8 shadow-xl flex flex-col justify-between h-full border border-[#333]">
            <div className="mb-12">
              <div className="text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-10 text-center">Option 6: Luxury Cinematic</div>
              <div className={`text-3xl md:text-5xl font-black text-white leading-snug tracking-wider text-center ${f7.className}`}>
                DRY WALL &<br/>
                <span className="font-normal tracking-[0.3em] text-sm md:text-base text-gray-400 block mt-4">GENERAL CONTRACTOR</span>
              </div>
            </div>
            <span className="bg-[#111] border border-[#333] text-gray-400 text-sm font-medium px-4 py-2 rounded-full self-center">Cinzel</span>
          </div>

          {/* Option 7: Oswald - Vertical Condensed Block */}
          <div className="bg-white rounded-3xl p-8 border-l-8 border-[#7C3AED] shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">Option 7: Industrial Block</div>
              <div className={`text-5xl md:text-7xl font-bold text-black leading-[0.9] tracking-tighter uppercase text-left ${f4.className}`}>
                DRYWALL <br/>
                & GENERAL <br/>
                CONTRACTOR
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-start">Oswald</span>
          </div>

          {/* Option 8: Montserrat - High Contrast Weights */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/10 rounded-bl-full" />
            <div className="mb-12 relative z-10">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">Option 8: High Contrast Weights</div>
              <div className={`text-4xl md:text-5xl text-black leading-tight tracking-tight text-left ${f8.className}`}>
                <span className="font-light">Dry wall &</span><br/>
                <span className="font-black">General Contractor</span>
              </div>
            </div>
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-start">Montserrat</span>
          </div>

          {/* Option 9: Bebas Neue - Giant Offset Baseline */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">Option 9: Bold Offset Baseline</div>
              <div className={`text-6xl md:text-8xl text-black leading-[0.8] tracking-normal uppercase text-left ${f9.className}`}>
                DRYWALL <span className="text-3xl text-[#7C3AED] align-top">&</span><br/>
                <span className="pl-12">CONTRACTOR</span>
              </div>
            </div>
            <span className="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-start">Bebas Neue</span>
          </div>

          {/* Option 10: Plus Jakarta Sans - Clean Corporate Tech */}
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl p-8 border border-white shadow-2xl flex flex-col justify-between h-full">
            <div className="mb-12">
              <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6 text-center">Option 10: Clean Corporate Tech</div>
              <div className={`flex flex-col items-center text-center ${f10.className}`}>
                <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-3 py-1 rounded-full text-sm font-bold mb-4 tracking-wide">DRYWALL &</span>
                <span className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  General Contractor
                </span>
              </div>
            </div>
            <span className="bg-white shadow-sm text-gray-600 text-sm font-medium px-4 py-2 rounded-full self-center">Plus Jakarta Sans</span>
          </div>

        </div>
      </div>
    </div>
  );
}
