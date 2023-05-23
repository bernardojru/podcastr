import { Header } from "../components/Header";
import { MultiStep } from "@ignite-ui/react";
import {
  ContainerUpgrade,
  ContainerCenter,
  MultiStepContainer,
  ContainerStepLogin,
} from "../styles/pages/upgrade";
import { GetStart } from "../components/Upgrade";
import { useStepUpgrade } from "../hooks/useStepUpgrade";
import { Payment } from "../components/Payment";
import { useThemes } from "../hooks/useThemes";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import Head from "next/head";

interface UpgradeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Upgrade({ product }: UpgradeProps) {
  const { themes } = useThemes();
  const { size, currentStep } = useStepUpgrade();
  return (
    <>
      <Head>
        <title>Upgrade | berCast</title>
      </Head>
      <Header />
      <ContainerUpgrade className={themes}>
        <ContainerCenter>
          <MultiStepContainer>
            <MultiStep size={size} currentStep={currentStep} />
          </MultiStepContainer>
          <ContainerStepLogin>
            {currentStep === 1 && <GetStart />}
            {currentStep === 2 && <Payment product={product} />}
          </ContainerStepLogin>
        </ContainerCenter>
      </ContainerUpgrade>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1NB3LWBKT6PAWvtC1BcOi6YX");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AOA",
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
