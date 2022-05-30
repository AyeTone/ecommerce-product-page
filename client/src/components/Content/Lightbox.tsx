import React from "react";
import ProductDisplay from "./ProductDisplay";

interface Props {}

const Lightbox = (props: Props) => {
  const isLightBox = true;

  return (
    <div className="lightbox">
      <div className="lightbox__wrapper">
        <ProductDisplay isLightBox={isLightBox} />
      </div>
    </div>
  );
};

export default Lightbox;
