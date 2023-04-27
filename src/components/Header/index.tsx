import {
  HeaderContainer,
  EndContent,
  PopoverContent,
  PopoverPortal,
  PopoverRootNav,
  PopoverTrigger,
} from "./styles";

import { useThemes } from "../../hooks/useThemes";
import { ToggleThemesButton } from "../ToggleThemesButton";
import { ArrowLeft } from "phosphor-react";
import { Button } from "@ignite-ui/react";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { useLogin } from "../../contexts/LoginContext";
import { useAvatar } from "../../hooks/useAvatart";
import { FormEvent, useEffect, useState } from "react";
import { server } from "../../lib/axios";

interface User {
  name: string;
  email: string;
  password: string;
}

export function Header() {
  const { handleFile, previewImg, deleteFile } = useAvatar();
  const { saveName, setSaveName, deleteStorage } = useLogin();
  const [isOpen, setIsOpen] = useState(false);
  const { themes } = useThemes();
  const [user, setUser] = useState<User>();

  function handleSubmit() {
    server
      .get(`/api/profile?email=929e6392-de03-4d39-bd04-30e4acf9df47`)
      .then((res: any) => setUser(res))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderContainer className={themes}>
      <Link href="/podcast">
        <img src="/logo-light.svg" alt="Podcastr" />
      </Link>
      <div>
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
                <input type="file" onChange={handleFile} />
              </Button>
              <Button onClick={() => deleteStorage("username")}>Sair</Button>
            </PopoverContent>
          </PopoverPortal>
        </PopoverRootNav>
        <>
          <Link href="/upgrade">
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
