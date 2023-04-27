import { createContext, ReactNode, useState } from "react";

interface StepUpgradeContextProps {
  size: number;
  currentStep: number;
  showStepGetStart: () => void;
  showStepPayment: () => void;
}

interface StepUpgradeContextProviderProps {
  children: ReactNode;
}

export const StepUpgradeContext = createContext({} as StepUpgradeContextProps);

export function StepUpgradeContextProvider({
  children,
}: StepUpgradeContextProviderProps) {
  const [size, setSize] = useState(2);
  const [currentStep, setCurrentStep] = useState(1);

  function showStepGetStart() {
    setCurrentStep(1);
  }

  function showStepPayment() {
    setCurrentStep(2);
  }

  return (
    <StepUpgradeContext.Provider
      value={{
        size,
        currentStep,
        showStepGetStart,
        showStepPayment,
      }}
    >
      {children}
    </StepUpgradeContext.Provider>
  );
}
