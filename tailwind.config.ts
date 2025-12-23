import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#e6f7fc",
          100: "#cceff9",
          200: "#99dff3",
          300: "#66cfed",
          400: "#33bfe7",
          500: "#00A8E8",
          600: "#0086ba",
          700: "#00658b",
          800: "#00435d",
          900: "#00222e",
        },
        coral: {
          50: "#fff1ee",
          100: "#ffe3dd",
          200: "#ffc7bb",
          300: "#ffab99",
          400: "#ff8f77",
          500: "#FF7A59",
          600: "#cc6247",
          700: "#994935",
          800: "#663124",
          900: "#331812",
        },
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        heading: ["Outfit", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 168, 232, 0.1)",
        "card-hover": "0 8px 30px rgba(0, 168, 232, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
