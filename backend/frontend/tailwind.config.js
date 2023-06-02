/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green': "#33d9a5",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },

  plugins: [],
}

