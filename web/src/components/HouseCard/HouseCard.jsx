import { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import axios from "axios";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
export default function Cards() {
  const [property, setProperty] = useState();
  useEffect(() => {
    const fetchHouses = async () => {
      const usuario = await axios.get("http://localhost:3000/properties/");
      setProperty(usuario.data);
      return property;
    };
    fetchHouses();
  }, []);
  console.log(property);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {property?.map((prop) => {
          return (
            <div
              key={prop.property_id}
              className="max-w-sm rounded overflow-hidden shadow-lg p-8 lg:h-[27rem] "
            >
              <img
                src={prop.img}
                alt="pic"
                className="lg:w-full w-40 md:w-80 "
              />
              <div className="px-6 py-4">
                <h3 className="font-bold text-l mb-2 text-blue-950">
                  {prop.name}
                </h3>
                <p className="text-xs text-blue-950 hidden md:block">
                  {prop.description}
                </p>
              </div>
              <section className="flex flex-row justify-between">
                <p className="text-blue-950 text-sm hover:text-xl flex items-center mb-1">
                  Learn more
                  <HiOutlineArrowSmRight />
                </p>
                <section>
                  <IoIosHeartEmpty />
                </section>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}
