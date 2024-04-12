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
        xxs: '0.625rem',
          xs: '0.8rem',
          '4xl': ['2.8rem', { 
            lineHeight: '3.1rem',
            letterSpacing: '-0.05em',
           }],        
        '5xl': ['3.5rem', {
          lineHeight: '4rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '6xl': ['5.5rem', {
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
        '32': '18rem',
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
        AvenirHeavy:"AvenirHeavy",
        SFproBold: "SFproBold",
        SFpro:"SFpro",
        AvenirMedium:"AvenirMedium",
        rosart:"rosart",
        FoundersGrotesk: "FoundersGrotesk",
        FoundersGroteskLight: "FoundersGroteskLight",
      },

      colors: {
        'regal-gray': '#232323',
        'linear-gray': '#2F2F2F',
        'sub-gray': '#515151',
        'off-white': '#F5F5F5',
        'edge-white': '#D9D9D9',
        'chip-deep-gray': '#9B9A9A',
        'arkansas': '#3C3C3C',
        'tahiti': {
          100: '#2F2E2E',
          200: '#252424',
          300: '#192117',
          400: '#F3F3F3',
          500: '#D4D4D4',
        },
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '1px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },

      backgroundImage: {
        'hero-pattern': "url('../image/hero-pattern.svg')",
        'hero-pattern2': "url('../image/hero-pattern2.svg')",
        'hero-pattern3': "url('../image/hero-pattern3.svg')",
        'hero-pattern4': "url('../image/hero-pattern4.svg')",
        'footer-texture': "url('/image/footer-texture.svg')",
      },

      lineHeight: {
        'extra-loose': '3.5',
        '12': '3rem',
      },

      padding: {
        '48': '11rem',
      },

      width: {
        '20': '6rem',
      },

      height: {
        '3/4': '75%',
      },
      
      maxWidth: {
        'prose': '46ch',
        'xs': '30ch',
      },

      animation: {
        'slide-right': 'slide-right 2s forwards',
      },

      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100px)' },
        },
      },

    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
    plugins: [

    ],
}