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
          950: "#451a03",
        },
        terroir: {
          50: "#fbfaf8",
          100: "#f3efe8",
          200: "#e5ded4",
          300: "#d2c5b5",
          400: "#b9a692",
          500: "#9c8873",
          600: "#816d5a",
          700: "#695748",
          750: "#57483b",
          800: "#4a3d32",
          850: "#382d24",
          900: "#2a221b",
          950: "#18130f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
