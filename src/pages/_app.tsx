import {globalStyles} from '../styles/global'

import type { AppProps } from "next/app";

// import '../styles/globals.css'

import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import { SessionProvider } from "next-auth/react";

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <PlayerContextProvider>
          <div className="flex">
            <main className="flex-1">
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </div>
        </PlayerContextProvider>
      </ThemeContextProvider>
    </SessionProvider>
  );
}
