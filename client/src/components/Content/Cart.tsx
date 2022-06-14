import { useContext } from "react";
import Context from "../../Context/Context";
import Image from "../../images/image-product-1-thumbnail.jpg";
import Delete from "../../svgs/icon-delete.svg";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  const total = cart * 125;

  function deleteItems() {
    setCart(0);
  }

  function notReal() {
    alert("This is not a real store. Thank you for clicking though.");
  }

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <div className="cart__header">
          <h3 className="cart__title">Cart</h3>
        </div>

        <div className="cart__body">
          {cart === 0 ? (
            <p className="cart__body--empty"> Your cart is empty</p>
          ) : (
            <>
              <div className="cart__list">
                <div className="cart__item">
                  <img
                    className="cart__item--img"
                    src={Image}
                    alt="cart item"
                  />
                  <div className="cart__desc">
                    <p className="cart__desc--label">
                      Fall Limited Edition Sneakers
                    </p>
                    <p className="cart__desc--pricing">
                      <s>$125</s> x {cart}{" "}
                      <span className="cart__desc--total">${total}.00</span>
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => deleteItems()}
                  className="cart__delete"
                  src={Delete}
                  alt="delele item"
                />
              </div>
              <button className="cart__checkout" onClick={() => notReal()}>
                {" "}
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
