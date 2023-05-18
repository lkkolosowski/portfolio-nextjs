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
      },
      animation: {
        blinking: "blinking 1s steps(2, start) infinite",
      },
    },
  },
  plugins: [],
};
