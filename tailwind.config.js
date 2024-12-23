/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-white':'#fff',
        'graphite': '#2b2b2b',
        'charcol': '#242424',
        'charcolBlack': '#000000DB',
        'jetBlack': '#2f2f2f',
        'silver': '#ccc',
        'dimCharcol': '#565656',
        'spanishGray': '#969696',
        'silverGray': '#cacaca',
        'smokyGray': '#3c3c3c',
        'darkGray-800': '#383838',
        'darkGray-700': '#1b1b1b',
        'darkGray-600':'#151515',
        'darkGray-200':'#919191',
        'darkGray-300':'#909090',
        'darkGray-100':'#2A2929',
        'darkGray-400':'#1C1C1C',
        'darkGray-500':'#979797',
        'darkGray-50':'#0000004D',
        'darkGray-20':'#3F3F3F',
        'darkGray-30':'#ccc',
        'dimGray': '#696969',
        'mediumGray': '#8c8c8c',
        'lightGray': '#c4c4c4',
        'lighterGray': '#cccccc',
        'lighterGray-100': '#fff',
        'ashGray': '#757575',
        'sunsetOrange': '#f3a93c',
        'customOrange-600':'#FF9900',
        'customOrange-400':'#fca800',
        'customOrange-100':'#F4CD7B',
        'darkGray-25':'#666',
        'customBlue':"#33f",
        'customBlue-400':"#1E90FF",
      },
      screens: {
         "custom-md":"552px",
         "custom-md2":"1000px",
        '2xl': '1380px',
      },
      boxShadow: {
        'custom': '1px 1px 4px #333',
        "text-shadow": "1px 1px #000"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.69) 90%, rgba(0, 0, 0, 0.9) 100%)',
      }
    },
  },
  plugins: [],
}

