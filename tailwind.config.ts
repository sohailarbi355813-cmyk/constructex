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
          black: "#000000",
          grey: "#686B6C",
          white: "#FFFFFF",
          "grey-light": "#9A9D9E",
          "grey-dark": "#3A3D3E",
          obsidian: "#0A0A0A",
          "slate-dark": "#111111",
          "slate-mid": "#1A1A1A",
          "slate-surface": "#141414",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #000000 0%, #111111 100%)",
        "card-glow":
          "radial-gradient(ellipse at center, rgba(104,107,108,0.15) 0%, transparent 70%)",
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
