module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  variants: {},
}
