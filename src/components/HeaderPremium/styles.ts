import { styled } from "../../styles/.";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";

export const HeaderPremiumContainer = styled("header", {
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
    textDecoration: "none",
    color: "#fff",

    div: {
      display: "flex",
      gap: "$5",
      alignItems: "center",
      justifyContent: "center",

      img: {
        width: "51px",
        height: "51px",
      },

      strong: {
        fontSize: "$2xl",
        color: "$text",
      },
    },
  },

  button: {
    fontWeight: "$bold",
  },
});

export const PopoverRootNav = styled(Popover.Root, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
});

export const PopoverTrigger = styled(Popover.Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  color: "$colorAvatar",
  background: "$avatar",
  borderRadius: "9999px",
  padding: "$2",
});

export const PopoverPortal = styled(Popover.Portal, {
  position: "absolute",
  display: "flex",
  alignItems: "center",

  background: "#555",
  padding: "0 3rem",

  height: "2rem",

  borderRadius: " 30px",

  zIndex: "50",
  transition: "all .5s",
  cursor: "pointer",
});
export const PopoverContent = styled(Popover.Content, {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  alignItems: "center",
  justifyContent: "center",
  color: "$text",
  background: "$gray800",
  padding: "$3",
  marginTop: "$4",
  borderRadius: "$lg",

  button: {
    width: "100%",
    background: "transparent",
    fontWeight: "$bold",
    color: "$white",
    a: {
      textDecoration: "none",
      color: "#fff",
    },
  },

  form: {
    input: {
      display: "none",
    },

    label: {},
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
