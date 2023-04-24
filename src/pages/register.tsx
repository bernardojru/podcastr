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
import { AxiosError } from "axios";

const registerFormSchema = z.object({
  name: z.string().min(6, { message: "O usuário precisa de um nome válido!" }),
  email: z.string().min(4, { message: "O email precisa ser válido!" }),
  password: z
    .string()
    .min(6, { message: "A senha precisa ser forte e segura!" }),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const router = useRouter();

  async function handleSubmitRegister(data: RegisterFormData) {
    try {
      await server.post("/api/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      await router.push("/podcast");
    } catch (error) {
      alert("chiebcie");
    }
  }

  return (
    <>
      <Head>
        <title>Register | Podcastr</title>
      </Head>
      <RegisterContainer>
        <RegisterPageLabel>
          <img src="/logo-light.svg" alt="Podcastr" />
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
