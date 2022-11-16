import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Moon, Sun } from "phosphor-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  function openExitButton() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-white h-24 flex items-center py-8 px-16 border-b border-gray-100">
      <Link href="/" className="border-r pr-4">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center flex-col ml-8">
          <button
            onClick={openExitButton}
            className=" h-12 px-2  flex items-center gap-4 bg-gray-900 rounded-full"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://github.com/bernardojru.png"
              alt="perfil"
            />
            <p className="text-gray-100">bernardo</p>
          </button>

          <div
            className={`${
              isOpen
                ? "top-20 transition-all visible"
                : "top-24 transition-all opacity-0"
            } absolute  flex  items-center bg-gray-900 px-2 h-8 rounded-md text-gray-100 z-50`}
          >
            <button>Sair</button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-md p-2">
          <button className="flex items-center">
            {toggleTheme ? <Sun size={20} color="#111" /> : <Moon size={20} color='#fff' />}
          </button>
        </div>
      </div>
    </header>
  );
}

<p className=" border-gray-100">O melhor para você ouvir, sempre</p>;
