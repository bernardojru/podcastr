import {
  HeaderPremiumContainer,
  PopoverRootNav,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  EndContent,
} from "./styles";

import { useEffect, useState } from "react";

import { useThemes } from "../../hooks/useThemes";
import { prisma } from "../../lib/prisma";
import ptBR from "date-fns/locale/pt-BR";

import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import { Avatar } from "../Avatar";
import { api, server } from "../../lib/axios";
import { z } from "zod";
import { Button } from "@ignite-ui/react";
import Link from "next/link";
import { useCheckout } from "../../contexts/CheckoutContext";
import { useLogin } from "../../contexts/LoginContext";
import { useAvatar } from "../../hooks/useAvatart";
import { format, parseISO } from "date-fns";
import { Countdown } from "../Countdown";

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

export function HeaderPremium() {
  const { themes } = useThemes();
  const { showItem } = useCheckout();
  const [user, setUser] = useState<User | null>(null);
  const { handleFile } = useAvatar();
  const { saveName, setSaveName, deleteStorage } = useLogin();

  const name = "Bernardo José";

  async function handleGetUserInfo() {
    const { data } = await server.get("/api/", {
      params: {
        name: saveName,
      },
    });

    const { user } = data;

    setUser(user);
    console.log(user, "aquiiiiiiiiiiiiiii!");
  }

  useEffect(() => {
    setSaveName(localStorage.getItem("username"));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <HeaderPremiumContainer className={themes}>
      <img src="/logo-light.svg" alt="Podcastr" />
      <div>
        <>
          <PopoverRootNav>
            <PopoverTrigger asChild>
              <button onClick={openExitButton}>
                <Avatar />
                <strong>{saveName}</strong>
              </button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent>
                <button onClick={() => deleteStorage("username")}>sair</button>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRootNav>
          <PopoverRootNav>
            <PopoverTrigger asChild>
              <Button variant="secondary">PLANO</Button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent>
                <Countdown />
              </PopoverContent>
            </PopoverPortal>
          </PopoverRootNav>
        </>
        <EndContent href="/">
          <ArrowLeft size={25} />
        </EndContent>
        <ToggleThemesButton />
      </div>
    </HeaderPremiumContainer>
  );
}
