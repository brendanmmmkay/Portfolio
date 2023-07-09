/** @type {import('tailwindcss').Config} */

import cursor from "../image/cursor.png"


module.exports = {
  content: [
    './src/pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  plugins: [],
}

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {

      // lineHeight: {
      //   'extra-loose': '4.5',
      //   'relaxed': '5rem',
      //   '12': '3rem',
      // },

      fontSize: {
        '5xl': ['3.5rem', {
          lineHeight: '4rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
      },



        cursor: {
          default: 'url(../image/cursor.svg), default',
          pointer: 'url(../image/cursor2.svg), pointer',
      },



      fontFamily: {
        ArgentItalic: "ArgentItalic",
        NeueHaasRoman: "NeueHaasRoman",
        NeueHaasLight: "NeueHaasLight",
      },
      colors: {
        'regal-gray': '#232323',
        'linear-gray': '#2F2F2F',
        'sub-gray': '#515151',
        'tahiti': {
          100: '#E7F68D',
          200: '#A6BC5B',
          300: '#192117',
        },
      },

      backgroundImage: {
        'hero-pattern': "url('../image/footer-texture.svg')",
        'footer-texture': "url('/image/footer-texture.svg')",
      }

  

    },
  },
  plugins: [],
}