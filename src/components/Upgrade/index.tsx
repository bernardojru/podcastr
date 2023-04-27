import { Text, Button, Checkbox, Box } from "@ignite-ui/react";
import { ArrowRight, Check } from "phosphor-react";
import { useState } from "react";
import { useStepUpgrade } from "../../hooks/useStepUpgrade";
import { useThemes } from "../../hooks/useThemes";
import { dark } from "../../styles/themes/dark";
import { UpgradeContainer } from "./styles";

export function GetStart() {
  const { showStepPayment } = useStepUpgrade();
  const [accept, setAccept] = useState(true);
  const { themes } = useThemes();

  function acceptTermsUser() {
    setAccept((state) => !state);
  }

  return (
    <UpgradeContainer>
      <Text size="2xl">Sobre o seu Upgrade</Text>
      <div>
        <Check size={20} color={`${themes === dark ? "#fff" : "#000"}`} />
        <p>Acesso a uma lista ilimitada de podcasts.</p>
      </div>
      <div>
        <Check size={20} color={`${themes === dark ? "#fff" : "#000"}`} />
        <p>Acesso a futuras atualizações.</p>
      </div>
      <div>
        <Check size={20} color={`${themes === dark ? "#fff" : "#000"}`} />
        <p>Sem anúncios.</p>
      </div>
      <div>
        <Checkbox onClick={acceptTermsUser} />
        <p>Aceitar termos de uso, para poder avançar</p>
      </div>
      <Button
        variant="primary"
        disabled={accept}
        size="sm"
        onClick={showStepPayment}
      >
        Próximo passo <ArrowRight weight="bold" />
      </Button>
    </UpgradeContainer>
  );
}
