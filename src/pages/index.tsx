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
        <title>Home | berCast</title>
      </Head>
      <HomeContainer className={themes}>
        <header>
          <div>
            <img src="/icon-128x128.png" alt="" />
            <strong>berCast</strong>
          </div>
          <nav>
            <Link href="/login" prefetch>
              <button>Entrar</button>
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

          <Link href="/login" prefetch>
            <button>Entrar</button>
          </Link>
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
