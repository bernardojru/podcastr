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
