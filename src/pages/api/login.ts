import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import { compare } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = loginBodySchema.parse(req.body);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    if (!name) {
      return null;
    }

    if (!password) {
      return null;
    }

    return res.send({ message: "Login bem-sucedido" });
  } catch (error) {
    console.log("Tivemos o seguinte erro:", error);
  }
}
