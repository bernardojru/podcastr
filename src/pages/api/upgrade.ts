import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryEmailSchema = z.object({
    email: z.string(),
  });
  const { email } = queryEmailSchema.parse(req.query);
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Id do preço ou do usuário vazio!" });
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (user?.subscribed) {
    return res
      .status(400)
      .json({ error: "Usuário já está inscrito no plano." });
  }

  const successUrl = `${process.env.NEXT_URL}/premium?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "required",
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    allow_promotion_codes: true,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  await prisma.user.update({
    where: { email },
    data: { subscribed: true },
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
