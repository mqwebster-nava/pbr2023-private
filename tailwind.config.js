module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['GTAmerica', 'sans-serif'],
        'serif': ['Source Serif Pro', 'serif'],
        'body': ['GTAmerica']
      
      },
      screens: {
        'sm': '480px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        pink: {
          'dark':'#5B0462',
          'base': '#B14092',
        },
        purple: {
          'dark':'#471385',
          'base': '#A646B7',
        },
        blue:{
          'dark':'#0A0539',
          'base': '#282E6C',
        },
        orange:{
          'dark':'#F37100',
          'base': '#F8B712',
        },
        green:{
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
