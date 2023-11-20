/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zyzol: ["Zyzol", "cursive"],
        zyzolText: ["Zyzol-text", "cursive"],
        oswald: ["Oswald", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        ralewaySemibold: ["RalewaySemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
