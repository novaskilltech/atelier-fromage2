import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cheese: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        terroir: {
          50: "#f7f7f6",
          100: "#eeebe6",
          200: "#ded8cf",
          300: "#c7bcaf",
          400: "#ac9c8c",
          500: "#948271",
          600: "#7b6b5c",
          700: "#63564a",
          800: "#52473e",
          900: "#453c35",
        }
      },
    },
  },
  plugins: [],
};
export default config;
