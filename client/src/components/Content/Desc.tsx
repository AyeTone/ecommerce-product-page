import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Minus } from "../../svgs/icon-minus.svg";
import { ReactComponent as Plus } from "../../svgs/icon-plus.svg";
import { ReactComponent as Cart } from "../../svgs/icon-cart.svg";
import Context from "../../Context/Context";

const Desc = () => {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(125);
  const [subTotal, setSubTotal] = useState(250);

  const { setCart } = useContext(Context);

  function addProduct() {
    setAmount(amount + 1);
  }

  function removeProduct() {
    if (amount !== 0) setAmount(amount - 1);
  }

  function addToCart() {
    if (amount > 0) {
      setCart((prev: number) => prev + amount);
      setAmount(0);
    }
  }

  useEffect(() => {
    console.log("ran");
    if (amount >= 1) {
      setTotal(125 * amount);
      setSubTotal(250 * amount);
    }
  }, [amount]);

  return (
    <div className="desc">
      <h1 className="desc__company">Sneaker Company</h1>
      <h2 className="desc__title">Fall Limited Edition Sneakers</h2>
      <p className="desc__desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="desc__pricing">
        <div className="total-sale">
          <p className="total">${total}.00</p>
          <p className="sale">50%</p>
        </div>
        <s className="slashed">${subTotal}.00</s>
      </div>
      <div className="desc__quanity">
        <Minus onClick={() => removeProduct()} />
        <p className="current">{amount}</p>
        <Plus onClick={() => addProduct()} />
      </div>
      <button onClick={() => addToCart()} className="desc__add">
        <Cart className="desc__cart" />
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Desc;
