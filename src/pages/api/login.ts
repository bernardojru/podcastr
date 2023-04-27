import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import { compare } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = loginBodySchema.parse(req.body);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    // const isPasswordValid = await compare(password, user.password);

    if (!password) {
      return null;
    }

    return res.send({ message: "Login bem-sucedido" });
  } catch (error) {
    console.log("Tivemos o seguinte erro:", error);
  }
}
