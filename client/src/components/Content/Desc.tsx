import React from "react";
import { ReactComponent as Minus } from "../../svgs/icon-minus.svg";
import { ReactComponent as Plus } from "../../svgs/icon-plus.svg";
import { ReactComponent as Cart } from "../../svgs/icon-cart.svg";

const Desc = () => {
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
          <p className="total">$125.00</p>
          <p className="sale">50%</p>
        </div>
        <s className="slashed">$250.00</s>
      </div>
      <div className="desc__quanity">
        <Minus />
        <p className="current"> 0</p>
        <Plus />
      </div>
      <button className="desc__add">
        <Cart className="desc__cart" />
        <p>Add to cart</p>
      </button>
    </div>
  );
};

export default Desc;
