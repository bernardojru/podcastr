import Head from "next/head";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <div
        className={`${
          session ? "h-calc" : "h-screen"
        } flex flex-col items-center justify-center bg-purple-500 text-white text-center`}
      >
        <img src="/playing.svg" alt="Tocando agora" className="h-32 w-32" />
        <h1 className=" border-gray-100 text-4xl">
          O melhor para você ouvir, sempre
        </h1>
        <p className="flex items-center  gap-4">
          Faça login com seu Google para começar
        </p>
        <button
          className="bg-gradientButton h-14 px-10 rounded-md"
          onClick={() => signIn()}
        >
          Entrar com Google
        </button>
      </div>
    </>
  );
}
