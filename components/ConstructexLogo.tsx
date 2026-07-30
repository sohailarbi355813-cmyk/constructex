"use client";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function ConstructexLogo({
  className = "",
  size = 40,
  showText = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Double-C Wave Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CONSTRUCTEX logo mark"
      >
        {/* Outer C arc */}
        <path
          d="M72 18 C72 18 38 10 20 35 C6 54 12 78 30 88 C48 98 68 92 78 82"
          stroke="#686B6C"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        {/* Inner C arc — the double wave */}
        <path
          d="M65 32 C65 32 44 26 33 44 C24 58 30 74 44 80 C54 84 64 80 70 72"
          stroke="#9A9D9E"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Subtle inner glow dot */}
        <circle cx="50" cy="50" r="3" fill="#686B6C" opacity="0.5" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-black tracking-[0.12em] text-white"
            style={{ fontSize: size * 0.45 }}
          >
            CONSTRUCTEX
          </span>
          <div
            className="flex items-center gap-1 mt-[2px]"
            style={{ fontSize: size * 0.22 }}
          >
            <span className="w-4 h-px bg-[#686B6C] inline-block" />
            <span className="tracking-[0.2em] text-[#9A9D9E] font-medium uppercase">
              Drywall • Framing
            </span>
            <span className="w-4 h-px bg-[#686B6C] inline-block" />
          </div>
        </div>
      )}
    </div>
  );
}
