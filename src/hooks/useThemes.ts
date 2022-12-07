import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useThemes () {
  return useContext(ThemeContext);
};
