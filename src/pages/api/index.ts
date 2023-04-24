import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    });
    const { name, password, email } = registerBodySchema.parse(req.body);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(200).json({ data: user });
  }
  if (req.method === "GET") {
    const name = String(req.query.name);

    const user = await prisma.user.findUnique({
      where: {
        name,
      },
    });
    console.log(user, "user do terminal");

    return res.json({ user });
  }
}
