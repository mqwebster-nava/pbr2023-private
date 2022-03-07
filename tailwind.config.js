module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GTAmerica', 'sans-serif'], 
        'serif': ['Source Serif Pro', 'serif'],
        'body': ['GTAmerica']
      },
      fontSize:{
        'xs': '12px', // .65rem
        'sm': '14px', // 0.8
        'base': '18px', // 1rem
        'lg': '22px',//1.25rem
        'xl': '28px', //1.5rem
        '2xl': '36px', 
        '3xl': '44px',
        '4xl': '55px',
        '5xl': ['66px', '80px'], 
        // '6xl': ['90px', '110px'],
        // '7xl': '110px',
        // '8xl': '150px',
        // '9xl':['200px','190px']
      },
      screens: {
        'sm': '480px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        grey:{
          "base": "#3D4551"
        },
        purple: {
          'dark':'#471385',
          'base': '#A646B7',
          "light":'#9B4BB2'
        },
        plum: {
          'dark':'#5B0462',
          'base': '#B14092',
          'light':'#CE8EC1'
        },
        navy:{
          'dark':'#0A0539',
          'base': '#282E6C',
          'light': "#8E92AE"
        },
        gold:{
          'dark':'#F37100',
          'base': '#F8B712',
          'light':"#F6E451"
        },
        sage:{
          'dark':'#004C31',
          'base': '#08A588',
          'light':'#92C7B5'
        },
        

      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl':'48px',
        '4xl':'72px'

      }
    },
  },
  variants: {},
}
