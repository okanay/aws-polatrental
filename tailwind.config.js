/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({opacityValue}) => {

    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgba(var(${variableName}))`
    }
  }
}


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'smPhone': "330px",
        'basePhone': "380px",
        'lgPhone': "410px",
        'xlPhone': "440px",
        'tablet': '770px',
        'laptop': '1024px',
        'desktop': '1440px',
      },
      colors: {
        skin: {
          'theme-50': withOpacity('--theme-50'),
          'theme-100': withOpacity('--theme-100'),
          'theme-200': withOpacity('--theme-200'),
          'theme-300': withOpacity('--theme-300'),
          'theme-400': withOpacity('--theme-400'),
          'theme-500': withOpacity('--theme-500'),
          'theme-600': withOpacity('--theme-600'),
          'theme-700': withOpacity('--theme-700'),
          'theme-800': withOpacity('--theme-800'),
          'theme-900': withOpacity('--theme-900'),
          'theme-950': withOpacity('--theme-950'),

          'body-50': withOpacity('--theme-body-50'),
          'body-100': withOpacity('--theme-body-100'),
          'body-200': withOpacity('--theme-body-200'),
          'body-300': withOpacity('--theme-body-300'),
          'body-400': withOpacity('--theme-body-400'),
          'body-500': withOpacity('--theme-body-500'),
          'body-600': withOpacity('--theme-body-600'),
          'body-700': withOpacity('--theme-body-700'),
          'body-800': withOpacity('--theme-body-800'),
          'body-900': withOpacity('--theme-body-900'),
          'body-950': withOpacity('--theme-body-950'),

          'font-50': withOpacity('--theme-font-50'),
          'font-100': withOpacity('--theme-font-100'),
          'font-200': withOpacity('--theme-font-200'),
          'font-300': withOpacity('--theme-font-300'),
          'font-400': withOpacity('--theme-font-400'),
          'font-500': withOpacity('--theme-font-500'),
          'font-600': withOpacity('--theme-font-600'),
          'font-700': withOpacity('--theme-font-700'),
          'font-800': withOpacity('--theme-font-800'),
          'font-900': withOpacity('--theme-font-900'),
          'font-950': withOpacity('--theme-font-950'),
        }
      },
      backgroundImage: {
        'support-bg': "url('/BackgroundImages/support-bg.webp')",
      },
    },
    fontFamily: {
      roboto: ['Roboto Flex', "sans-serif"],
      montserrat: ['Montserrat', "sans-serif"],
      jost: ['Jost', "sans-serif"],
      radio: ['Radio Canada', 'sans-serif'],
      inconsolata: ['Inconsolata', 'monospace'],
      figtree: ['Figtree', 'sans-serif'],
      openSans: ['Open Sans', 'sans-serif'],
      plexSerif : ['IBM Plex Serif', 'serif']

    },

  },
  plugins: [],
}
