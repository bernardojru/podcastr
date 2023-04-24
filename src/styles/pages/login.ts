import { styled } from "../.";

export const LoginContainer = styled("div", {
  minWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  gap: "$10",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    color: "$gray900",
  },

  "@bp4": {
    padding: "$10",
    flexDirection: "column",
  },
});

export const LoginPageLabel = styled("div", {
  display: "flex",
  gap: "$5",
  flexDirection: "column",
  alignItems: "start",
  width: "100%",
  maxWidth: "25rem",
});

export const LoginPageFormContainer = styled("form", {
  width: "100%",
  maxWidth: "25rem",
  display: "flex",
  gap: "$2",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "start",
  backgroundColor: "$gray100",
  border: "1px solid $gray400",
  paddingInline: "$10",
  paddingTop: "$10",
  paddingBottom: "$10",
  borderRadius: "$sm",
});

export const TextInputContainer = styled("div", {
  width: "100%",
  backgroundColor: "$gray200",
  padding: "$4 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "1px solid $gray400",

  display: "flex",
  gap: "$3",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    svg: {
      fill: "$gray900",
    },
    border: "1px solid $gray400",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const Prefix = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$white",
});

export const Input = styled("input", {
  fontSize: "$sm",
  color: "$gray700",
  fontWeight: "$regular",
  background: "$gray200",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export const LoginPageFormFooter = styled("footer", {
  width: "100%",
  marginTop: "$5",
  display: "flex",
  gap: "$5",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  p: {
    textAlign: "center",
    color: "$gray700",
    fontSize: "$sm",
  },

  a: {
    textDecoration: "none",
    color: "$gray900",
    fontWeight: "$bold",
  },
});

export const LoginPageFormButton = styled("button", {
  width: "100%",
  height: "3rem",
  display: "flex",
  gap: "$3",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "$sm",
  backgroundColor: "$blue400",
  fontWeight: "$bolder",
  color: "$gray-100",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$blue300",
    transition: "all .2s ease-in-out",
  },
});

export const MessageError = styled("strong", {
  color: "$error",
  fontSize: "$sm",
});
