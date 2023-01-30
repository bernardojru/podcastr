import {
  HeaderContainer,
  Navigation,
  DetailsProfile,
  EndContent,
} from "./styles";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useThemes } from "../../hooks/useThemes";
import { prisma } from "../../lib/prisma";

import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import axios from "axios";
import { string } from "zod/lib";

interface User {
  name: string;
  password: string;
  email: string;
  img: string;
}

export function Header() {
  const { themes } = useThemes();
  const [user, setUser] = useState<User | any>("");

  // async function get() {
  //   const queryUser = await prisma.user.findUnique({
  //     where: {
  //       email: 'iecie@gamil.com'
  //     },
  //   });

  // }

  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  // link=https://www.prisma.io/docs/concepts/components/prisma-client/crud#read

  return (
    <HeaderContainer className={themes}>
      <img src="/logo-light.svg" alt="Podcastr" />

      <>
        <Navigation>
          <div>
            {/* AQUI AQUI AQUI UPLOAD DE IMAGEM */}

            {/* Termina aqui */}
            <button onClick={openExitButton}>
              <img
                src="https://github.com/bernardojru.png"
                alt="foto de perfil"
              />
              {/* <strong>{user.name}</strong> */}
            </button>

            <DetailsProfile
              style={{
                transform: `${
                  !isOpen ? "translateY(80px)" : "translateY(60px)"
                } `,
                opacity: `${!isOpen ? "0" : "1"}`,
              }}
            >
              <button>Sair</button>
            </DetailsProfile>
          </div>
        </Navigation>
      </>
      <EndContent href="/">
        <ArrowLeft size={25} />
      </EndContent>
      <ToggleThemesButton />
    </HeaderContainer>
  );
}
