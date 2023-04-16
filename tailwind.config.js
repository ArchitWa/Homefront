const { withAnimations } = require('animated-tailwindcss')


/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "crystal": {
          50: "#F8FCFC",
          100: "#EDF8F8",
          200: "#DEF2F2",
          300: "#CCEAEB",
          400: "#BDE4E5",
          DEFAULT: "#ACDDDE",
          600: "#74C6C8",
          700: "#43A6A8",
          800: "#2D7071",
          900: "#163637",
          950: "#0C1D1D"
        },
        "aeroblue": {
          50: "#FBFEFC",
          100: "#F3FCF7",
          200: "#EBFAF2",
          300: "#DFF6EB",
          400: "#D7F4E6",
          DEFAULT: "#CAF1DE",
          600: "#86DFB4",
          700: "#3DCC87",
          800: "#258D5B",
          900: "#12452C",
          950: "#0A2417"
        },
        "nyanza": {
          50: "#FBFEFB",
          100: "#F8FDF6",
          200: "#F4FCF2",
          300: "#EDFBEA",
          400: "#E6F9E1",
          DEFAULT: "#E1F8DC",
          600: "#9DE88C",
          700: "#5CD940",
          800: "#369D1F",
          900: "#1B4D0F",
          950: "#0D2608"
        },
        "cornsilk": {
          50: "#FFFEFA",
          100: "#FFFEFA",
          200: "#FFFCF0",
          300: "#FEFBEB",
          400: "#FEF9E1",
          DEFAULT: "#FEF8DD",
          600: "#FBE47E",
          700: "#F9D225",
          800: "#B79705",
          900: "#5E4D03",
          950: "#2D2501"
        },
        "bisque": {
          50: "#FFFDFA",
          100: "#FFFBF5",
          200: "#FFF6EB",
          300: "#FFF0DB",
          400: "#FFEBD1",
          DEFAULT: "#FFE7C7",
          600: "#FFBF6B",
          700: "#FF970F",
          800: "#B86800",
          900: "#5C3400",
          950: "#2E1A00"
        },
        "tan": {
          50: "#FEFAF6",
          100: "#FDF7F1",
          200: "#FCF0E4",
          300: "#FAE8D6",
          400: "#F9E0C8",
          DEFAULT: "#F7D8BA",
          600: "#EEAD6D",
          700: "#E5821F",
          800: "#9B5712",
          900: "#4E2B09",
          950: "#251404"
        }
      }
    },
  },
  plugins: [],
})

