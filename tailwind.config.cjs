const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'red-triarc': '#C8102E',
        'green-triarc': '#009639',
        'blue-triarc': '#0077c8',
        'yellow-triarc': '#FFE74C',
        'wood': '#D0AE84'
      },
      maxWidth: {},
      animation: {
        wiggle: 'wiggle 1s ease',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/ui')(),
    // require('@tailwindcss/aspect-ratio')
  ],
}
