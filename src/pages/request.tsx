import Link from "next/link";
import { RequestContainer, RequestConst } from "../styles/pages/request";
import { ArrowLeft } from "phosphor-react";
import Head from "next/head";

export default function Request() {
  return (
    <>
      <Head>
        <title>Resgatar senha | berCast</title>
      </Head>
      <RequestContainer>
        <RequestConst>
          <h1>Para resgatar a sua senha Mande mensagem nesse Email!</h1>
          <Link href="mailto:bernardogomes860@gmail.com">
            bernardogomes860@gmail.com
          </Link>
          <Link href="/login">
            <ArrowLeft />
            Voltar para o login
          </Link>
        </RequestConst>
      </RequestContainer>
    </>
  );
}
