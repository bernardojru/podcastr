import { globalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import type { AppProps } from "next/app";
import { Player } from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { AvatarContextProvider } from "../contexts/AvatarContext";
import { StepUpgradeContextProvider } from "../contexts/StepUpgradeContext";
import { CheckoutContextProvider } from "../contexts/CheckoutContext";
import { LoginContextProvider } from "../contexts/LoginContext";

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeContextProvider>
      <LoginContextProvider>
        <CheckoutContextProvider>
          <AvatarContextProvider>
            <PlayerContextProvider>
              <StepUpgradeContextProvider>
                <Container>
                  <main>
                    <Component {...pageProps} />
                  </main>
                  <Player />
                </Container>
              </StepUpgradeContextProvider>
            </PlayerContextProvider>
          </AvatarContextProvider>
        </CheckoutContextProvider>
      </LoginContextProvider>
    </ThemeContextProvider>
  );
}
