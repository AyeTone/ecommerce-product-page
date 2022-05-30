import { useContext } from "react";
import Context from "../../Context/Context";
import Cart from "./Cart";
import Desc from "./Desc";
import ProductDisplay from "./ProductDisplay";

import Lightbox from "./Lightbox";

const Content = () => {
  const { showCart, showLightBox } = useContext(Context);

  return (
    <main className="content">
      <ProductDisplay />
      <Desc />
      {showCart && <Cart />}
      {showLightBox && <Lightbox />}
    </main>
  );
};

export default Content;
