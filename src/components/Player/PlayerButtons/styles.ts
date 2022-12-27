import { styled } from "../../../styles/.";

export const PlayerButtonsContainer = styled("footer", {
  alignSelf: "stretch",
});

export const SliderContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  marginTop: '-12rem',

  gap: "0.5rem",

  fontSize: "0.875rem",
  lineHeight: "1.25rem",

  span: {
    display: "inline-block",
    width: "4rem",
    textAlign: "center",
  },

  ".slider": {
    flex: "1 1 0%",
  },

  '.empty': {
    width: "100%",
    height: "0.25rem",

    background: "#5659EB",
    bordeRadius: "0.125rem",
  },
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "1.5rem",

  marginTop: "2.5rem",

  button: {
    background: "transparent",

    border: "none",
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },

  ".play": {
    width: "4rem",
    height: "4rem",
    padding:'2rem',

    borderRadius: "1rem",
    background: "#5659EB",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  ".isActive": {
    filter: "invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)",
    opacity: '0.6'
  },

  ".isActive:hover": {
    filter:
      "brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)",
  },
});
