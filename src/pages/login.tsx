import { Envelope, LockSimple, User } from "phosphor-react";
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
import { boolean, z } from "zod";
import { server } from "../lib/axios";
import { useLogin } from "../contexts/LoginContext";
import { useThemes } from "../hooks/useThemes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { prisma } from "../lib/prisma";

const loginFormSchema = z.object({
  name: z.string().min(6, { message: "O usuário precisa de um nome válido!" }),
  email: z
    .string()
    .email("Insira um endereço de e-mail válido")
    .nonempty("O campo de e-mail é obrigatório"),
  password: z.string().min(6, { message: "A senha está incorreta!" }),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

interface LoginProps {
  userSubscribed: boolean;
}

export default function Login({ userSubscribed }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const { requestName, requestEmail, setSaveName, saveEmail } = useLogin();
  const { themes } = useThemes();

  const router = useRouter();

  async function handleSubmitLogin(data: LoginFormData) {
    const { name, email } = data;
    try {
      const user = await server.post("/api/login", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      if (user.data.userSubscribed) {
        await router.push("premium");
        setSaveName(name);
      } else {
        await router.push(`/podcast?email=${email}`);
        requestName("username", name);
        requestEmail("email", email);
        setSaveName(name);
      }
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
        <title>Login | berCast</title>
      </Head>
      <LoginContainer className={themes}>
        <LoginPageLabel>
          <Link href="/">
            <div>
              <img src="/icon-128x128.png" alt="" />
              <strong>berCast</strong>
            </div>
          </Link>
          <h1>Fazer login na plataforma!</h1>
        </LoginPageLabel>
        <LoginPageFormContainer onSubmit={handleSubmit(handleSubmitLogin)}>
          <TextInputContainer>
            <Prefix>
              <User size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="Seu Nome" {...register("name")} />
          </TextInputContainer>
          <MessageError>{errors.name && errors.name.message}</MessageError>
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
            <p>
              Esqueceu a sua senha? <Link href="/request">Recuperar senha</Link>
            </p>
          </LoginPageFormFooter>
        </LoginPageFormContainer>
      </LoginContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
