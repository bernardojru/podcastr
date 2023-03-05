import { Header } from "../components/Header";
import { MultiStep } from "@ignite-ui/react";
import {
  ContainerRegister,
  ContainerCenter,
  MultiStepContainer,
  ContainerStepLogin,
} from "../styles/pages/register";
import { GetStart } from "../components/Upgrade";
import { useStepUpgrade } from "../hooks/useStepUpgrade";
import { Login } from "../components/login";
import { Payment } from "../components/Payment";
import { useThemes } from "../hooks/useThemes";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import Head from "next/head";

interface RegisterProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Register({ product }: RegisterProps) {
  const { themes } = useThemes();
  const { size, currentStep } = useStepUpgrade();
  return (
    <>
      <Head>
        <title>Register | Podcastr</title>
      </Head>
      <Header />
      <ContainerRegister className={themes}>
        <ContainerCenter>
          <MultiStepContainer>
            <MultiStep size={size} currentStep={currentStep} />
          </MultiStepContainer>
          <ContainerStepLogin>
            {currentStep === 1 && <GetStart />}
            {currentStep === 2 && <Login />}
            {currentStep === 3 && <Payment product={product} />}
          </ContainerStepLogin>
        </ContainerCenter>
      </ContainerRegister>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1MgpIfBKT6PAWvtCUBz3K1iU");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount! / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
