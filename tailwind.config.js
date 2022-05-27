module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      listStyleType: {
        dash: "square",
      },
      blur: {
        xs: "2px",
      },
      fontFamily: {
        sans: ["GTAmerica", "sans-serif"],
        serif: ["Freight Text Pro", "serif"],
        body: ["GTAmerica"],
      },
      fontSize: {
        xs: "11px", // .65rem
        sm: ["14px", "20.2px"], // 0.8
        base: ["18px", "25.2px"], // 1rem
        lg: ["22px", "33px"], //1.25rem
        xl: ["24px", "32px"], //["24px", "39.2px"], //1.5rem
        "2xl": "28px", //["px", "47.6px"],
        "3xl": "32px", //["32px", "61.6px"],
        "4xl": ["38px", "47.6px"],
        "5xl": ["44px", "55px"], // ["44px", "67.5px"],
        "6xl": ["54px", "66px"], //["54px", "67.5px"],
      },
      screens: {
        sm: "540px", // => @media (min-width: 540px) { ... }
        md: "768px",
        "2xl": "1440px", // => @media (min-width: 1440px) { ... }
      },
      colors: {
        purple: {
          50: "#f5e4f0",
          lightest: "#F5E4F0",
          100: "#dfbde5",
          200: "#cb92d5",
          light: "#9B4BB2",
          300: "#b666c4",
          400: "#a646b7",
          base: "#A646B7",
          500: "#9626aa",
          600: "#8823a4",
          700: "#761e9c",
          800: "#651a94",
          900: "#471385",
          dark: "#471385",
        },

        plum: {
          light: "#CE8EC1",
          50: "#f5e4f0",
          100: "#e8bada",
          200: "#d98bc3",
          300: "#c85aab",
          400: "#b14092",
          base: "#B14092",
          500: "#a11e83",
          600: "#95197f",
          700: "#851178",
          800: "#760c71",
          900: "#5b0462",
          dark: "#5B0462",
        },

        gold: {
          light: "#F6E451",
          base: "#F8B712",
          50: "#fefce7",
          100: "#fcf7c4",
          200: "#faf19e",
          300: "#f9ec78",
          400: "#f8e85d",
          500: "#f8e21a",
          600: "#fad01a",
          700: "#f8b712",
          800: "#f69f09",
          900: "#f37100",
          dark: "#F37100",
        },

        navy: {
          dark: "#0A0539",
          base: "#282E6C",
          light: "#8E92AE",
          50: "#e3e4ec",
          100: "#b9bcd1",
          200: "#8d91b2",
          300: "#636893",
          400: "#464a7f",
          500: "#282e6c",
          600: "#232965",
          700: "#1b205a",
          800: "#14184e",
          900: "#0a0539",
        },
        sage: {
          dark: "#004C31",
          base: "#08A588",
          light: "#92C7B5",
          50: "#e0f2ed",
          100: "#b3dfd2",
          200: "#83cab6",
          300: "#53b599",
          400: "#08a588",
          500: "#199573",
          600: "#158867",
          700: "#107859",
          800: "#08684b",
          900: "#004c31",
        },

        gray: {
          // base: "#3D4551",
          base: "#333333",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        dei: {
          pink: {
            base: "#C4148A",
            light: "#E01A9F",
          },
          orange: {
            light: "#F4F3F2",
            dark: "#CE7205",
            darkest: "#ff8c00",
          },
          blue: {
            lightest: "#4FB9F3",
            light: "#E7F3FA",
            dark: "#0386CF",
            darker: "#c75a00",
          },
          brown: {
            base: "#966023",
            lightest: "#D4BEA5",
            light: "#B4650D",
            dark: "#442502",
          },
          green: {
            base: "#259B62",
            light: "#25F15E",
          },
        },
        pbr: {
          ecru: {
            "base": "#F3EDE1",
          },
        }
        
      },

      height: {
        128: "32rem",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "22px",
        "2xl": "32px",
        "3xl": "48px",
        "4xl": "72px",
        "5xl": "128px",
      },
    },
  },
  variants: {},
};
