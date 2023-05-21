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
        blinking: {
          to: { visibility: "hidden" },
        },
        pulsing: {
          "50%": { opacity: 0.3 },
        },
      },
      animation: {
        blinking: "blinking 1s steps(2, start) infinite",
        pulsing: "pulsing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
