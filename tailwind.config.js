/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      desktop: "880px",
    },
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
        poppins: "'Poppins', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      animation: {
        zigZag1: "grd1 15s ease infinite",
        zigZag2: "grd2 15s ease infinite",
      },
    },
  },
  plugins: [],
};
