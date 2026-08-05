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

const f1 = Space_Grotesk({ subsets: ["latin"], weight: ["700"] });
const f2 = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const f3 = Outfit({ subsets: ["latin"], weight: ["700", "900"] });
const f4 = Oswald({ subsets: ["latin"], weight: ["700"] });
const f5 = Anton({ subsets: ["latin"], weight: ["400"] });
const f6 = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"] });
const f7 = Cinzel({ subsets: ["latin"], weight: ["700", "900"] });
const f8 = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });
const f9 = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const f10 = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });

const fonts = [
  { name: "Space Grotesk (Current)", className: f1.className },
  { name: "Syne", className: f2.className },
  { name: "Outfit", className: f3.className },
  { name: "Oswald", className: f4.className },
  { name: "Anton", className: f5.className },
  { name: "Playfair Display", className: f6.className },
  { name: "Cinzel", className: f7.className },
  { name: "Montserrat", className: f8.className },
  { name: "Bebas Neue", className: f9.className },
  { name: "Plus Jakarta Sans", className: f10.className },
];

export default function FontTestPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] p-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold text-black mb-2">Typography Sandbox</h1>
          <p className="text-gray-500">10 premium fonts rendered side-by-side using the exact Hero text.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {fonts.map((font, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-12">
                <div className="text-[#7C3AED] text-xs font-bold uppercase tracking-widest mb-6">Option {index + 1}</div>
                <div className={`text-5xl font-black text-black leading-tight tracking-tighter ${font.className}`}>
                  Dry wall &<br/>general contractor
                </div>
              </div>
              <div className="pt-6 border-t border-gray-100">
                <span className="bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 rounded-full">
                  {font.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
