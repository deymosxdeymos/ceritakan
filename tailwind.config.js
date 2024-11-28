/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#544E92",
        // primary: "#5C56A094",
        secondary: "#B8E1DD66",
        tertiary: "#E3DFF1",
        gradient: "#658299",
      },
      fontFamily: {
        // Add your custom fonts
        sans: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      scrollX: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
    animation: {
      pause: "none",
    },
  },
  plugins: [],
};
