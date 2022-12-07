import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,

    "::-webkit-scrollbar": {
      width: 6,
    },

    "::-webkit-scrollbar-track": {
      background: "$dark",
    },

    "::-webkit-scrollbar-thumb": {
      background: "$gray200",
      borderRadius: 10,
    },
  },

  body: {
    fontFamily: "Inter, sans-serif",
    background: "$dark",
  },

  button: {
    cursor: "pointer",
    border: 0,
  },
});
