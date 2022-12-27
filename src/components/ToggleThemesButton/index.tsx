import { ToggleThemesButtonContainer } from "./styles";
import { useThemes } from "../../hooks/useThemes";
import { Moon, Sun } from "phosphor-react";

export function ToggleThemesButton() {
  const { themes, toggleThemes } = useThemes();
  return (
    <ToggleThemesButtonContainer>
      <button onClick={toggleThemes} title='Trocar de tema'>
        {themes === "dark" ? (
          <Sun size={25} color="#fff" />
        ) : (
          <Moon size={25} color="#111" />
        )}
      </button>
    </ToggleThemesButtonContainer>
  );
}
