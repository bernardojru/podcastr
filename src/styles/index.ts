import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "",
      transparent: "",
      color: "",
      text: "",

      white: "#fff",
      dark: "#131313",
      gray50: "#F7F8FA",
      gray100: "#E6E8EB",
      gray200: "#333",
      gray500: " #808080",
      gray800: "#494D4B",
      gray850: "#191622",
      gray900: "#44475A",
      gray950: "rgb(178, 185, 255);",

      blue500: "rgb(67, 71, 254);",

      green500: " #04D361",
    },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },

  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
});
