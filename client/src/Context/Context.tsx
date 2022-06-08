import React, { createContext, useState, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Context = createContext<any>(undefined);

export const ContextProvider = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);

  const value = {
    showCart,
    setShowCart,
    cart,
    setCart,
    showLightBox,
    setShowLightBox,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
