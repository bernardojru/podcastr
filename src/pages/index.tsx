import { HomeContainer } from "../styles/pages/home";

import Head from "next/head";
import { GetStaticProps } from "next";
import { useThemes } from "../hooks/useThemes";
import { ToggleThemesButton } from "../components/ToggleThemesButton";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Login } from "../components/login";
import { useState } from "react";

// import f from ''

// REPRODUZIR AUDIO NÃO DEU CERTO JÁ TENTEI DE TUDO

export default function Home() {
  const { themes } = useThemes();

  return (
    <>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <HomeContainer className={themes}>
        <header>
          <img src="/simple-logo.svg" alt="" />
          <nav>
            <Link href="/podcast" prefetch>
              <button>Entrar offline</button>
            </Link>
            <ToggleThemesButton />
          </nav>
        </header>

        <section>
          <span>Podcast Application</span>
          <h1>Tech podcast</h1>
          <p>
            Uma plataforma construída para transmissão de podcasts sobre a área
            de desenvolvimento de softwares.
          </p>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>Fazer Login</button>
            </Dialog.Trigger>
            <Login />
          </Dialog.Root>
        </section>

        <section>
          <img src="/template.png" alt="" />
        </section>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 1000, // uma hora: 60 * 60 * 1
  };
};

{/* <audio id="myAudio" controls>
  <source src="/audios/Faladev30.mp3" type="audio/mpeg" />O falaDev30 já
  funciona.
</audio>; */}
