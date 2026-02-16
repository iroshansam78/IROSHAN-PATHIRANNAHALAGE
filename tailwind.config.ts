import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          steel: "#2F4F6F",
          teal: "#0F766E",
          ink: "#1F2937",
          mist: "#F7FAFC",
          border: "#D1D5DB"
        }
      },
      fontFamily: {
        sans: ["'Public Sans'", "system-ui", "sans-serif"],
        heading: ["'Manrope'", "'Public Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        card: "0 10px 30px rgba(11, 31, 58, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
