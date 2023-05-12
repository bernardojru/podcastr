// get-user-profile

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const loginBodySchema = z.object({
    id: z.string(),
  });

  const { id } = loginBodySchema.parse(req.query);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return null;
    }

    return res.send({ user });
  } catch (error) {
    console.log("Tivemos o seguinte erro:", error);
  }
}
