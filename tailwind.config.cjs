/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light-black': '#212121',
        'dark-gray': '#323232',
        'dark-blue': '#0D7377',
        'light-blue': '#14FFEC'
      },
      gridTemplateRows: {
        'fill-50': 'repeat(auto-fill, 50px)'
      }
    }
  },
  plugins: []
}
