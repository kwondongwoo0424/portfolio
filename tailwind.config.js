/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          "0%": {
            transform: "scale(1)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(2)",
            opacity: "0.2",
          },
          "100%": {
            transform: "scale(2.2)",
            opacity: "0",
          },
        },
      },
      animation: {
        breathe: "breathe 1.5s ease-out infinite",
      },
    },
  },
  plugins: [],
};
