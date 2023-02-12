import { createContext, ReactNode, useState } from "react";

interface AvatarContextType {
  previewImg: any;
  handleFile: (e: any) => void;
}

interface AvatarContextProviderProps {
  children: ReactNode;
}

export const AvatarContext = createContext({} as AvatarContextType);

export function AvatarContextProvider({ children }: AvatarContextProviderProps) {
  const [previewImg, setPreviewImg] = useState();

  function handleFile(e: any) {
    const image = e.target.files[0];

    setPreviewImg(image);
  }

  return (
    <AvatarContext.Provider value={{ previewImg, handleFile }}>
      {children}
    </AvatarContext.Provider>
  );
}
