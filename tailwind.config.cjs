/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tolopea: {
          900: "#0F0D13",
          400: "#2A2141",
        },
        white: {
          100: "#E1E1E6",
        },
        gray: {
          300: "#E1E1E6",
          400: "#D9D9D9",
          500: "#C4C4CC",
        },
      },
    },
  },
  plugins: [],
};
