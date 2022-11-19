/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      height: {
        calc: "calc(100vh - 6rem)",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%)",
        gradientButton:
          "linear-gradient(90deg, rgb(73, 83, 184) 0%, rgba(73, 83, 184, 0.2) 100%);",
      },
      colors: {
        gray: {
          50: "#F7F8FA",
          100: "#E6E8EB",
          200: "#AFB2B1",
          500: " #808080",
          800: "#494D4B",
          850: "#191622",
          900: "#44475A",
          950: 'rgb(178, 185, 255);'
        },
        green: {
          500: " #04D361",
        },
        purple: {
          300: "#9F75FF",
          400: "#9164FA",
          500: "#8257E5",
          800: "#6F48C9",
        },
      },
    },
  },
  plugins: [],
};
