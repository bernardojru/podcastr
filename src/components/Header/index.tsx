import {
  HeaderContainer,
  Navigation,
  DetailsProfile,
  EndContent,
} from "./styles";

import Link from "next/link";
import { useState } from "react";

import { useThemes } from "../../hooks/useThemes";

import { useSession, signOut } from "next-auth/react";
import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";

export function Header() {
  const { themes } = useThemes();
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }
  // console.log(session?.user?.image)

  return (
    <HeaderContainer style={{background: `${themes === 'dark' ? 'rgb(13, 13, 13)' : '#f7f7f7'}`, borderBottom: `${themes === 'dark' ? '1px solid rgb(32, 35, 39)' : '1px solid #999'}`,}}>
        <img src="/logo-light.svg" alt="Podcastr" />

      {session && (
        <>
          <Navigation>
            <div>
              <button onClick={openExitButton}>
                {session?.user?.image && (
                  <img
                    src="https://github.com/bernardojru.png"
                    alt="foto de perfil"
                  />
                )}
                <strong>{session?.user?.name}</strong>
              </button>

              {/* 'transform: "translateY(60px)"' */}
              <DetailsProfile
                style={{
                  transform: `${
                    !isOpen ? "translateY(80px)" : "translateY(60px)"
                  } `,
                  opacity: `${!isOpen ? '0' : '1'}`
                }}
                onClick={() => signOut()}
              >
                <button>Sair</button>
              </DetailsProfile>
            </div>
          </Navigation>
        </>
      )}
      <EndContent>
        {!session && (
          <Link href="/" style={{background: `${themes === 'dark' ? '#131313' : '#aeaeb0'}`, color: `${themes === 'dark' ? 'white' : '#131313'}`}}>
            <ArrowLeft size={25} />
            voltar
          </Link>
        )}
        <ToggleThemesButton />
      </EndContent>
    </HeaderContainer>
  );
}
