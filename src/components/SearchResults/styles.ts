import { styled } from "../../styles/.";

export const SearchResultsContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  marginTop: "2rem",

  div: {
    background: "$li",
    border: "1px solid #2222",
    borderRadius: "1.5rem",

    display: "flex",
    alignItems: "center",
    paddingLeft: "0.5rem",
    paddingTop: "0.5rem",

    span: {
      fontSize: "0.8rem",
      lineHeight: "1.5rem",
      paddingRight: "2rem",
      color: "$h2",

      "> img": {
        width: "6rem",
        height: "6rem",

        borderRadius: "1rem",
        objectFit: "cover",
      },

      a: {
        textDecoration: "none",
        color: "$h2",

        "&:hover": {
          textDecoration: "underline",
          transaction: "all .8s",
        },
      },

      button: {
        width: "2.5rem",
        height: "2.5rem",

        background: "$button",

        border: "1px solid rgb(32, 35, 39)",
        borderRadius: "0.5rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: "0",

        img: {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },
  },
});
