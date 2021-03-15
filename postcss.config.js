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
        safelist: [/^plyr/],
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
      }),
  ],
}
