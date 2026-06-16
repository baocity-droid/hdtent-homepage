import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          500: "#1d79c2",
          700: "#0c4f8a",
          900: "#08345f"
        },
        steel: {
          50: "#f6f8fa",
          100: "#e7edf2",
          500: "#667987",
          800: "#243746",
          950: "#111b24"
        }
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 27, 36, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
