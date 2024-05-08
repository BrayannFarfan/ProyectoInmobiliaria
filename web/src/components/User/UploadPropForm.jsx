import { useEffect, useState } from "react";
//import plus from "../../../images/+.png";
import axios from "axios";
import { toast } from "react-toastify";
const PROPERTY_POST = import.meta.env.VITE_POST_PROPERTY;

export default function UploadPropForm() {
  const [role, setRole] = useState();
  const [property, setProperty] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const rol = JSON.parse(user);
    setRole(rol.role_id === "A" ? "Available to sale" : "");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
    console.log(property);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const prop = await axios.post(PROPERTY_POST, property);
      if (prop) {
        toast.success("Property correctly posted!!");
        setProperty({
          name: "",
          location: "",
          type: "",
          rooms: 0,
          bathrooms: "",
          price: "",
          squaremeters: "",
          img: "",
          description: "",
          availability: "",
        });
      } else {
        toast.error("Oh no! Something went wrong! Try again");
      }
    } catch (error) {
      toast.error("Oh no! Something went wrong! Try again");
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col lg:mx-20 lg:my-15 ">
      <form
        onSubmit={handleSubmit}
        className="font-pop flex flex-col justify-center"
      >
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Property Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder="  Location"
          name="location"
          onChange={handleChange}
        />
        <select
          onChange={handleChange}
          name="type"
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
        >
          <option defaultValue=""></option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Cottage">Cottage</option>
          <option value="Other">Other ...</option>
        </select>

        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Price"
          name="price"
          onChange={handleChange}
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Size in square meters"
          name="squaremeters"
          onChange={handleChange}
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Rooms"
          name="rooms"
          onChange={handleChange}
        />
        <input
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
          type="text"
          placeholder=" Bathrooms"
          name="bathrooms"
          onChange={handleChange}
        />
        <select
          name="availability"
          onChange={handleChange}
          className="lg:w-2/3 lg:h-[50px] lg:my-2 border border-zinc-300 rounded-2xl"
        >
          <option defaultValue={role}>{role}</option>
        </select>
        <textarea
          className="lg:w-2/3 lg:h-[150px] lg:my-2 border border-zinc-300 rounded-2xl "
          type="text"
          placeholder=" Description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <div className="">
          <input
            className="lg:w-2/3 lg:h-[227px]  bg-zinc-300 rounded-2xl lg:my-5 flex flex-col justify-center items-center"
            type="text"
            placeholder=" Add Images"
            name="img"
            onChange={handleChange}
          />
          {/* <img src={plus} alt="plus" className="lg:h-[50px] lg:w-14 relativ" /> */}
        </div>
        <section className="flex justify-end">
          <button
            className="border border-blue-950 rounded-2xl lg:bg-blue-950  text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10 lg:mr-80 "
            type="submit"
          >
            Continue
          </button>
        </section>
      </form>
    </div>
  );
}
