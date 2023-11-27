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
  plugins: [
    require('flowbite/plugin')
]
}

module.exports = {
  content: ["./src/**/*.{html,js,tsx}", "./node_modules/flowbite/**/*.js", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
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

      lineHeight: {
        'extra-tight': '0.5',
        '12': '3rem',
      },

        cursor: {
          default: 'url(../image/cursor.svg), default',
          pointer: 'url(../image/cursor2.svg), pointer',
      },

      spacing: {
        '128': '42rem',
        '150': '60rem',
      },


      fontFamily: {
        ArgentItalic: "ArgentItalic",
        NeueHaasRoman: "NeueHaasRoman",
        NeueHaasLight: "NeueHaasLight",
        NeueHaasBold: "NeueHaasBold",
        NeueHaasBlack: "NeueHaasBlack",
        NationalLight: "NationalLight",
        NationalBook: "NationalBook",
        NationalMedium: "NationalMedium",
        NationalExtraBold: "NationalExtraBold",
        PPNeueMachina: "PPNeueMachina",
        Garamond: "Garamond",
        Avenir: "Avenir",
        SFproBold: "SFproBold",
        SFpro:"SFpro",
      },

      colors: {
        'regal-gray': '#232323',
        'linear-gray': '#2F2F2F',
        'sub-gray': '#515151',
        'tahiti': {
          100: '#1A2017',
          200: '#CCF994',
          300: '#192117',
          400: 'F3F3F3',
        },
      },

      backgroundImage: {
        'hero-pattern': "url('../image/hero-pattern.svg')",
        'hero-pattern2': "url('../image/hero-pattern2.svg')",
        'footer-texture': "url('/image/footer-texture.svg')",
      },

      lineHeight: {
        'extra-loose': '3.5',
        '12': '3rem',
      },

    },
  },
  plugins: [],
}