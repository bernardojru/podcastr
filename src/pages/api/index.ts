import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, password, email, image } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(400).json({
      message: "Username already token",
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      image,
    },
  });

  return res.status(201).json(user);
}