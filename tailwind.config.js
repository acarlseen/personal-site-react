/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],  
  theme: {
    extend: {
      backgroundImage:
      {
        'hero' : "url('./assets/img/shrinath-2Y3AhqTIqNo-unsplash.jpg'), linear-gradient(to bottom right, #C084FC, #0EA5E9)"
      }
    },
  },
  plugins: [],
}