import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import Image from "../../images/image-product-1-thumbnail.jpg";
import Delete from "../../svgs/icon-delete.svg";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  const total = cart * 125;

  function deleteItems() {
    setCart(0);
  }

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__header">
          <h3 className="title">Cart</h3>
        </div>
        <div className="cart__content">
          {cart === 0 ? (
            <p className="empty"> Your cart is empty</p>
          ) : (
            <>
              <div className="item">
                <div className="items">
                  <img className="img" src={Image} alt="cart item" />
                  <div className="details">
                    <p className="label">Fall Limited Edition Sneakers</p>
                    <p className="pricing">
                      $125 x {cart} <span className="total">${total}.00</span>
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => deleteItems()}
                  className="delete"
                  src={Delete}
                  alt="delele item"
                />
              </div>
              <button className="checkout"> Checkout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
