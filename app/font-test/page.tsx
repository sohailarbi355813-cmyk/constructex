import { 
  Space_Grotesk, Syne, Outfit, Oswald, Anton, Playfair_Display, Cinzel, Montserrat, Bebas_Neue, Plus_Jakarta_Sans,
  Unbounded, Bricolage_Grotesque, Righteous, Abril_Fatface, Eczar, Pridi, Yeseva_One, Francois_One, Changa_One, Bungee
} from "next/font/google";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

// Existing 10 Premium Fonts
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

// 10 New Non-Conventional/Expressive Fonts
const f11 = Unbounded({ subsets: ["latin"], weight: ["400", "700", "900"] });
const f12 = Bricolage_Grotesque({ subsets: ["latin"], weight: ["400", "700", "800"] });
const f13 = Righteous({ subsets: ["latin"], weight: ["400"] });
const f14 = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });
const f15 = Eczar({ subsets: ["latin"], weight: ["400", "700", "800"] });
const f16 = Pridi({ subsets: ["latin"], weight: ["400", "700"] });
const f17 = Yeseva_One({ subsets: ["latin"], weight: ["400"] });
const f18 = Francois_One({ subsets: ["latin"], weight: ["400"] });
const f19 = Changa_One({ subsets: ["latin"], weight: ["400"], style: ["normal", "italic"] });
const f20 = Bungee({ subsets: ["latin"], weight: ["400"] });

