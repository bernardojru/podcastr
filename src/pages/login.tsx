import { Envelope, LockSimple } from "phosphor-react";
import {
  LoginContainer,
  LoginPageFormButton,
  Input,
  LoginPageFormContainer,
  LoginPageFormFooter,
  Prefix,
  TextInputContainer,
  LoginPageLabel,
  MessageError,
} from "../styles/pages/login";
import Link from "next/link";
import Head from "next/head";
import { z } from "zod";
import { server } from "../lib/axios";
import { useAvatar } from "../hooks/useAvatart";
import { useStepUpgrade } from "../hooks/useStepUpgrade";
import { useLogin } from "../contexts/LoginContext";
import { useThemes } from "../hooks/useThemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

const loginFormSchema = z.object({
  email: z.string().min(4, { message: "Esse email não existe no sistema!" }),
  password: z.string().min(5, { message: "A senha está incorreta!" }),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const { themes } = useThemes();
  const { requestName } = useLogin();
  const { showStepPayment } = useStepUpgrade();
  const { handleFile, previewImg } = useAvatar();

  const router = useRouter();

  async function handleSubmitLogin(data: LoginFormData) {
    try {
      await server.post("/api/login", {
        email: data.email,
        password: data.password,
      });
      await router.push(`/podcast`);
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message);
      }
      console.error(error);
    }
  }
  return (
    <>
      <Head>
        <title>Login | Podcastr</title>
      </Head>
      <LoginContainer className={themes}>
        <LoginPageLabel>
          <img src="/logo-light.svg" alt="Podcastr" />
          <h1>Fazer login na plataforma!</h1>
        </LoginPageLabel>
        <LoginPageFormContainer onSubmit={handleSubmit(handleSubmitLogin)}>
          <TextInputContainer>
            <Prefix>
              <Envelope size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="E-mail" {...register("email")} />
          </TextInputContainer>
          <MessageError>{errors.email && errors.email.message}</MessageError>
          <TextInputContainer>
            <Prefix>
              <LockSimple size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="Senha" {...register("password")} />
          </TextInputContainer>
          <MessageError>
            {errors.password && errors.password.message}
          </MessageError>
          <LoginPageFormFooter>
            <LoginPageFormButton type="submit">ENTRAR</LoginPageFormButton>

            <p>
              Não tem uma conta? <Link href="/register">Registre-se</Link>
            </p>
          </LoginPageFormFooter>
        </LoginPageFormContainer>
      </LoginContainer>
    </>
  );
}
