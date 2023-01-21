import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import type { AppProps } from "next/app";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
      <ThemeContextProvider>
        <PlayerContextProvider>
          <Container>
            <main>
              <Component {...pageProps} />
            </main>
            <Player />
          </Container>
        </PlayerContextProvider>
      </ThemeContextProvider>
  );
}
// acessar o : https://stitches.dev/docs/variants
