import { PaymentContainer } from "./styles";
import { Button } from "@ignite-ui/react";
import { server } from "../../lib/axios";

interface PaymentProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export function Payment({ product }: PaymentProps) {
  async function handleSubscribe() {
    try {
      const response = await server.post("/api/upgrade", {
        priceId: product.priceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      alert(err);
    }
  }

  return (
    <PaymentContainer>
      <p>
        Tenha acesso a todos os podcasts pagando {product.amount} e ter acesso
        por 1 mês.
      </p>
      <Button onClick={handleSubscribe}>inscreva-se agora</Button>
    </PaymentContainer>
  );
}

// pin de teste: 4242 4242 4242 4242
