/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html,vue}',
    './public/index.html',
  ],
  theme: {
    fontSize: {
      xl: '70px',
      '2xl': '75px',
      '3xl': '80px',
    },
    extend: {
      spacing: {
        '16': '16px',
        '40': '40px',
        '48': '48px',
        '60': '60px',
        '90': '90px',
      },
      lineHeight: {
        '88': '88px',
      }
    },
    colors: {
      'primary': '#ffffff',
      'secondary': 'rgba(256, 256, 256, .7)',
      'blue': '#118DA8',
      'yellow': '#FCFF51',
      'bg': '#191919',
      'black': '#000000',
    }
  },
  plugins: [],
}

