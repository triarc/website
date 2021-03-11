const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'red-triarc': '#C8102E',
        'green-triarc': '#009639',
        'blue-triarc': '#0077c8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui')({

    }),
    require('@tailwindcss/aspect-ratio')
  ]
}
