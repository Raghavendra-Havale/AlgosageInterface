/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "rgb(20, 20, 21)",
        secondary: "rgb(29, 30, 31)",
        success: "#2a9c47",
        light: "rgb(110, 111, 111)",
      },
      // fontFamily: {
      //   sans: ["Graphik", "sans-serif"],
      //   serif: ["Merriweather", "serif"],
      // },
    },
  },
  plugins: [],
};
