import { createContext, ReactNode, useContext, useState } from "react";

interface CheckoutContextProps {
  showItem: boolean;
  showAllItems: () => void;
}

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutContextProvider({
  children,
}: CheckoutContextProviderProps) {
  const [showItem, setShowItem] = useState(false);

  function showAllItems() {
    setShowItem(true);
  }
  
  return (
    <CheckoutContext.Provider value={{ showAllItems, showItem }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckout = () => {
    return useContext(CheckoutContext);
  };
  