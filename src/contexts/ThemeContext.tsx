import { createContext, ReactNode, useState } from "react";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

interface ThemeContextType {
  themes: string;
  toggleThemes: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themes, setThemes] = useState<any>(light);

  function toggleThemes() {
    setThemes(themes === light ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ themes, toggleThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}
