import { createContext, ReactNode, useState } from "react";

interface StepUpgradeContextProps {
  size: number;
  currentStep: number;
  showStepGetStart: () => void;
  showStepLogin: () => void;
  showStepPayment: () => void;
}

interface StepUpgradeContextProviderProps {
  children: ReactNode;
}

export const StepUpgradeContext = createContext({} as StepUpgradeContextProps);

export function StepUpgradeContextProvider({
  children,
}: StepUpgradeContextProviderProps) {
  const [size, setSize] = useState(3);
  const [currentStep, setCurrentStep] = useState(1);

  function showStepGetStart() {
    setCurrentStep(1);
  }

  function showStepLogin() {
    setCurrentStep(2);
  }

  function showStepPayment() {
    setCurrentStep(3);
  }

  return (
    <StepUpgradeContext.Provider
      value={{
        size,
        currentStep,
        showStepGetStart,
        showStepLogin,
        showStepPayment,
      }}
    >
      {children}
    </StepUpgradeContext.Provider>
  );
}
