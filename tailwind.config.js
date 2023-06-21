/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/index.html", "./src/style.css"],
  theme: {
    extend: {
      backgroundImage: {
        'blue-wave': "url('../src/images/blue-wave.svg')",
        'dark-wave': "url('../src/images/dark-wave.svg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

