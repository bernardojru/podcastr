import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles/.";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "99999px",
  display: "inline-block",
  width: "5rem",
  height: "5rem",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#323238",
  color: "#202024",

  svg: {
    width: "2rem",
    height: "2rem",
    color: '$gray100',
  },
  img: {
    width: "8rem",
    height: "8rem",
  },
});