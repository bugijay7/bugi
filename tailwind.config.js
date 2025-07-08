import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // include all component files
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],   // ✅ creates `font-mont`
        ledger: ['Ledger', 'serif'],
      },
      colors: {
        softgray: '#dfdcdc', // 👈 name it anything you want
      },
    },
  },
  plugins: [daisyui],
};
