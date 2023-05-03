import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import { compare, hash } from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(req.body);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    const userSubscribed = !!user?.subscribed;

    return res.status(201).json({ user, userSubscribed });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao registrar o usuário." });
  }
}
