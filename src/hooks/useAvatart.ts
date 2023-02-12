import { useContext } from "react";
import { AvatarContext } from "../contexts/AvatarContext";

export function useAvatar () {
  return useContext(AvatarContext);
};
