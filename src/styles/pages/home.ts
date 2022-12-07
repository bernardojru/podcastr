import { styled } from "..";

export const HomeContainer = styled("main", {
  maxWidth: '100%',
  minHeight: "100vh",
  textAlign: 'center',


//   background: "url(/images/blur.svg) no-repeat ",
  backgroundSize: "100vw",
  backgroundPositionY: "top",
  backgroundAttachment: "local",

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 3rem",

    img: {
        width: '51px',
        height: '51px',
    },
    nav: {
      display: "flex",
      alignItems: "center",

      gap: "2rem",

      "a > button": {
        background: "$green500",
        padding: " .6rem 2rem",
        borderRadius: "0.5rem",
        fontWeight: 700,
        fontSize: "1rem",
        border: '2px solid $green500',

        color: "$white",

        '&:hover': {
            transition: 'all .2s ease-in-out',
            background: 'transparent',
        }
      },
    },
  },

  section: {
    maxWidth: "31.25rem",

    padding: '4rem',

    margin: "0 auto",

    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",

    span: {
      color: "$green500",
    },

    h1: {
        fontSize: '3rem',
        fontWeight: 700,
        color: '$gray500'
    },
    p: {
      textAlign: "center",
      fontSize: '1.4rem',
      lineHeight: '2.6rem',
      color: 'rgb(128, 128, 128)',
    },

    img: {
       maxWidth: '70vw',
       borderRadius: ".5rem",
       border: '1px solid #000'
    }
  },
});

export const Button = styled("button", {
  width: "14rem",
  height: "4rem",

  border: "2px solid $green500",
  borderRadius: "1rem",
  background: "rgba(19, 19, 19, 0.4)",

  fontWeight: 700,
  fontSize: "1rem",

  color: "$green500",
});
