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
import { string, z } from "zod/lib";
import { Avatar } from "../Avatar";
import { api, server } from "../../lib/axios";

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

const nameChema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 4 letras" }),
});

type nameType = z.infer<typeof nameChema>;

export function Header() {
  const { themes } = useThemes();
  const [user, setUser] = useState<User | null>(null);
  const [] = useState()

  async function handleGetUserInfo() {
    const { data } = await server.get("/api/", {
      params: {
        name
      },
    });

    setUser(data);
    console.log(data, "aquiiiiiiiiiiiiiii!");
  }

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderContainer className={themes}>
      <div>
        <img src="/logo-light.svg" alt="Podcastr" />

        <PopoverRootNav>
          <PopoverTrigger asChild>
            <button onClick={openExitButton}>
              <Avatar />
              <strong>{user?.name}</strong>
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
