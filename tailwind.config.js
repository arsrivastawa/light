/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
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
      },
      fontFamily: {
        roboto: "'Poppins', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
      },
      animation: {
        zigZag1: "grd1 15s ease infinite",
        zigZag2: "grd2 15s ease infinite",
      },
    },
  },
  plugins: [],
};
