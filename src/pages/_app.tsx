import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <div className="flex">
        <main className={`flex-1 bg-gray-50 transition-colors`}>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}
