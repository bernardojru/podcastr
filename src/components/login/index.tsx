import { LoginContainer, Overlay, CloseButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Envelope, Password, User, X } from "phosphor-react";

export function Login() {
  return (
    <Dialog.Portal>
      <Overlay />
      <LoginContainer>
        <header>
          <h2>Fazer o Login</h2>
          <CloseButton>
            <X size={15} weight="bold" />
          </CloseButton>
        </header>
        <form>
          <span>
            <User size={20} weight="light" /> <strong>Nome:</strong>
          </span>
          <input type="text" placeholder="Digite o seu nome" />
          <span>
            <Envelope size={20} weight="light" /> <strong>Email:</strong>
          </span>
          <input type="email" placeholder="Digite o seu email" />
          <span>
            <Password size={20} weight="light" /> <strong>Senha:</strong>
          </span>
          <input type="password" placeholder="Digite a sua senha" />
          <button type="submit">Entrar Online</button>
        </form>
      </LoginContainer>
    </Dialog.Portal>
  );
}
