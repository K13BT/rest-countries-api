/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark_mode_elements' : 'hsl(209, 23%, 22%)',
        'dark_mode_bg': 'hsl(207, 26%, 17%)',
        'light_mode_text': 'hsl(200, 15%, 8%)',
        'light_mode_input': 'hsl(0, 0%, 52%)',
        'light_mode_bg': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}
