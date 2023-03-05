import { HomeContainer } from "../styles/pages/home";

import Head from "next/head";
import { GetStaticProps } from "next";
import { useThemes } from "../hooks/useThemes";
import { ToggleThemesButton } from "../components/ToggleThemesButton";
import Link from "next/link";
import { useLogin } from "../contexts/LoginContext";
import { useEffect } from "react";

export default function Home() {
  const { themes } = useThemes();
  const { saveName, setSaveName } = useLogin();

  useEffect(() => {
    setSaveName(localStorage.getItem("username"));
  }, []);
  return (
    <>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <HomeContainer className={themes}>
        <header>
          <img src="/simple-logo.svg" alt="" />
          <nav>
            {saveName ? (
              <Link href="/premium" prefetch>
                <button>Entrar para o Premium</button>
              </Link>
            ) : (
              <Link href="/podcast" prefetch>
                <button>Entrar</button>
              </Link>
            )}
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
          {saveName ? (
              <Link href="/premium" prefetch>
                <button>Entrar para o Premium</button>
              </Link>
            ) : (
              <Link href="/podcast" prefetch>
                <button>Entrar</button>
              </Link>
            )}
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
