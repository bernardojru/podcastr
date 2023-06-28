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
import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import { Avatar } from "../Avatar";
import { Button } from "@ignite-ui/react";
import { useLogin } from "../../contexts/LoginContext";
import { useAvatar } from "../../hooks/useAvatart";
import { Countdown } from "../Countdown";
import Link from "next/link";

export function HeaderPremium() {
  const { themes } = useThemes();
  const { handleFile, deleteFile } = useAvatar();
  const { saveName, setSaveName, deleteStorage } = useLogin();
  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (saveName) {
      return;
    } else {
      setSaveName(localStorage.getItem("username"));
    }
  }, []);

  return (
    <HeaderPremiumContainer className={themes}>
      <Link href="/premium">
        <div>
          <img src="/icon-128x128.png" alt="" />
          <strong>berCast</strong>
        </div>
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
                  <Link
                    href="https://api.whatsapp.com/send?phone=244934009132"
                    target="__blank"
                  >
                    Enviar mensagem
                  </Link>
                </Button>
                <Button>
                  <input type="file" onChange={handleFile} />
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
