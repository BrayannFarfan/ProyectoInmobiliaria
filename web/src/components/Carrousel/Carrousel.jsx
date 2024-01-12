import { useState } from "react";
import C1 from "../../../images/car1.png";
import C2 from "../../../images/car2.png";
import C3 from "../../../images/car3.png";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
var slides = [C1, C2, C3];

export default function Carrousel() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  return (
    <div className="overflow-hidden relative lg:p-6">
      <div
        className={`flex transition ease-out duration-400 `}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => {
          return <img key={Math.random()} src={s} />;
        })}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex px-3">
        <button onClick={previousSlide} className="bg-white rounded-lg">
          <HiOutlineArrowSmLeft />
        </button>
        <button onClick={nextSlide} className="bg-white rounded-lg">
          <HiOutlineArrowSmRight />
        </button>
      </div>
    </div>
  );
}
