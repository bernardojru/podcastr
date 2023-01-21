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

      blue500: "rgb(67, 71, 254);",

      green500: " #04D361",

      gray100: "#E1E1E6",
      gray200: "#A9A9B2",
      gray400: "#7C7C8A",
      gray500: "#505059",
      gray600: "#323238",
      gray700: "#29292E",
      gray800: "#202024",
      gray900: "#121214",

      blue100: '#6866FB',
      blue200: '#5659EB',
      blue300: '#4347FE',
      blue400: '#3846D4',
    },

    lineHeights: {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%",
    },

    radii: {
      px: "1px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "16px",
      full: "99999px",
    },

    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem",
    },

    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem",
    },

    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },

    fonts: {
      default: "Roboto, sans-serif",
    },
  },

  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
