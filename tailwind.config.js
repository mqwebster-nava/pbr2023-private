module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        'sans': ['GTAmerica'],
        'body': ['GTAmerica'],
      },
      screens: {
        'sm': '480px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        purple: {
          'dark':'#5B0462',
          'base': '#B14092',
        }
      },
      spacing: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      }
    },
  },
  variants: {},
}
