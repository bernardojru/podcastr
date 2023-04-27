import { styled } from "../.";

export const RequestContainer = styled("div", {
  width: "100%",
  height: "100vh",
  color: "$gray900",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const RequestConst = styled("div", {
  display: "flex",
  gap: "$5",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray100",
  border: "1px solid $gray200",
  paddingInline: "$10",
  paddingTop: "$10",
  paddingBottom: "$10",
  borderRadius: "$sm",

  strong: {
    paddingInline: "$5",
    paddingTop: "$5",
    paddingBottom: "$5",
    backgroundColor: "$gray200",
    border: "1px solid $gray400",
    borderRadius: "$sm",
  },

  a: {
    display: "flex",
    gap: "$2",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "$gray900",
    fontWeight: "$bold",
  },
});
