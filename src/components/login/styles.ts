import { keyframes, styled } from "../../styles/.";
import { CircleNotch } from "phosphor-react";

export const LoginContainer = styled("div", {
  minWidth: "38rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  padding: "$5",
  borderRadius: "$md",
  border: "solid 1px $gray600",
  background: "$gray800",
  color: "$gray200",
  margin: "$5",

  "@media(max-width:375px)": {
    minWidth: "20rem",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
    padding: "$5",
    width: "100%",

    '> span': {
      display: "flex",
      gap: "$3",
      alignItems: "center",
      color: "$text",
    },

    input: {
      color: "$text",
      height: "1.5rem",
      background: "$gray800",
      borderRadius: "$xs",
      border: "1px solid $gray900",
      outline: "none",
      padding: "$2",

      "&:focus": {
        border: "2px solid $green500",
        transition: "all .1s ease-in-out",
      },

      "&::placeholder": {
        fontFamily: "$default",
      },
    },

    button: {
      fontWeight: '$bold',
    },
  },
});

export const Overlay = styled("div", {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "$transparent",
});

export const CloseButton = styled("div", {
  background: "transparent",
  borderRadius: "$xs",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "$gray200",
  padding: "$1",
  border: "2px solid $gray900",

  "&:hover": {
    background: "$gray700",
    transition: "all .2s ease-in-out",
  },
});

export const MessageError = styled("strong", {
  color: "$error",
  fontSize: "$sm",
});

const Load = keyframes({
  to: {
    transform: "rotate(0)",
  },
  from: {
    transform: "rotate(360deg)",
  },
});

export const Loading = styled(CircleNotch, {
  textAlign: "center",
  animation: ` 2s linear   ${Load}  infinite`,
});
