import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    textDecoration: "none",

    ".published": {
      width: "9%",
    },

    "::-webkit-scrollbar": {
      width: 6,
      height: 6,
    },

    "::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$gray200",
      borderRadius: 10,
    },
  },

  body: {
    fontFamily: "Lexend, sans-serif",
    background: "$white",
    color: "$white",
  },

  button: {
    cursor: "pointer",
    border: 0,
  },
});
