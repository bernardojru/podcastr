import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { User } from "phosphor-react";
import { useAvatar } from "../../hooks/useAvatart";
import { useEffect } from "react";

export function Avatar() {
  const { previewImg, setPreviewImg } = useAvatar();

  useEffect(() => {
    setPreviewImg(localStorage.getItem("image"));
  }, []);

  return (
    <AvatarContainer size="xl">
      <AvatarImage />
      <AvatarFallback delayMs={600}>
        {previewImg ? <img src={previewImg} alt="" /> : <User />}
      </AvatarFallback>
    </AvatarContainer>
  );
}
