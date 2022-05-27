import React from "react";
import { ReactComponent as Menu } from "../svgs/icon-menu.svg";
import { ReactComponent as Cart } from "../svgs/icon-cart.svg";
import { ReactComponent as Close } from "../svgs/icon-close.svg";
import Avatar from "../images/image-avatar.png";

const Navbar = () => {
  const show = () => {
    let dropdown = document.getElementById("dropdown") as HTMLDivElement;
    dropdown.style.cssText = `
    position: fixed;
    transition: all 1s;
    left: 0;
    width: 100%;
    `;
  };

  const close = () => {
    let dropdown = document.getElementById("dropdown") as HTMLDivElement;
    dropdown.style.cssText = `
        left: 1000px;
    `;
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1 className="title">sneakers</h1>
        <Menu onClick={() => show()} className="menuBtn" />
        <div id="dropdown" className="dropdown">
          <ul className="dropdown__list">
            <Close onClick={() => close()} className="list-items close" />
            <li className="list-items">Collections</li>
            <li className="list-items">Men</li>
            <li className="list-items">Women</li>
            <li className="list-items">About</li>
            <li className="list-items">Contact</li>
          </ul>
        </div>
      </div>
      <div className="navbar__right">
        <Cart />
        <img src={Avatar} alt="avatar" className="avatar" />
      </div>
    </nav>
  );
};

export default Navbar;
