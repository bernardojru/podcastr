import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (!priceId) {
    return res.status(400).json({ error: "Id do preço vazio!" });
  }

  const successUrl = `${process.env.NEXT_URL}/premium?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/podcast`;

  const checkoutSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    billing_address_collection: "required",
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    allow_promotion_codes: true,
    success_url: successUrl,
    cancel_url: cancelUrl,
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
