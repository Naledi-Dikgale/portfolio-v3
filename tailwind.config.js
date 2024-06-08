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
        secondary: '#475569',
        'primary-light': '#fde68a',
        'secondary-light': '#6b7280',
        'button': '#ec4899',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        agbalumo: ["Aoboshi One", "serif"],
        lobster: ["Lobster Two", "sans-serif"],
        texturina: ["Texturina", "serif"],
        andika: ["Andika", "sans-serif"],
        tang: ["Tangerine", "cursive"],
      },
      },

    },
      screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "900px",
    lg: "1200px",
    xl: "1700px",
  },
  
  variants: {
  },
    plugins: [],
  }

