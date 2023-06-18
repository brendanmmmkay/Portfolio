/** @type {import('tailwindcss').Config} */
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
      fontFamily: {
        ArgentItalic: "ArgentItalic",
        NeueHaasRoman: "NeueHaasRoman",
        NeueHaasLight: "NeueHaasLight",
      },
      colors: {
        'regal-gray': '#232323',
        'linear-gray': '#2F2F2F',
        'sub-gray': '#515151',
      },
    },
  },
  plugins: [],
}