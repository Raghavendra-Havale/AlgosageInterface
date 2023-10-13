/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
      },
      colors: {
        primary: "rgb(20, 20, 21)",
        secondary: "rgb(29, 30, 31)",
        success: "#2a9c47",
        yellow: "rgb(190, 151, 34)",
        purple: "rgb(147, 121, 184)",
        cyan: "rgb(77, 215, 232)",
        light: "rgb(110, 111, 111)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
