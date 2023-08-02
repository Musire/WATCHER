/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '319px',
        'mobile': '375px',
        'desktop': '1440px'
      },
      colors: {
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
        silver: '#d9d9d9',
        midnight: '#1A1927',
        shadow: '#272733',
        lightgreen: '#21B967',
        darkgreen: '#136338', 
        lightblue: '#4B7FC3',
        darkblue: '#00315F'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'icon-close': "url('./assets/icon-close.svg')",
        'icon-menu': "url('./assets/icon-menu.svg')",
      },
    },
  },
}

