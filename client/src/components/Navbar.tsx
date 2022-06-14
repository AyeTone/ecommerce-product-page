import { useContext } from "react";
import { ReactComponent as Menu } from "../svgs/icon-menu.svg";
import { ReactComponent as Cart } from "../svgs/icon-cart.svg";
import { ReactComponent as Close } from "../svgs/icon-close.svg";
import Avatar from "../images/image-avatar.png";
import Context from "../Context/Context";
// import { useState } from "react";

const Navbar = () => {
  const { setShowCart, cart } = useContext(Context);
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  const displayNavItems = navItems.map((item, id) => {
    return (
      <li className="navbar__list--item" key={id}>
        {item}
      </li>
    );
  });

  function showMenu() {
    let dropdown = document.getElementById("dropdown") as HTMLDivElement;
    dropdown.style.cssText = `
    left: 0;
    width: 100%;
    `;
  }

  function closeMenu() {
    let dropdown = document.getElementById("dropdown") as HTMLDivElement;
    dropdown.style.cssText = `
        left: 1000px;
        width: 0;
    `;
  }

  function handleCart() {
    setShowCart((prev: boolean) => !prev);
  }

  // const [width, setWidth] = useState(0);

  // window.onresize = () => {
  //   setWidth(window.screen.width);
  //   if (width >= 1020) {
  //     closeMenu();
  //   }
  // };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="navbar__left--title">sneakers</h1>
        <Menu onClick={() => showMenu()} className="navbar__dropdown--btn" />
        <div id="dropdown" className="navbar__dropdown">
          <ul className="navbar__list">
            <Close
              onClick={() => closeMenu()}
              className="navbar__list--item close"
            />
            {displayNavItems}
          </ul>
        </div>
        <div className="navbar__tablet">
          <ul className="navbar__list">{displayNavItems}</ul>
        </div>
      </div>

      <div className="navbar__right">
        <div onClick={() => handleCart()} className="navbar__cart">
          <Cart />
          {cart ? <p className="navbar__cart--count"> {cart} </p> : null}
        </div>
        <img
          onClick={() => handleCart()}
          src={Avatar}
          alt="avatar"
          className="navbar__avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
