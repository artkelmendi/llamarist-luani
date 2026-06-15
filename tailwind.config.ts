import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: {
          950: "#0a0908",
          900: "#0f0e0c",
          850: "#141210",
          800: "#1a1714",
          700: "#241f1a",
          600: "#2f2823",
        },
        gold: {
          DEFAULT: "#d8af6a",
          100: "#f6ecd8",
          200: "#ecd9b3",
          300: "#e0c389",
          400: "#d8af6a",
          500: "#c8964a",
          600: "#a9783a",
          700: "#7d572a",
        },
        cream: "#f4efe6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      letterSpacing: {
        luxe: "0.32em",
      },
      boxShadow: {
        gold: "0 24px 70px -28px rgba(216,175,106,0.5)",
        card: "0 30px 80px -40px rgba(0,0,0,0.9)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 8s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
