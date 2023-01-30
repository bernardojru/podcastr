import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { User } from "phosphor-react";

interface AvatarProps {
  previewImg: any;
}

export function Avatar({ previewImg }: AvatarProps) {
  // console.log(previewImg, 'Do avatar')
  // console.log(URL.createObjectURL(previewImg))
  return (
    <AvatarContainer>
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
