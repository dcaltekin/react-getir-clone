/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'primary-color': '#5d3ebc',
    },
    backgroundImage: {
      'mobile-color': 'url("https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png")',     
    },
   },
   
   
  },
  plugins: [],
}