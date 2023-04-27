import Link from "next/link";
import { RequestContainer, RequestConst } from "../styles/pages/request";
import { ArrowLeft } from "phosphor-react";

export default function Request() {
  return (
    <RequestContainer>
      <RequestConst>
        <h1>Para resgatar a sua senha Mande mensagem nesse Email!</h1>
        <strong>bernardogomes860@gmail.com</strong>
        <Link href="/login">
          <ArrowLeft />
          Voltar para o login
        </Link>
      </RequestConst>
    </RequestContainer>
  );
}
