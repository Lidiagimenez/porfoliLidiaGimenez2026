/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#127063",
        accent: "#F35A53",
        dark: "#000000",
        light: "#FFFFFF",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        kalnia: ["Kalnia", "serif"],
      },
    },
  },
  plugins: [],
}
