const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.stone,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
