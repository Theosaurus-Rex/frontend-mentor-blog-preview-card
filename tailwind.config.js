/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "hsl(47, 88%, 63%)",
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 50%)",
          black: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        solid: "8px 8px 0px 0px hsl(0, 0%, 7%)",
        hover: "16px 16px 0px 0px hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
