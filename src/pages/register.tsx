import { Envelope, LockSimple, User } from "phosphor-react";
import {
  Input,
  Prefix,
  RegisterContainer,
  RegisterPageFormButton,
  RegisterPageFormContainer,
  RegisterPageFormFooter,
  TextInputContainer,
  RegisterPageLabel,
  MessageError,
} from "../styles/pages/register";
import Link from "next/link";
import Head from "next/head";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { server } from "../lib/axios";
import { useRouter } from "next/router";
import { useLogin } from "../contexts/LoginContext";

const registerFormSchema = z.object({
  name: z.string().min(6, { message: "O usuário precisa de um nome válido!" }),
  email: z
    .string()
    .email("Insira um endereço de e-mail válido")
    .nonempty("O campo de e-mail é obrigatório"),
  password: z
    .string()
    .min(6, { message: "A senha precisa ser forte e segura!" }),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const { requestName, requestEmail, setSaveName } = useLogin();

  const router = useRouter();

  async function handleSubmitRegister(data: RegisterFormData) {
    const { name, email } = data;
    try {
      await server.post("/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      requestName("username", name);
      requestEmail("email", email);
      setSaveName(name);
      await router.push(`/podcast?email=${email}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Register | berCast</title>
      </Head>
      <RegisterContainer>
        <RegisterPageLabel>
          <Link href="/">
            <div>
              <img src="/icon-128x128.png" alt="" />
              <strong>berCast</strong>
            </div>
          </Link>
          <h1>Criar uma conta na plataforma!</h1>
        </RegisterPageLabel>
        <RegisterPageFormContainer
          onSubmit={handleSubmit(handleSubmitRegister)}
        >
          <TextInputContainer>
            <Prefix>
              <Envelope size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="Seu E-mail" {...register("email")} />
          </TextInputContainer>
          <MessageError>{errors.email && errors.email.message}</MessageError>
          <TextInputContainer>
            <Prefix>
              <User size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="Seu Nome" {...register("name")} />
          </TextInputContainer>
          <MessageError>{errors.name && errors.name.message}</MessageError>
          <TextInputContainer>
            <Prefix>
              <LockSimple size={15} weight="fill" color="#121214" />
            </Prefix>
            <Input placeholder="Sua Senha" {...register("password")} />
          </TextInputContainer>
          <MessageError>
            {errors.password && errors.password.message}
          </MessageError>

          <RegisterPageFormFooter>
            <RegisterPageFormButton type="submit">
              ENTRAR
            </RegisterPageFormButton>

            <p>
              já tem uma conta? <Link href="/login">Login</Link>
            </p>
          </RegisterPageFormFooter>
        </RegisterPageFormContainer>
      </RegisterContainer>
    </>
  );
}
