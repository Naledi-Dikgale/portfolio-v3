/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fafafa',
        secondary: '#0f172a',
        'primary-light': '#fde68a',
        'secondary-light': '#6b7280',
        'button': '#db2777',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        agbalumo: ["Aoboshi One", "serif"],
        lobster: ["Lobster Two", "sans-serif"],
        texturina: ["Texturina", "serif"]
      },
      // skew: {
      //   '45': '45deg',
      // },
      },

    },
      screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
  plugins: [],
}

