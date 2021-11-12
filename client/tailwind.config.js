module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        100: "#fff",
        200: "#e5e5e5",
        300: "#e9f3fd"
      },
      red: "#ec6083",
      blue: "#a18ee5",
      black: {
        100: "#212135",
        200: "rgba(0, 0, 0, 0.5)",
        300: "#03071E"
      },
      yellow: "#FFBA08"
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      width: {
        lg: "25rem",
        xl: "37rem"
      },
      height: {
        xl: "37rem",
        lg: "25rem"
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
      overflow: ['hover', 'focus'],
      display: ['hover', 'focus']
    },
  },
  plugins: [],
}
