import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7B22CE",
          "purple-light": "#9B4DEB",
          "purple-glow": "#C084FC",
          "purple-dim": "#4A1480",
          obsidian: "#0B0E11",
          "slate-dark": "#0F172A",
          "slate-mid": "#1E293B",
          "slate-surface": "#1A1F2E",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(135deg, #0B0E11 0%, #150830 100%)",
        "card-glow":
          "radial-gradient(ellipse at center, rgba(123,34,206,0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