export default function FontTestPage() {
  const layouts = [
    // 1-10: Original Layouts
    { name: "Space Grotesk (Modern Centered)", font: f1, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f1.className}`}>
        <div className="text-6xl font-black text-black leading-none tracking-tighter">Dry wall &<br/>general contractor</div>
      </div>
    )},
    { name: "Syne (Brutalist Left)", font: f2, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 ${f2.className}`}>
        <div className="text-6xl font-extrabold text-[#7C3AED] leading-[0.9] tracking-tight">DRY WALL &</div>
        <div className="text-6xl font-extrabold text-black leading-[0.9] tracking-tight">GENERAL CONTRACTOR</div>
      </div>
    )},
    { name: "Outfit (Minimalist Wide)", font: f3, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f3.className}`}>
        <div className="text-4xl font-light text-black leading-relaxed tracking-[0.2em] uppercase">
          Dry wall &<br/><span className="font-black text-[#7C3AED]">General Contractor</span>
        </div>
      </div>
    )},
    { name: "Oswald (Industrial Block)", font: f4, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 border-l-8 border-[#7C3AED] ${f4.className}`}>
        <div className="text-7xl font-bold text-black leading-[0.9] tracking-tighter uppercase">DRYWALL <br/>& GENERAL <br/>CONTRACTOR</div>
      </div>
    )},
    { name: "Anton (Impact Poster)", font: f5, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 bg-[#7C3AED] ${f5.className}`}>
        <div className="text-8xl font-normal text-white leading-[0.85] tracking-normal uppercase">DRY WALL &<br/>GENERAL<br/><span className="text-[#F59E0B]">CONTRACTOR</span></div>
      </div>
    )},
    { name: "Playfair Display (Editorial Right)", font: f6, hero: (
      <div className={`flex flex-col items-end justify-center min-h-[600px] text-right px-12 bg-[#F5F5F0] ${f6.className}`}>
        <div className="text-7xl font-black text-[#1C1917] leading-tight">Dry wall &<br/><span className="italic font-normal text-[#7C3AED]">general contractor</span></div>
      </div>
    )},
    { name: "Cinzel (Luxury Cinematic)", font: f7, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center bg-black ${f7.className}`}>
        <div className="text-6xl font-black text-white leading-snug tracking-wider">DRY WALL &<br/><span className="font-normal tracking-[0.3em] text-2xl text-gray-400 block mt-4">GENERAL CONTRACTOR</span></div>
      </div>
    )},
    { name: "Montserrat (High Contrast)", font: f8, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 ${f8.className}`}>
        <div className="text-6xl text-black leading-tight tracking-tight"><span className="font-light">Dry wall &</span><br/><span className="font-black">General Contractor</span></div>
      </div>
    )},
    { name: "Bebas Neue (Giant Offset)", font: f9, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 ${f9.className}`}>
        <div className="text-9xl text-black leading-[0.8] tracking-normal uppercase">DRYWALL <span className="text-5xl text-[#7C3AED] align-top">&</span><br/><span className="pl-24">CONTRACTOR</span></div>
      </div>
    )},
    { name: "Plus Jakarta Sans (Corporate Tech)", font: f10, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f10.className}`}>
        <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-4 py-2 rounded-full text-lg font-bold mb-6 tracking-wide">DRYWALL &</span>
        <div className="text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">General Contractor</div>
      </div>
    )},
    
    // 11-20: New Expressive / Wild Fonts
    { name: "Unbounded (Wide Display)", font: f11, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 ${f11.className}`}>
        <div className="text-5xl font-black text-black leading-[1.1] tracking-wide uppercase"><span className="text-outline">DRY</span> WALL &<br/>GENERAL CONTRACTOR</div>
      </div>
    )},
    { name: "Bricolage Grotesque (Variable)", font: f12, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f12.className}`}>
        <div className="text-7xl font-extrabold text-black leading-[0.9] tracking-tighter">Dry wall &<br/><span className="text-[#7C3AED]">general contractor</span></div>
      </div>
    )},
    { name: "Righteous (Retro Tech)", font: f13, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 bg-gray-900 ${f13.className}`}>
        <div className="text-7xl font-normal text-white leading-tight tracking-normal">DRY WALL &<br/><span className="text-[#F59E0B]">GENERAL CONTRACTOR</span></div>
      </div>
    )},
    { name: "Abril Fatface (Heavy Serif)", font: f14, hero: (
      <div className={`flex flex-col items-end justify-center min-h-[600px] text-right px-12 ${f14.className}`}>
        <div className="text-7xl font-normal text-black leading-[1.1] tracking-normal">Dry wall &<br/>general contractor.</div>
      </div>
    )},
    { name: "Eczar (Expressive Serif)", font: f15, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f15.className}`}>
        <div className="text-6xl font-extrabold text-[#7C3AED] leading-tight tracking-tight">Dry wall &<br/>General Contractor</div>
      </div>
    )},
    { name: "Pridi (Thai Serif Slab)", font: f16, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 ${f16.className}`}>
        <div className="text-5xl font-bold text-black leading-snug tracking-normal uppercase border-l-4 border-black pl-8">DRY WALL &<br/>GENERAL CONTRACTOR</div>
      </div>
    )},
    { name: "Yeseva One (Feminine Serif)", font: f17, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center bg-[#FDFBF7] ${f17.className}`}>
        <div className="text-6xl font-normal text-gray-800 leading-[1.2] tracking-tight">Dry wall &<br/>general contractor</div>
      </div>
    )},
    { name: "Francois One (Clean Gothic)", font: f18, hero: (
      <div className={`flex flex-col items-start justify-center min-h-[600px] text-left px-12 bg-[#7C3AED] ${f18.className}`}>
        <div className="text-7xl font-normal text-white leading-none tracking-normal uppercase">DRYWALL &<br/>GENERAL<br/>CONTRACTOR</div>
      </div>
    )},
    { name: "Changa One (Chunky Block)", font: f19, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center bg-black ${f19.className}`}>
        <div className="text-7xl font-normal text-[#F59E0B] leading-[1.1] tracking-wide uppercase italic">DRYWALL &<br/>GENERAL CONTRACTOR</div>
      </div>
    )},
    { name: "Bungee (Urban Signage)", font: f20, hero: (
      <div className={`flex flex-col items-center justify-center min-h-[600px] text-center ${f20.className}`}>
        <div className="text-5xl font-normal text-black leading-tight tracking-normal uppercase">DRY WALL &<br/>GENERAL CONTRACTOR</div>
      </div>
    )}
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-[2000px] mx-auto">
        <div className="mb-12 border-b border-gray-700 pb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Full Page Typography Matrix</h1>
          <p className="text-gray-400">20 full landing page layouts scaled down to 40% size to view them all side-by-side.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-12 gap-y-24">
          {layouts.map((layout, i) => (
            <div key={i} className="flex flex-col">
              <div className="text-[#F59E0B] font-bold uppercase tracking-widest mb-4 flex justify-between">
                <span>Option {i + 1}</span>
                <span className="text-white">{layout.name}</span>
              </div>
              
              {/* Massive outer container to clip the zoomed page */}
              <div className="relative w-full aspect-[9/16] bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
                
                {/* Scaled Inner Container */}
                <div 
                  className="absolute top-0 left-0 w-[250%] h-[250%] origin-top-left overflow-x-hidden bg-white"
                  style={{ 
                    transform: 'scale(0.4)',
                    '--font-syne': `'${layout.name.split(' ')[0]}', sans-serif`,
                    '--font-inter': `'${layout.name.split(' ')[0]}', sans-serif`
                  } as React.CSSProperties}
                >
                  <div className={layout.font.className}>
                    <Navbar isStatic={true} />
                    {layout.hero}
                    <ServicesSection />
                    <ProjectsSection />
                    <BookingSection />
                    <Footer />
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
