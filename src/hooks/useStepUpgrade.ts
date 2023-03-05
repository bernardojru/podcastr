import { useContext } from "react";
import { StepUpgradeContext } from "../contexts/StepUpgradeContext";

export function useStepUpgrade () {
  return useContext(StepUpgradeContext);
};
