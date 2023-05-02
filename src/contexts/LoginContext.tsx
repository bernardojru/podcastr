import { AxiosError } from "axios";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { RegisterFormData } from "../components/login";
import { useStepUpgrade } from "../hooks/useStepUpgrade";
import { server } from "../lib/axios";
import { prisma } from "../lib/prisma";
import { useAvatar } from "../hooks/useAvatart";

interface LoginContextProps {
  saveName: string;
  setSaveName: any;
  requestName: (key: string, name: string) => void;
  deleteStorage: (key: string) => void;
}

interface LoginContextProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextProps);

export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const { showStepPayment } = useStepUpgrade();
  const [saveName, setSaveName] = useState("");
  const { deleteFile } = useAvatar();
  const router = useRouter();

  function requestName(key: string, name: string) {
    localStorage.setItem(key, name);
    if (name && key) {
      localStorage.getItem(key);
      setSaveName(name);
    }
  }

  function deleteStorage(key: string) {
    localStorage.removeItem(key);
    localStorage.removeItem("image");
    router.push("/");
  }

  return (
    <LoginContext.Provider
      value={{ requestName, saveName, setSaveName, deleteStorage }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
