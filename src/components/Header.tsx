import Link from "next/link";
import { useState } from "react";

import { useThemes } from "../hooks/useThemes";

import { useSession, signOut } from "next-auth/react";

export function Header() {
  const { data: session } = useSession();

  const { themes, toggleThemes } = useThemes();
  const [isOpen, setIsOpen] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }
  // console.log(session?.user?.image)

  if (session) {
    return (
      <header
        className={`${
          themes === "dark" ? "bg-gray-900" : "bg-white"
        } h-24 flex items-center py-8 px-16 ${
          themes === "light" ? "border-b" : "border-b-0"
        } border-gray-100`}
      >
        <Link href="/" className="border-r pr-4">
          {themes === "dark" ? (
            <img src="/logo-dark.svg" alt="Podcastr" />
          ) : (
            <img src="/logo-light.svg" alt="Podcastr" />
          )}
        </Link>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center flex-col ml-8">
            <button
              onClick={openExitButton}
              className=" h-12 px-2  flex items-center gap-4 bg-gray-850 rounded-full"
            >
              {session.user?.image && (
                <img
                  className="w-8 h-8 rounded-full"
                  src={session.user.image}
                  alt="foto de perfil"
                />
              )}
              <p className="text-gray-100">{session?.user?.name}</p>
            </button>

            <div
              className={`${
                isOpen
                  ? "top-20 transition-all visible"
                  : "top-24 transition-all opacity-0"
              } absolute  flex  items-center bg-gray-850 px-2 h-8  rounded-md text-gray-100 z-50`}
            >
              <button onClick={() => signOut()}>Sair</button>
            </div>
          </div>

          <Link href='/podcast'>
          adicionar 
          </Link>

          
        </div>
      </header>
    );
  } else {
    return <></>;
  }
}
