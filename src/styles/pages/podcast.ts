import { styled } from "..";

export const PodcastContainer = styled("main", {
  width: "100%",
  height: "100%",
  background: "$primary",
});

export const PodcastConst = styled("div", {
  overflowY: "scroll",
  height: "calc(100vh - 6rem)",
  width: "75rem",
  margin: "auto",
  color: "$color",
});

export const LatestEpisodeContainer = styled("section", {
  margin: "2rem",
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h2: {
      marginTop: "1rem",
      marginBottom: "1.5rem",
      fontSize: "1.5rem",
      lineHeight: "2rem",
      color: "$h2",
    },

    form: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",

      input: {
        width: "30rem",
        padding: ".8rem",
        borderRadius: "0.5rem",
        background: "$li",
        color: "#fff",

        border: "2px solid transparent",
        outline: "transparent",

        "&::placeholder": {
          fontWeight: "bold",
        },

        "&:hover": {
          outline: "2px solid rgb(32, 35, 39)",
          transition: "all .2s ease-in-out",
        },
      },

      button: {
        background: "$li",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        lineHeight: "0",

        width: "3rem",
        height: "2.8rem",

        "&:hover": {
          transition: "all .2s ease-in-out",
          outline: "2px solid rgb(32, 35, 39)",
        },
      },
    },
  },

  ul: {
    maxWidth: "75rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem",

    li: {
      width: "31.25rem",
      fontSize: "0.8rem",

      padding: "1.25rem",
      borderRadius: "1.5rem",
      position: "relative",
      background: "$li",

      // width: '25rem',

      display: "flex",
      alignItems: "center",

      img: {
        width: "6rem",
        height: "6rem",

        borderRadius: "1rem",
        objectFit: "cover",
      },

      div: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: "1rem",
        color: "$h2",

        gap: ".4rem",

        a: {
          display: "block",
          textDecoration: "none",
          color: "$h2",

          fontSize: ".9rem",
          textAlign: "start",

          fontWeight: "600",
          lineHeight: "1.4rem",

          "&:hover": {
            transition: "all .2s ease-in-out",
            color: "#eee",
            textDecoration: "underline",
          },
        },

        p: {
          fontSize: ".8rem",
          lineHeight: "1.25rem",
          marginTop: "0.5rem",
          maxWidth: "70%",

          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },

      button: {
        position: "absolute",

        right: "2rem",
        bottom: "2rem",

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

  "@bp3": {
    ul: {
      gap: "1.5rem",

      li: {
        width: "31.25rem",
      },
    },
  },
});

export const AllEpisodeContainer = styled("section", {
  margin: "2rem",
  paddingBottom: "2rem",

  h2: {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "$h2",
  },

  table: {
    width: "100%",
    marginTop: "1.25rem",

    thead: {
      tr: {
        border: "1px solid #333",
        color: "$h2",

        th: {
          textTransform: "uppercase",
          fontWeight: "500",
          textAlign: "left",
        },
      },
    },
    tbody: {
      div: {
        marginBottom: " 0.75rem",
      },

      tr: {
        td: {
          fontSize: "0.8rem",
          lineHeight: "1.5rem",
          paddingRight: "2rem",
          color: "$h2",

          "> img": {
            width: "2rem",
            height: "2rem",

            borderRadius: "0.5rem",
            objectFit: "cover",
          },

          a: {
            fontWeight: "600",
            fontSize: ".8rem",

            textDecoration: "none",
            color: "$h2",

            lineHeight: "1.5rem",

            "&:hover": {
              transition: "all .2s ease-in-out",
              color: "gray",
              textDecoration: "underline",
            },
          },

          button: {
            background: "$button",
            border: "1px solid rgb(32, 35, 39)",

            width: "2rem",
            height: "2rem",

            borderRadius: "0.5rem",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "> img": {
              width: "1.25rem",
            },
          },
        },
      },
    },
  },
});
