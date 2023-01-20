import { HomeContainer,  } from "../styles/pages/home";

import Head from "next/head";
import { GetStaticProps } from "next";
import { useThemes } from "../hooks/useThemes";
import { ToggleThemesButton } from "../components/ToggleThemesButton";
import Link from "next/link";
import { light } from "../styles/themes/light";

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
                <button>Entrar grátis</button>
              </Link>
              <ToggleThemesButton />
            </nav>
          </header>

          <section>
            <span>Podcast Application</span>
            <h1>Podcastr</h1>
            <p>
              Uma plataforma construída para transmissão de podcasts sobre a
              área de desenvolvimento de softwares.
            </p>

            <button>Fazer Login</button>
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
    revalidate: 1000 // uma hora: 60 * 60 * 1
  }
}
