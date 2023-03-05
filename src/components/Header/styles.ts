import { styled } from "../../styles/.";
import Link from "next/link";

export const HeaderContainer = styled("header", {
  height: "5rem",

  color: "#fff",
  background: "$primary",
  borderBottom: "1px solid $border",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 3rem",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "$10",
  },

  a: {
    borderRightWidth: "1px",
    paddingRight: "1rem",
  },

  button: {
    fontWeight: "$bold",
  },
});

export const EndContent = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray500",
  borderRadius: "$lg",
  height: "2rem",
  width: "2rem",

  color: "white",

  textDecoration: "none",
});
