/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // pour le app router Next.js 14+
    "./pages/**/*.{js,ts,jsx,tsx}", // si tu utilises encore pages/
    "./components/**/*.{js,ts,jsx,tsx}", // pour tes composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
