// tailwind.config.js

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      azul: {
        darkest: '#1f2d3d',
        dark: '#56CAD8',
        DEFAULT: '#6BD5E1',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      honey:{
        DEFAULT: '#FFE4AD',
      },
      manzana:{
        DEFAULT:"#FD8369",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
