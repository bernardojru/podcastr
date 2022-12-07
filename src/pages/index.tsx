import { HomeContainer, Button } from "../styles/pages/home";

import Head from "next/head";
import { GetServerSideProps } from "next";
import { getSession, signIn, useSession } from "next-auth/react";
import { ToggleThemesButton } from "../components/ToggleThemesButton";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <HomeContainer>
        <header>
          <img src="/simple-logo.svg" alt="" />

          <nav>
            <Link href='/podcast'>
              <button>Entrar</button>
            </Link>
            <ToggleThemesButton />
          </nav>
        </header>

        <section>
          <span>Podcast Application</span>
          <h1>Podcastr</h1>
          <p>
            Uma plataforma construída para transmissão de podcasts sobre a area
            de desenvolvimento de softwares.
          </p>

          <Button onClick={() => signIn("google")}>Entrar com Google</Button>
        </section>

        <section>
          <img src="/template.png" alt="" />
        </section>
      </HomeContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/podcast",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
