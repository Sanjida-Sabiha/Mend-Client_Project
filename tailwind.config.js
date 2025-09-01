/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1216px",
        },
      },
      fontFamily: {
        'PlusJakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'airbnb': ['Airbnb Cereal App', 'sans-serif'],
      },
      colors:{
        'mainBg':'#070E16',
        'primaryColor':'#FFFFFF',
        'secondaryColor':'#1A202C',
        'borderColor':'#788DF3',
        'btnBg':'#7C5CFC',
      },

      spacing:{
        '201':'201px',
        '410':'410px',
        '500':'500px',
        '568':'568px',
        '630':'630px',
        '699':'699px',
        '712':'712px',
        '770':'770px',
        '802':'802px',
        '864':'864px',
        '860':'860px',
        '1060':'1060px',
        '1192':'1192px',
      },
      fontSize: {
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '38xl':'38px',
        '40xl':'40px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '60xl':'60px',
        '72xl':'72px',
        '80xl':'80px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '50':'50px',
        '54':'54px',
        '58':'58px',
        '64':'64px',
        '70':'70px',
        '80':'80px',
        '90':'90px',
      },
      borderRadius:{
        '30':'30px',
        '12':'12px',
      },
      boxShadow:{
        'shadowSlide':'4px 8px 24px rgba(36, 107, 253, 0.25)'
      },
    },
  },
  plugins: [],
}
