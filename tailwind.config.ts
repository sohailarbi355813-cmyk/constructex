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
        luxury: {
          primary: "#F5F5F0",
          secondary: "#FFFFFF",
          accent: "#7C3AED",
          hover: "#6D28D9",
          white: "#000000", /* inverted for text where luxury-white is used */
          paragraph: "#4B5563",
          muted: "#9CA3AF",
          border: "#E5E7EB",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-syne)", "sans-serif"],
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
