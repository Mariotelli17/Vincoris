import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          500: "#3A9964",
          600: "#2d7a4f",
          700: "#1f5a38",
          900: "#0f2e1c"
        }
      }
    },
  },
  plugins: [],
};

export default config;
