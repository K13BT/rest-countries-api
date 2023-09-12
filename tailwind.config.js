/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dmElement' : 'hsl(209, 23%, 22%)',
        'dmBg': 'hsl(207, 26%, 17%)',
        'lmText': 'hsl(200, 15%, 8%)',
        'lmInput': 'hsl(0, 0%, 52%)',
        'lmBg': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
