import { styled } from "../.";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  overflowY: "scroll",
});
export const EpisodeContainer = styled("main", {
  maxWidth: "45rem",
  padding: "3rem 2rem",
  margin: "0 auto",
});

export const ThumbnailContainer = styled("div", {
  position: "relative",

  img: {
    borderRadius: "1rem",
    objectFit: "cover",
  },

  button: {
    width: "3rem",
    height: "3rem",
    borderRadius: "0.75rem",
    border: "0",
    position: "absolute",
    fontSize: "0",

    transition: "filter 0.2s",

    "&:first-child": {
      left: "0",
      top: "50%",
      background: "$blue500",
      transform: "translate(-50%, -50%)",
    },

    "&:last-child": {
      right: "0",
      top: "50%",
      background: "$green500",
      transform: "translate(-50%, -50%)",
    },

    "&:hover": {
      filter: "brightness(0.9)",
    },
  },
});

export const Nav = styled("header", {
  paddingBottom: "1rem",
  borderBottom: "1px solid var($gray100)",

  h1: {
    marginTop: "2rem",
    marginBottom: "1.5rem",
  },

  span: {
    display: "inline-block",
    fontSize: "0.875rem",

    "& + span": {
      marginLeft: "1rem",
      paddingLeft: "1rem",
      position: "relative",

      "&::before": {
        content: "",
        width: "4px",
        height: "4px",
        borderRadius: "2px",
        background: "#DDD",
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
    },
  },
});

export const Description = styled("div", {
  marginTop: "2rem",
  lineHeight: "1.675rem",
  color: "$gray800",

  p: {
    margin: "1.5rem 0",
  },
});
