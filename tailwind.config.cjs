/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        backgroundGalaxy: "url('/background.png')",
        'gradient-text': 'linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD, 60.94%, #E1D55D 20.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .9) 67.08%)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
}
