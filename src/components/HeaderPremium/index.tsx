import {
  HeaderPremiumContainer,
  PopoverRootNav,
  PopoverTrigger,
  PopoverContent,
  PopoverPortal,
  EndContent,
} from "./styles";

import ptBR from "date-fns/locale/pt-BR";

import { useEffect, useState } from "react";
import { useThemes } from "../../hooks/useThemes";
import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import { Avatar } from "../Avatar";
import { Button } from "@ignite-ui/react";
import { useLogin } from "../../contexts/LoginContext";
import { useAvatar } from "../../hooks/useAvatart";
import { format } from "date-fns";
import { Countdown } from "../Countdown";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

export function HeaderPremium() {
  const { themes } = useThemes();
  const { handleFile, previewImg, deleteFile } = useAvatar();
  const { saveName, setSaveName, deleteStorage } = useLogin();
  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setSaveName(localStorage.getItem("username"));
  }, []);

  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <HeaderPremiumContainer className={themes}>
      <Link href="/premium">
        <img src="/logo-light.svg" alt="Podcastr" />
      </Link>
      <div>
        <>
          <button onClick={deleteFile}></button>
          <PopoverRootNav>
            <PopoverTrigger asChild>
              <button onClick={openExitButton}>
                <Avatar />

                <strong>{saveName}</strong>
              </button>
            </PopoverTrigger>
            <PopoverPortal>
              <PopoverContent>
                <Button onClick={deleteFile}>Apagar imagem</Button>
                <Button>
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleFile}
                  />
                  <button>Alterar imagem</button>
                  {/* ver: https://www.youtube.com/watch?v=G5UZmvkLWSQ */}
                </Button>
                <Button onClick={() => deleteStorage("username")}>Sair</Button>
              </PopoverContent>
            </PopoverPortal>
          </PopoverRootNav>
          <PopoverRootNav>
            <PopoverTrigger asChild>
              <Button variant="primary">PLANO</Button>
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
