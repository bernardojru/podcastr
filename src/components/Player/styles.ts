import { styled } from "../../styles/.";

export const PlayerContainer = styled("div", {
  padding: "2rem 4rem",
  transition: 'all .4s ease-in-out',

  width: "15rem",
  height: "100vh",

  position: "fixed",
  right: "0",

  background: "#4347FE",
  color: "#fff",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  header: {
    display: "flex",
    alignItems: "center",

    gap: "1rem",

    strong: {
      fontWeight: "600",
      fontSize: ".8rem",
    },
  },

});

export const ShowButton = styled("button", {
  position: "absolute",
  left: "0",
  top: "45%",
  width: "3rem",
  height: "5rem",

  background: "#4347FE",
  borderRadius: "1rem",

  transform: "translate(-50%, -50%)",
});

export const PlayerInfo = styled("div", {
  marginTop: "-10rem",
  textAlign: "center",

  "> img": {
    width: "15rem",
    height: "15rem",
    borderRadius: "1.5rem",

    objectFit: "cover",
  },

  "> strong": {
    display: "block",

    // marginTop: "2rem",

    fontSize: "1rem",
    fontWeight: "600",
    lineHeight: "1.75rem",
  },

  span: {
    display: "block",
    marginTop: "1rem",
    opacity: "0.6",
    lineHeight: "1.5rem",
    fontSize: ".8rem",
  },
});

export const PlayerEmpty = styled("div", {
  width: "10rem",
  height: "10rem",
  marginTop: "-10rem",

  border: "1px dashed #6866FB",
  borderRadius: "1.5rem",

  background: "#3846D4",

  padding: "4rem",

  textAlign: "center",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
