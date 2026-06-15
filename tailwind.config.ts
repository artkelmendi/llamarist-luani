import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "coal" = neutral surfaces. Light theme: 950 is the lightest (page bg),
        // lower numbers get gradually deeper for borders/fields.
        coal: {
          950: "#f4f2ec", // page background (warm off-white)
          900: "#ffffff", // cards / solid surfaces
          850: "#f7f5f0",
          800: "#efece4",
          700: "#e7e3d9", // soft borders
          600: "#d7d2c6", // stronger borders / rings
        },
        // "gold" = accent. Now a warm coral/orange ramp. 200 is intentionally
        // deep (used as accent text), 300/400 are the vivid fills.
        gold: {
          DEFAULT: "#ff6a3d",
          100: "#fff1ec",
          200: "#d2491a", // accent text on light
          300: "#e8542a", // strong coral (text + fills)
          400: "#ff6a3d", // primary coral (fills, borders, stars)
          500: "#f6531f",
          600: "#d8431a",
          700: "#b5340f",
        },
        // "cream" = primary foreground text (now dark ink for light theme).
        cream: "#1f242c",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
      },
      boxShadow: {
        gold: "0 18px 50px -20px rgba(255,106,61,0.45)",
        card: "0 24px 60px -32px rgba(31,36,44,0.22)",
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
