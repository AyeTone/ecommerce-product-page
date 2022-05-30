import { useContext, useEffect, useState } from "react";
import Shoes from "../../model/Shoes";
import Shoe1 from "../../images/image-product-1.jpg";
import Shoe2 from "../../images/image-product-2.jpg";
import Shoe3 from "../../images/image-product-3.jpg";
import Shoe4 from "../../images/image-product-4.jpg";
import { ReactComponent as Next } from "../../svgs/icon-next.svg";
import { ReactComponent as Previous } from "../../svgs/icon-previous.svg";
import { ReactComponent as Close } from "../../svgs/icon-close.svg";
import Context from "../../Context/Context";

interface Props {
  isLightBox?: boolean;
}

const ProductDisplay = ({ isLightBox }: Props) => {
  const { setShowLightBox } = useContext(Context);
  const [currentShoe, setCurrentShoe] = useState<Shoes[]>([
    {
      id: 1,
      img: Shoe1,
      isActive: true,
    },
    {
      id: 2,
      img: Shoe2,
      isActive: false,
    },
    {
      id: 3,
      img: Shoe3,
      isActive: false,
    },
    {
      id: 4,
      img: Shoe4,
      isActive: false,
    },
  ]);
  const [current, setCurrent] = useState(1);

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

  function selectDisplay(clicked: number) {
    setCurrent(clicked);
  }

  function toggleLightBox() {
    if (window.innerWidth >= 1020) setShowLightBox(true);
  }

  //big display
  const shoes = currentShoe.map(({ img, id, isActive }) => {
    if (isActive)
      return (
        <img
          onClick={() => toggleLightBox()}
          key={id}
          className={isLightBox ? "lightBox__product" : "product"}
          src={img}
          alt="Shoe Display"
        />
      );
  });

  //selection at bottom
  const selection = currentShoe.map(({ img, id, isActive }) => {
    return (
      <div
        onClick={() => selectDisplay(id)}
        key={id}
        className={isActive ? "selected" : undefined}
      >
        <img src={img} alt={`display-${id}`} className="selection" />
      </div>
    );
  });

  return (
    <div className="productDisplay">
      {isLightBox && (
        <div>
          <button
            onClick={() => setShowLightBox(false)}
            className="lightBox__close"
          >
            <Close />
          </button>
        </div>
      )}
      <div className="productDisplay__display">
        {shoes}
        <div className={isLightBox ? "lightBox" : "cover"}>
          <button
            onClick={() => prevImage()}
            className={isLightBox ? "lightBox__btns left" : "slide-btn"}
          >
            <Previous />
          </button>
          <button
            onClick={() => nextImage()}
            className={isLightBox ? "lightBox__btns right" : "slide-btn"}
          >
            <Next />
          </button>
        </div>
      </div>
      <div className={isLightBox ? "container" : undefined}>
        <div className={isLightBox ? "lightBox__shoe-btns" : "shoe-btns"}>
          {selection}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
