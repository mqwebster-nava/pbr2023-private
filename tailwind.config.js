module.exports = {
  //purge: {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{js,jsx,ts,tsx}"],
    // safelist: [
    //   'bg-plum-base', 'bg-plum-dark','bg-plum-light', 'text-plum-base','text-plum-dark', 'hover:bg-plum-base', 'hover:bg-plum-dark','hover:text-plum-base','hover:text-plum-dark', 
    //   'bg-purple-base', 'bg-purple-dark', 'bg-purple-light', 'text-purple-base','text-purple-dark', 'hover:bg-purple-base', 'hover:bg-purple-dark', 'hover:text-purple-base','hover:text-purple-dark',
    //   'bg-navy-base','bg-navy-dark','bg-navy-light',  'text-navy-base', 'text-navy-dark', 'hover:bg-navy-base','hover:bg-navy-dark', 'hover:text-navy-base', 'hover:text-navy-dark',
    //   'bg-gold-base','bg-gold-dark', 'bg-gold-light', 'text-gold-base', 'text-gold-dark', 'hover:bg-gold-base','hover:bg-gold-dark', 'hover:text-gold-base', 'hover:text-gold-dark',
    //   'bg-sage-base','bg-sage-dark', 'bg-sage-light', 'text-sage-base','text-sage-dark', 'hover:bg-sage-base','hover:bg-sage-dark', 'hover:text-sage-base','hover:text-sage-dark',
    //   'text-xs', 'text-sm', 'text-md','text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 
    //   'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl', 
    // ],
  //},
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GTAmerica', 'sans-serif'],
        'serif': ['Source Serif Pro', 'serif'],
        'body': ['GTAmerica']
      },
      fontSize:{
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': ['60px', '70px'],
        '6xl': ['90px', '110px'],
        '7xl': '110px',
        '8xl': '150px',
        '9xl':['200px','190px']
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
