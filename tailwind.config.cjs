/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vWhite: 'hsl(0, 0%, 98%)',
        vGRay: 'hsl(0, 0%, 41%)',
        vBlack: 'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}
