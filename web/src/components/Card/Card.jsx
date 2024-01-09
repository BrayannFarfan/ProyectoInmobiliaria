import propiedades from "../../info/info";
import { useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
export default function Cards() {
  const [houses, setHouses] = useState(propiedades);

  return (
    <>
      <div className="flex flex-wrap w-full justify-between">
        {houses?.slice(0, 3).map((h) => {
          return (
            <div
              key={Math.random()}
              className="max-w-sm rounded overflow-hidden shadow-lg p-8 lg:h-[27rem] "
            >
              <img
                src={h.photos[0]}
                alt="pic"
                className="lg:w-full w-40 md:w-80 "
              />
              <div className="px-6 py-4">
                <h3 className="font-bold text-l mb-2 text-blue-950">
                  {h.name}
                </h3>
                <p className="text-xs text-blue-950 hidden md:block">
                  {h.description}
                </p>
              </div>
              <p className="text-blue-950 text-sm hover:text-xl flex items-center">
                Learn more
                <HiOutlineArrowSmRight />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
