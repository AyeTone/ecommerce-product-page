import React from "react";
import Shoe1 from "../../images/image-product-1.jpg";
import { ReactComponent as Next } from "../../svgs/icon-next.svg";
import { ReactComponent as Previous } from "../../svgs/icon-previous.svg";

const ProductDisplay = () => {
  return (
    <div className="productDisplay">
      <img className="product" src={Shoe1} alt="Shoe Display" />
      <div className="cover">
        <button className="slide-btn">
          <Previous />
        </button>
        <button className="slide-btn">
          <Next />
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
