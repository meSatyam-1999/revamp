/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#F8F8F8',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

