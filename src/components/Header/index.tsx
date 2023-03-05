import { HeaderContainer, EndContent } from "./styles";

import { useThemes } from "../../hooks/useThemes";
import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import { Button } from "@ignite-ui/react";
import Link from "next/link";

export function Header() {
  const { themes } = useThemes();

  return (
    <HeaderContainer className={themes}>
      <img src="/logo-light.svg" alt="Podcastr" />
      <div>
        <>
          <Link href="/register">
            <Button variant="secondary">UPGRADE</Button>
          </Link>
        </>
        <EndContent href="/">
          <ArrowLeft size={25} />
        </EndContent>
        <ToggleThemesButton />
      </div>
    </HeaderContainer>
  );
}
