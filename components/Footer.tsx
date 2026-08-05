import ConstructexLogo from "@/components/ConstructexLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-20 pb-10 overflow-hidden border-t border-luxury-border">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-[#7C3AED]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <ConstructexLogo size={32} className="text-[#7C3AED]" />
              <span className="text-xl font-bold font-heading tracking-widest text-[#7C3AED]">
                CONSTRUCTEX
              </span>
            </div>
            <p className="text-sm text-luxury-paragraph leading-relaxed mb-8">
              Premium drywall, structural framing, and architectural renovation across Canada. Precision engineered.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-luxury-white mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm text-luxury-paragraph">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Level 5 Drywall</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Metal Stud Framing</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Acoustic Ceilings</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Insulation Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-luxury-white mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-luxury-paragraph">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Our Projects</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-luxury-white mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-luxury-paragraph">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-luxury-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luxury-muted">
            &copy; {year} Constructex Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
