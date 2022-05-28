import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Cart from "./Cart";
import Desc from "./Desc";
import ProductDisplay from "./ProductDisplay";
import Shoes from "../../model/Shoes";
import Shoe1 from "../../images/image-product-1.jpg";
import Shoe2 from "../../images/image-product-2.jpg";
import Shoe3 from "../../images/image-product-3.jpg";
import Shoe4 from "../../images/image-product-4.jpg";

const Content = () => {
  const { showCart } = useContext(Context);
  const [currentShoe, setCurrentShoe] = useState<Shoes[]>([
    {
      id: 1,
      img: Shoe1,
      isActive: true,
    },
    {
      id: 2,
      img: Shoe2,
      isActive: false,
    },
    {
      id: 3,
      img: Shoe3,
      isActive: false,
    },
    {
      id: 4,
      img: Shoe4,
      isActive: false,
    },
  ]);
  const [current, setCurrent] = useState(1);

  return (
    <main>
      <ProductDisplay
        currentShoe={currentShoe}
        setCurrentShoe={setCurrentShoe}
        current={current}
        setCurrent={setCurrent}
      />
      <Desc />
      {showCart && <Cart />}
    </main>
  );
};

export default Content;
