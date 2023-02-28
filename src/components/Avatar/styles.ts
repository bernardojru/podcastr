import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles/.";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "99999px",
  display: "inline-block",
  overflow: "hidden",

  variants: {
    size: {
      xl: {
        width: "2.7rem",
        height: "2.7rem",
      },
      lg: {
        width: "2rem",
        height: "2rem",
      },
    },
  },
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

  img: {
    width: "100$",
    height: "100%",
    color: '$gray100',
  objectFit: "cover",
  },
});