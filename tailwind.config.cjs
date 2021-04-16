const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'aot',
  purge: {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    options: {
      defaultExtractor: (content) => [
        // If this stops working, please open an issue at https://github.com/svelte-add/tailwindcss/issues rather than bothering Tailwind Labs about it
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'red-triarc': '#C8102E',
        'green-triarc': '#009639',
        'blue-triarc': '#0077c8',
        'yellow-triarc': '#FFE74C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/ui')(),
    // require('@tailwindcss/aspect-ratio')
  ],
}
