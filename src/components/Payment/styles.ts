import { styled } from "../../styles/.";

export const PaymentContainer = styled("div", {
  width: "40rem",
  display: "flex",
  flexDirection: "column",
  margin: "$10",
  gap: "$5",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px $gray600",
  background: "$gray800",
  borderRadius: "$md",
  padding: "$5",

  p: {
    color: "$text",
  },

  button: {
    fontWeight: "$bold",
  },
});
