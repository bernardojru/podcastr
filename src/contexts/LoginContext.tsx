import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";

interface LoginContextProps {
  saveName: string;
  saveEmail: string;
  setSaveName: any;
  requestName: (key: string, name: string) => void;
  requestEmail: (key: string, email: string) => void;
  deleteStorage: (key: string) => void;
}

interface LoginContextProviderProps {
  children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextProps);

export function LoginContextProvider({ children }: LoginContextProviderProps) {
  const [saveName, setSaveName] = useState("");
  const [saveEmail, setSaveEmail] = useState("");
  const router = useRouter();

  function requestName(key: string, name: string) {
    localStorage.setItem(key, name);
    if (name && key) {
      localStorage.getItem(key);
      setSaveName(name);
    }
  }

  function requestEmail(key: string, email: string) {
    localStorage.setItem(key, email);
    if (email && key) {
      localStorage.getItem(key);
      setSaveEmail(email);
    }
  }

  function deleteStorage(key: string) {
    localStorage.removeItem(key);
    localStorage.removeItem("image");
    router.push("/");
  }

  return (
    <LoginContext.Provider
      value={{
        requestName,
        requestEmail,
        saveName,
        saveEmail,
        setSaveName,
        deleteStorage,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  return useContext(LoginContext);
}
