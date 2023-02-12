import { styled } from "../../styles/.";
import Link from "next/link";
import * as Popover from "@radix-ui/react-popover";

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
  },

  a: {
    borderRightWidth: "1px",
    paddingRight: "1rem",
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
  gap: '$2',
  color: "#fff",
  background: '#131313',
  border: "1px solid $gray500",
  borderRadius: "9999px",
  padding: '$2',

  marginLeft: "2rem",

  "> button": {
    height: "4rem",
    padding: "0 0.5rem",

    display: "flex",
    alignItems: "center",

    gap: "1rem",

    borderRadius: "9999px",
    border: "1px solid $gray500",


    strong: {
      color: "#fff",
    },
  },
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
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",

  color: "#fff",
});

export const EndContent = styled(Link, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray500",
  borderRadius: "$lg",
  height: "2rem",
  width: "4rem",

  color: "white",

  textDecoration: "none",
  marginRight: "$5",
});
