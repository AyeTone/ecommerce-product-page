import React from "react";
import Image from "../../images/image-product-1-thumbnail.jpg";
import Delete from "../../svgs/icon-delete.svg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__header">
          <h3 className="title">Cart</h3>
        </div>
        <div className="cart__content">
          <p className="empty"> Your cart is empty</p>
          {/* <div className="item">
            <div className="items">
              <img className="img" src={Image} alt="cart item" />
              <div className="details">
                <p className="label">Autumn Limited Edition</p>
                <p className="pricing">
                  $Price x Amount <span className="total">$ Price</span>
                </p>
              </div>
            </div>
            <img className="delete" src={Delete} alt="delele item" />
          </div>
          <button className="checkout"> Checkout</button> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
