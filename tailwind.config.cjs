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
        'white-triarc': '#FFFFFF',
        'blue-triarc-light': '#3392d3',
        'red-triarc-blended': '#780a1c',
        'green-triarc-blended': '#005a2d',
        'blue-triarc-blended': '#004778',
        'yellow-triarc': '#FFE74C',
        wood: '#D0AE84',
        'orange-ebl-base': 'rgba(254, 107, 21, 1)',
        'orange-ebl-medium': 'rgba(254, 107, 21, 0.6)',
        'orange-ebl-weak': 'rgba(254, 107, 21, 0.1)',
        'blue-ideesport-weak': 'rgba(30, 170, 230, 0.1)',
      },
      spacing: {
        navbar: '64px',
      },
      maxWidth: {},
      maxHeight: {
        infiniti: '9999px',
      },
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
  safelist: [
    // === Margins ===
    // Margin-y
    'my-0',
    'my-8',
    // Margin-x
    'mx-0',
    // Margin top
    'mt-0',
    'mt-8',
    // Margin bottom
    'mb-0',
    'mb-4',
    'mb-6',
    'mb-8',
    'mb-16',
    // Margin left
    'ml-[-50vw]',
    'ml-[-20%]',
    'ml-[-7.5%]',
    // Margin right
    'mr-[-50vw]',

    // === Padding ===
    // All sides
    'p-6',
    // Padding-y
    'py-8',
    'py-16',
    // Padding-x
    'px-5',
    'lg:px-5',
    'px-8',
    'px-16',
    'lg:px-16',
    // Padding top
    'pt-0',
    'lg:pt-0',
    'pt-5',
    'lg:pt-5',
    'pt-8',
    'pt-10',
    // Padding bottom
    'pb-0',
    'lg:pb-0',
    'pb-8',
    'pb-10',
    'pb-14',
    'lg:pb-14',
    'pb-16',
    // Padding left
    'pl-8',
    'pl-[10%]',
    'lg:pl-[10%]',
    // Padding right
    'pr-5',
    'lg:pr-5',
    'pr-8',
    'pr-20',
    'lg:pr-20',

    // === Positioning ===
    // Position
    'relative',
    // Left
    'left-[50%]',
    // Right
    'right-[50%]',
    // Translation
    '-translate-y-8',
    '-translate-y-12',
    '-translate-x-[10%]',
    'lg:-translate-x-[10%]',
    '-translate-x-[20%]',
    'lg:-translate-x-[20%]',
    // Scale
    '-scale-x-100',

    // === Text ===
    // Text size
    'text-xs',
    'text-sm',
    'text-base',
    'lg:!text-base',
    'text-lg',
    'text-xl',
    'lg:text-xl',
    'text-2xl',
    'lg:text-2xl',
    'lg:!text-2xl',
    'text-4xl',
    'lg:!text-4xl',
    'text-[40px]',
    'lg:text-[40px]',
    'text-[120px]',
    'lg:text-[120px]',
    // Text style
    'italic',
    'font-bold',
    'font-extrabold',
    // Text position
    'text-right',
    'text-white',
    'marker:!text-black',

    // === Flex and Grid ===
    // Display
    'flex',
    'flex-row',
    'lg:flex-row',
    'flex-col',
    'flex-row-reverse',
    'lg:flex-row-reverse',
    'flex-grow',
    // Justify
    'justify-start',
    'justify-center',
    'justify-end',
    // Gap
    'gap-2',
    'gap-4',
    'lg:gap-4',
    'gap-5',
    'gap-8',
    'gap-10',
    // Self
    'justify-self-start',
    'justify-self-center',
    'justify-self-end',
    'self-start',
    'self-end',
    'self-center',
    // Items
    'items-center',
    // Width
    'w-full',
    'w-[100vw]',
    'w-[32%]',
    'w-[33%]',
    'w-[40%]',
    'lg:w-[40%]',
    'w-[45%]',
    'lg:w-[45%]',
    'w-[50%]',
    'lg:w-[50%]',
    'w-[55%]',
    'lg:w-[55%]',
    'w-[60%]',
    'lg:w-[60%]',
    'w-[100px]',
    'w-[145px]',
    'lg:w-[200px]',
    'w-[210px]',
    'lg:w-[220px]',
    'max-w-[45ch]',
    'max-w-screen-xl',
    // Height
    'h-full',
    'h-min',
    'h-24',
    'h-80',
    'lg:!h-80',
    'h-[100px]',
    'lg:h-[200px]',
    'h-[145px]',
    'h-[210px]',
    'lg:h-[220px]',
    'h-[450px]',

    // === Tailwind typography ===
    // Prose
    'not-prose',
    'not-prose-xl',
    'prose',
    'max-w-prose',

    // === General look ===
    // Border
    'border-solid',
    'border-[3px]',
    'lg:border-[5px]',
    'border-orange-ebl-weak',
    // Outline
    'outline',
    'outline-[3px]',
    'lg:outline-[5px]',
    'outline-white',
    // Border-Radius
    'rounded-xl',
    'rounded-3xl',
    'lg:rounded-3xl',
    'lg:!rounded-3xl',
    'rounded-full',
    // Object fit
    'object-cover',
    // Background
    'bg-orange-ebl-weak',
    'bg-orange-ebl-medium',
    'bg-blue-ideesport-weak',
    'bg-white',
  ],
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    // require('@tailwindcss/ui')(),
    // require('@tailwindcss/aspect-ratio')
  ],
}
