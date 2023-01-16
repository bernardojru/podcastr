import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  themes: string;
  toggleThemes: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

type Themes = "dark" | "light";

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [themes, setThemes] = useState<Themes>("dark");

  function toggleThemes() {
    if (themes === "dark") {
      setThemes("light");
    } else {
      setThemes("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{ themes, toggleThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}
