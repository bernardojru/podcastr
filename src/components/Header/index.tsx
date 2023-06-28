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
import { useState } from "react";
import { useRouter } from "next/router";

export function Header() {
  const { handleFile, deleteFile } = useAvatar();
  const { saveName, deleteStorage, saveEmail } = useLogin();
  const [isOpen, setIsOpen] = useState(false);
  const { themes } = useThemes();

  const router = useRouter();
  const { email } = router.query;

  function openExitButton() {
    setIsOpen(!isOpen);
  }

  return (
    <HeaderContainer className={themes}>
      <Link href="/podcast">
        <div>
          <img src="/icon-128x128.png" alt="" />
          <strong>berCast</strong>
        </div>
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
          <Link href={`/upgrade?email=${email}`}>
            <Button variant="secondary">PREMIUM</Button>
          </Link>
        </>
        <EndContent href={`/?email=${saveEmail}`}>
          <ArrowLeft size={25} />
        </EndContent>
        <ToggleThemesButton />
      </div>
    </HeaderContainer>
  );
}
