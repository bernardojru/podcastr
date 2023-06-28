import { styled } from "..";

export const HomeContainer = styled("main", {
  maxWidth: "100%",
  minHeight: "100vh",
  background: "$primary",

  transition: "all .3s ease-in-out",

  backgroundSize: "100vw",
  backgroundPositionY: "top",
  backgroundAttachment: "local",

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 3rem",

    div: {
      display: "flex",
      gap: "$5",
      alignItems: "center",
      justifyContent: "center",

      img: {
        width: "51px",
        height: "51px",
      },

      strong: {
        fontSize: "$2xl",
        color: "$text",
      },
    },
    nav: {
      display: "flex",
      alignItems: "center",

      gap: "2rem",

      "a > button": {
        background: "$color",
        padding: " .6rem 2rem",
        borderRadius: "0.5rem",
        fontWeight: 700,
        fontSize: "1rem",
        border: "2px solid $color",

        color: "$text",

        "&:hover": {
          transition: "all .2s ease-in-out",
          background: "transparent",
        },
      },
    },
  },

  section: {
    maxWidth: "31.25rem",

    padding: "2rem",

    margin: "0 auto",

    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",

    span: {
      color: "$color",
    },

    h1: {
      width: "100%",
      fontSize: "3rem",
      fontWeight: 700,
      color: "$text",
      textAlign: "center",
    },
    p: {
      textAlign: "center",
      fontSize: "1.4rem",
      lineHeight: "2.6rem",
      color: "$text",
    },

    img: {
      maxWidth: "70vw",
      borderRadius: ".5rem",
      border: "1px solid #000",
    },

    button: {
      width: "14rem",
      height: "4rem",

      border: "2px solid $color",
      borderRadius: "1rem",
      background: "$transparent",

      fontWeight: 700,
      fontSize: "1rem",

      color: "$color",
    },
  },
});
