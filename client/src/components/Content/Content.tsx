import React, { useContext } from "react";
import Context from "../../Context/Context";
import Cart from "./Cart";
import Desc from "./Desc";
import ProductDisplay from "./ProductDisplay";

const Content = () => {
  const { showCart } = useContext(Context);

  return (
    <main>
      <ProductDisplay />
      <Desc />
      {showCart && <Cart />}
    </main>
  );
};

export default Content;
