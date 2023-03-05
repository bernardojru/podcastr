import { styled } from "../../styles";
import { Box } from "@ignite-ui/react";

export const UpgradeContainer = styled(Box, {
  width: "38rem",
  margin: "$5",
  padding: "$5",
  display: "flex",
  gap: "$5",
  flexDirection: "column",

  div: {
    display: "flex",
    alignItems: "center",
    gap: "$5",
  },

  h2: {
    color: "$text",
  },
  p: {
    color: "$text",
  },

  button: {
    fontWeight: "$bold",
  },
});
