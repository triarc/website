const production = !process.env.ROLLUP_WATCH
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('tailwindcss'),
    require('autoprefixer'),
    production &&
      purgecss({
        content: ['./**/*.html', './**/*.svelte'],
        safelist: [/^plyr/, 'translate-x-5', 'translate-x-0', 'bg-gray-300', 'bg-blue-triarc'],
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      }),
  ],
}
