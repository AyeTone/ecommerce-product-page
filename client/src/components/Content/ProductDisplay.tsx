import React, { useEffect, useState } from "react";
import Shoes from "../../model/Shoes";
import { ReactComponent as Next } from "../../svgs/icon-next.svg";
import { ReactComponent as Previous } from "../../svgs/icon-previous.svg";

interface Props {
  currentShoe: Shoes[];
  setCurrentShoe: React.Dispatch<React.SetStateAction<Shoes[]>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ProductDisplay = ({
  currentShoe,
  setCurrentShoe,
  current,
  setCurrent,
}: Props) => {
  const shoes = currentShoe.map(({ img, id, isActive }) => {
    if (isActive)
      return <img key={id} className="product" src={img} alt="Shoe Display" />;
  });

  function nextImage() {
    if (current === 4) setCurrent(1);
    else setCurrent((prev: number) => prev + 1);
  }

  function prevImage() {
    if (current === 1) setCurrent(4);
    else setCurrent((prev: number) => prev - 1);
  }

  useEffect(() => {
    setCurrentShoe((prev: Shoes[]) => {
      return prev.map((shoe) => {
        if (shoe.isActive) {
          return { ...shoe, isActive: false };
        } else if (!shoe.isActive && shoe.id === current) {
          return { ...shoe, isActive: true };
        } else return shoe;
      });
    });
  }, [current, setCurrentShoe]);

  return (
    <div className="productDisplay">
      {shoes}
      <div className="cover">
        <button className="slide-btn">
          <Previous onClick={() => prevImage()} />
        </button>
        <button className="slide-btn">
          <Next onClick={() => nextImage()} />
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
