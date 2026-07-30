"use client";

import { Project } from "@/data/projects";

interface BookingSectionProps {
  project: Project;
}

export default function BookingSection({ project }: BookingSectionProps) {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      id="contact"
    >
      {/* Layered glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: project.gradient }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[150px] opacity-25"
          style={{ background: project.themeColor }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className="glass-card rounded-3xl overflow-hidden"
          style={{ border: `1px solid ${project.themeColor}30` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: info */}
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="w-8 h-px"
                  style={{ backgroundColor: project.themeColor }}
                />
                <span
                  className="text-xs font-bold tracking-[0.3em] uppercase"
                  style={{ color: project.themeColor }}
                >
                  Pricing
                </span>
              </div>

              <div className="mb-2">
                <span
                  className="text-5xl md:text-6xl font-black"
                  style={{ color: project.themeColor }}
                >
                  {project.bookingSection.price}
                </span>
              </div>
              <p className="text-sm text-white/40 tracking-wide mb-10">
                {project.bookingSection.unit}
              </p>

              {/* Highlights */}
              <ul className="space-y-4 mb-10">
                {project.bookingSection.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px]"
                      style={{ backgroundColor: `${project.themeColor}25`, color: project.themeColor }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Promise + warranty */}
              <div className="space-y-4 pt-6 border-t border-white/8">
                <div>
                  <div className="text-xs tracking-widest uppercase text-white/30 mb-1">
                    Delivery Promise
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {project.bookingSection.deliveryPromise}
                  </p>
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-white/30 mb-1">
                    Warranty
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {project.bookingSection.warrantyPolicy}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div
              className="p-10 md:p-14 border-t lg:border-t-0 lg:border-l"
              style={{ borderColor: `${project.themeColor}20` }}
            >
              <h3 className="text-2xl font-black text-white mb-8">
                Request Your<br />
                <span style={{ color: project.themeColor }}>Free Estimate</span>
              </h3>

              <form
                id="estimate-form"
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-transparent text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-transparent text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-2"
                  >
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 focus:border-[#686B6C] focus:outline-none focus:ring-1 focus:ring-[#686B6C] text-white placeholder-white/30 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="framing">Structural Framing</option>
                    <option value="drywall">Level-5 Drywall</option>
                    <option value="renovation">Light Renovation</option>
                    <option value="full">Full Package</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest uppercase text-white/40 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your project scope, location, and timeline..."
                    className="w-full px-4 py-3 rounded-xl glass-card border border-white/10 bg-transparent text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <button
                  id="submit-estimate"
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold tracking-widest uppercase text-sm relative overflow-hidden group hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  style={{ backgroundColor: project.themeColor }}
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
                  <span className="relative">Send Estimate Request →</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
