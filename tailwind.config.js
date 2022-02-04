module.exports = {
  purge: {
    content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    safelist: [
      'bg-pink-base', 'bg-pink-dark','text-pink-base','text-pink-dark',
      'bg-purple-base', 'bg-purple-dark', 'text-purple-base','text-purple-dark',
      'bg-blue-base','bg-blue-dark', 'text-blue-base', 'text-blue-dark',
      'bg-orange-base','bg-orange-dark', 'text-orange-base', 'text-orange-dark',
      'bg-green-base','bg-green-dark', 'text-green-base','text-green-dark'
    ],
  },
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
        grey:{
          "base": "#3D4551"
        },
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
      backgroundColor: (theme) => theme('colors'),
      textColor: (theme) => theme('colors'),
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
