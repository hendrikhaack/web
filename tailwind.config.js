module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#FFF',
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },
    extend: {
      animation: {
        'waving': 'waving 2.5s ease infinite',
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
      }),
      keyframes: {
        waving: {
          '0%, 100%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(15deg)' },
        },
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  // variants: {
  //   extend: {
  //     opacity: ['group-focus-visible'],
  //     ringWidth: ['focus-visible', 'group-focus-visible'],
  //     textColor: ['can-hover'],
  //     translate: ['group-hover', 'group-focus-visible'],
  //     width: ['group-hover'],
  //   },
  // },
  plugins: [
    require('tailwindcss-interaction-variants'),
  ],
};
