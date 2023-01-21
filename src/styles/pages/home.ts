import { styled } from "..";

export const HomeContainer = styled("main", {
  maxWidth: "100%",
  minHeight: "100vh",
  background: "$primary",

  transition: "all .3s ease-in-out",

  // background: "url(/images/blur.svg) no-repeat ",
  backgroundSize: "100vw",
  backgroundPositionY: "top",
  backgroundAttachment: "local",

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 3rem",

    img: {
      width: "51px",
      height: "51px",
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
      fontSize: "3rem",
      fontWeight: 700,
      color: "$gray500",
    },
    p: {
      textAlign: "center",
      fontSize: "1.4rem",
      lineHeight: "2.6rem",
      color: "rgb(128, 128, 128)",
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
