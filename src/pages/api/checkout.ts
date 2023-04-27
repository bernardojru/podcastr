import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
// Exemplo de endpoint de webhook do Stripe usando api routes no Next.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const event = req.body;

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      const { metadata } = paymentIntent;
      const userId = metadata.userId; // ID do usuário correspondente ao pagamento

      // Atualizar o registro do usuário no banco de dados com o novo valor para o campo 'subscribed'
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { subscribed: true },
      });
      console.log("Usuário atualizado:", updatedUser);

      break;
    default:
      console.log(`Evento não tratado: ${event.type}`);
  }

  res.status(200).json({ received: true });
}
