import {
  HeaderContainer,
  PopoverRootNav,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
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
import { Avatar } from "../Avatar";

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
      <div>
        <img src="/logo-light.svg" alt="Podcastr" />

        <PopoverRootNav>
          <PopoverTrigger asChild>
            <button onClick={openExitButton}>
              <Avatar />
              <strong>bernardo gomes josé</strong>
            </button>
          </PopoverTrigger>
          <PopoverPortal>
            <PopoverContent>
              <button>sair</button>
            </PopoverContent>
          </PopoverPortal>
        </PopoverRootNav>
      </div>
      <div>
        <EndContent href="/">
          <ArrowLeft size={25} />
        </EndContent>
        <ToggleThemesButton />
      </div>
    </HeaderContainer>
  );
}
