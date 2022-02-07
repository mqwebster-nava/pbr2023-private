module.exports = {
  purge: {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    safelist: [
      'bg-plum-base', 'bg-plum-dark','text-plum-base','text-plum-dark', 'hover:bg-plum-base', 'hover:bg-plum-dark','hover:text-plum-base','hover:text-plum-dark', 
      'bg-purple-base', 'bg-purple-dark', 'text-purple-base','text-purple-dark', 'hover:bg-purple-base', 'hover:bg-purple-dark', 'hover:text-purple-base','hover:text-purple-dark',
      'bg-navy-base','bg-navy-dark', 'text-navy-base', 'text-navy-dark', 'hover:bg-navy-base','hover:bg-navy-dark', 'hover:text-navy-base', 'hover:text-navy-dark',
      'bg-gold-base','bg-gold-dark', 'text-gold-base', 'text-gold-dark', 'hover:bg-gold-base','hover:bg-gold-dark', 'hover:text-gold-base', 'hover:text-gold-dark',
      'bg-sage-base','bg-sage-dark', 'text-sage-base','text-sage-dark', 'hover:bg-sage-base','hover:bg-sage-dark', 'hover:text-sage-base','hover:text-sage-dark'
    ],
  },
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
        '9xl':'200px'
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
        },
        plum: {
          'dark':'#5B0462',
          'base': '#B14092',
        },
        navy:{
          'dark':'#0A0539',
          'base': '#282E6C',
        },
        gold:{
          'dark':'#F37100',
          'base': '#F8B712',
        },
        sage:{
          'dark':'#004C31',
          'base': '#08A588',
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
