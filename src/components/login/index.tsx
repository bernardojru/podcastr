import { LoginContainer, Overlay, CloseButton, MessageError } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { Envelope, Password, Upload, User, X } from "phosphor-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { string } from "zod";
import axios, { AxiosError } from "axios";
import { Avatar } from "../Avatar";
import { useState } from "react";
import { useThemes } from "../../hooks/useThemes";

const registerFormChema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome precisa ter pelo menos 4 letras" }),
  email: z.string().min(4, { message: "O email precisa ser válido" }),
  password: z.string().min(5, { message: "A senha precisa ser forte" }),
  image: z.any(),
});

type RegisterFormData = z.infer<typeof registerFormChema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormChema),
  });
  const [previewImg, setPreviewImg] = useState();
  const { themes } = useThemes();

  function handleFile(e: any) {
    const image = e.target.files[0];

    console.log(URL.createObjectURL(image), 'aquiiiiiiiiiiiiiiiiiiiii')
    setPreviewImg(image);
  }

  const router = useRouter();

  async function handleRegister(data: RegisterFormData) {
    try {
      await axios.post("/api/", {
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.image,
      });
      console.log(data)
      await router.push("/podcast");
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message);
      }
      console.error(error);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <LoginContainer className={themes}>
        <header>
          <h2>Fazer o Login</h2>
          <CloseButton>
            <X size={15} weight="bold" />
          </CloseButton>
        </header>
        <Avatar previewImg={previewImg} />
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
          <input type="file" {...register("image")} onChange={handleFile} />

          <button type="submit" disabled={isSubmitting}>
            Entrar Online
          </button>
        </form>
      </LoginContainer>
    </Dialog.Portal>
  );
}
