import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],  
        ledger: ['Ledger', 'serif'],
      },
      colors: {
        softgray: "#dfdcdc",
        cream: "#ffefcd",
        olive: "#a5be74",
        amber: "#e09132",
        charcoal: "#424530",
      },
    },
  },
  plugins: [daisyui],
}
