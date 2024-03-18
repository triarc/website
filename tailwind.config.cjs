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
        wood: '#D0AE84',
        'orange-ebl-base': 'rgba(254, 107, 21, 1)',
        'orange-ebl-medium': 'rgba(254, 107, 21, 0.6)',
        'orange-ebl-weak': 'rgba(254, 107, 21, 0.1)',
        'blue-ideesport-weak': 'rgba(30, 170, 230, 0.1)',
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
  // safelist: [
  //     "py-8", "py-16", "font-bold", "text-lg",  "px-16", "max-w-screen-xl", "my-8", "w-full", "text-xl", "text-4xl", "font-extrabold", "text-right",
  //   "flex", "flex-row", "flex-row-reverse", "justify-center", "flex-col", "bg-white", "items-center", "rounded-full", "text-white", "text-[120px]", "text-[40px]",
  //   "relative", "left-[50%]", "right-[50%]", "ml-[-50vw]", "mr-[-50vw]", "w-[100vw]", "justify-self-start", "self-start", "self-end", "gap-2", "px-5", "pt-5",
  //   "h-[220px]", "h-[210px]", "h-[200px]", "w-[220px]", "w-[210px]", "w-[200px]", "justify-self-center", "self-center", "justify-self-end", "pb-14", "ml-[-20%]",
  //   "h-min", "w-[60%]", "not-prose", "object-cover", "h-[450px]", "my-0", "w-[40%]", "max-w-prose", "ml-[-7.5%]",
  //   "w-[45%]", "w-[55%]", "text-sm", "italic", "flex-grow", "h-[145px]", "w-[145px]", "gap-5", "pb-10",
  //   "mb-8", "mt-0", "justify-end", "pt-10", "mt-8", "mb-0", "justify-start", "rounded-3xl", "h-full",
  //   "mb-16", "gap-10", "w-[50%]", "p-6", "gap-4", "pr-20", "mx-0", " mb-4", "not-prose-xl", "mb-6", "pl-[10%]", "pt-8", "pb-16",
  //   "bg-orange-ebl-weak", "bg-orange-ebl-medium", "max-w-[45ch]", "text-2xl", "prose", "-translate-x-[20%]", "-translate-x-[10%]", "-translate-y-8", "-scale-x-100", "pr-5"
  //
  // ],
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/ui')(),
    // require('@tailwindcss/aspect-ratio')
  ],
}
