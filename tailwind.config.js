/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          '50': '#fdfee8',
          '100': '#fcffc2',
          '200': '#fdff88',
          '300': '#fffb43',
          '400': '#ffee10',
          '500': '#efd303',
          '600': '#d7ad00',
          '700': '#a47704',
          '800': '#875d0c',
          '900': '#734c10',
          '950': '#432805',
      },
      "text_color": {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2b2b2b',
    },
    
      
      }
    },
  },
  plugins: [],
}
