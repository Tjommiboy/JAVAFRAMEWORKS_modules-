/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This will scan all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html", // If you are using the public index.html, include it too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
