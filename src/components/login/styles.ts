import { keyframes, styled } from "../../styles/.";
import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";

export const LoginContainer = styled(Dialog.Content, {
  minWidth: "27rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  border: "solid 1px $blue200",
  padding: "$5",
  borderRadius: "$lg",
  background: "$gray900",
  color: "$gray200",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

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

    span: {
      display: "flex",
      gap: "$3",
      alignItems: "center",
    },

    input: {
      color: "$white",
      height: "1.5rem",
      background: "$gray900",
      borderRadius: "$xs",
      border: "1px solid $gray700",
      outline: "none",
      padding: "$2",

      "&:focus": {
        border: "1px solid $blue200",
        transition: "all .2s ease-in-out",
      },

      "&::placeholder": {
        fontFamily: "$default",
      },
    },

    button: {
      width: "100%",
      padding: "$2",
      height: "2.5rem",
      background: "$blue200",
      color: "$white",
      fontWeight: "800",
      borderRadius: "$xs",
      textTransform: "uppercase",
      cursor: "pointer",

      "&:hover": {
        background: "$blue100",
        transition: "all .2s ease-in-out",
      },
    },
  },
});

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "$transparent",
});

export const CloseButton = styled(Dialog.Close, {
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

export const MessageError = styled("span", {
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
