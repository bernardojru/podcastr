import { LoginContainer, MessageError } from "./styles";
import { Envelope, Password, Upload, User, X } from "phosphor-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { AxiosError } from "axios";
import { Avatar } from "../Avatar";
import { useThemes } from "../../hooks/useThemes";
import { server } from "../../lib/axios";
import { useStepUpgrade } from "../../hooks/useStepUpgrade";
import { Button } from "@ignite-ui/react";
import { useLogin } from "../../contexts/LoginContext";
import { useAvatar } from "../../hooks/useAvatart";

const registerFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 4 caracteres!" }),
  email: z.string().min(4, { message: "O email precisa ser válido!" }),
  password: z
    .string()
    .min(5, { message: "A senha precisa ser forte e segura!" }),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const { themes } = useThemes();
  const { requestName } = useLogin();
  const { showStepPayment } = useStepUpgrade();
  const { handleFile, previewImg } = useAvatar();

  const router = useRouter();

  async function handleRegister(data: RegisterFormData) {
    const { name } = data;
    try {
      await server.post("/api/", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      requestName("username", name);
      showStepPayment();
      await router.push(`/register?name=${name}`);
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message);
      }
      console.error(error);
    }
  }

  return (
    <LoginContainer className={themes}>
      <Avatar />
      <form onSubmit={handleSubmit(handleRegister)}>
        <span>
          <User size={20} weight="light" /> <strong>Nome:</strong>
        </span>
        <input
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
        />
        <MessageError>{errors.name && errors.name.message}</MessageError>
        <span>
          <Envelope size={20} weight="light" /> <strong>Email:</strong>
        </span>
        <input
          type="email"
          placeholder="Digite o seu email"
          {...register("email")}
        />
        <MessageError>{errors.email && errors.email.message}</MessageError>

        <span>
          <Password size={20} weight="light" /> <strong>Senha:</strong>
        </span>
        <input
          type="password"
          placeholder="Digite a sua senha"
          {...register("password")}
        />
        <MessageError>
          {errors.password && errors.password.message}
        </MessageError>

        <span>
          <Upload size={20} weight="light" /> <strong>Imagem:</strong>
        </span>
        <input type="file" onChange={handleFile} />

        <Button
          variant="primary"
          size="sm"
          type="submit"
          disabled={isSubmitting}
        >
          Entrar Online
        </Button>
      </form>
    </LoginContainer>
  );
}
