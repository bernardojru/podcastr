import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { User } from "phosphor-react";
import { useAvatar } from "../../hooks/useAvatart";


export function Avatar() {
  const { previewImg } = useAvatar();

  return (
    <AvatarContainer size='xl'>
      <AvatarImage />
      <AvatarFallback delayMs={600}>
        {previewImg ? (
          <img src={previewImg && URL.createObjectURL(previewImg)} alt="" />
        ) : (
          <User />
        )}
      </AvatarFallback>
    </AvatarContainer>
  );
}
