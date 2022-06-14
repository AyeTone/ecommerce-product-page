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
  const [changed, setChanged] = useState(false);

  function nextImage() {
    if (current === 4) setCurrent(1);
    else setCurrent((prev: number) => prev + 1);
    setChanged(true);
  }

  function prevImage() {
    if (current === 1) setCurrent(4);
    else setCurrent((prev: number) => prev - 1);
    setChanged(true);
  }

  function selectDisplay(clicked: number) {
    setCurrent(clicked);
    setChanged(true);
  }

  function toggleLightBox() {
    if (window.innerWidth >= 1020) setShowLightBox(true);
  }

  useEffect(() => {
    if (changed)
      setCurrentShoe((prev: Shoes[]) => {
        return prev.map((shoe) => {
          if (shoe.isActive) {
            return { ...shoe, isActive: false };
          } else if (!shoe.isActive && shoe.id === current) {
            return { ...shoe, isActive: true };
          } else return shoe;
        });
      });
  }, [current, changed]);

  //big display
  const product = currentShoe.map(({ img, id, isActive }) => {
    if (isActive)
      return (
        <img
          onClick={() => toggleLightBox()}
          key={id}
          className={isLightBox ? "light-box__img" : "product-display__img"}
          src={img}
          alt={`Shoe${id} Display`}
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
        <img src={img} alt={`display-${id}`} />
      </div>
    );
  });

  return (
    <div className="product-display">
      {isLightBox && (
        <div>
          <button
            onClick={() => setShowLightBox(false)}
            className="light-box__close"
          >
            <Close />
          </button>
        </div>
      )}
      <div className="product-display__wrapper">
        {product}
        <div className={isLightBox ? "light-box" : "product-display__cover"}>
          <button
            onClick={() => prevImage()}
            className={
              isLightBox
                ? "light-box__slide-btns--left light-box__slide-btns "
                : "product-display__slide-btn"
            }
          >
            <Previous />
          </button>
          <button
            onClick={() => nextImage()}
            className={
              isLightBox
                ? "light-box__slide-btns--right light-box__slide-btns"
                : "product-display__slide-btn"
            }
          >
            <Next />
          </button>
        </div>
      </div>
      <div className={isLightBox ? "light-box__container" : undefined}>
        <div
          className={
            isLightBox ? "light-box__selection" : "product-display__selection"
          }
        >
          {selection}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
