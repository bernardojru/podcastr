import { createContext, ReactNode, useState } from "react";

interface AvatarContextType {
  previewImg: any;
  setPreviewImg: any;
  handleFile: (e: any) => void;
  deleteFile: () => void;
}

interface AvatarContextProviderProps {
  children: ReactNode;
}

export const AvatarContext = createContext({} as AvatarContextType);

export function AvatarContextProvider({
  children,
}: AvatarContextProviderProps) {
  const [previewImg, setPreviewImg] = useState<any>();

  function handleFile(e: any) {
    const file = e.target.files[0];
    const url: string = URL.createObjectURL(file);

    localStorage.setItem("image", url);
    if ("image" && url) {
      localStorage.getItem("image");
      setPreviewImg(url);
    }
  }

  function deleteFile() {
    localStorage.removeItem("image");
  }

  return (
    <AvatarContext.Provider
      value={{ previewImg, handleFile, setPreviewImg, deleteFile }}
    >
      {children}
    </AvatarContext.Provider>
  );
}
