import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import backarrow from "../../../images/arrowback.png";
import buyer from "../../../images/buyer.png";
import seller from "../../../images/seller.png";

export default function Profile() {
  const navigate = useNavigate();
  const [typeUser, setTypeUser] = useState("");
  const handleBack = () => {
    navigate("/");
  };
  const handleBuyer = (e) => {
    console.log(typeUser);
    setTypeUser(e.target.name);
  };
  const handleSeller = (e) => {
    console.log(typeUser);
    setTypeUser(e.target.name);
  };
  const handleRedirect = () => {
    typeUser === "seller"
      ? navigate("/admin/seller")
      : navigate("/admin/buyer");
  };

  return (
    <div className="font-pop bg-[url('./images/decostars.png')] lg:bg-no-repeat lg:bg-[length:700px_600px] bg-[bottom_left_-15rem]">
      <img src={backarrow} alt="arr" onClick={handleBack} />
      <div className="flex justify-center">
        <Outlet />
        <div className="">
          <section className="font-pop">
            <h1 className="lg:mx-28">Choose your profile</h1>
          </section>
          <form
            className="flex flex-col items-center lg:my-40"
            onSubmit={handleRedirect}
          >
            <div className="flex flex-row">
              <img
                src={buyer}
                alt="buyer"
                name="buyer"
                className="border rounded-lg bg-zinc-300 p-5  hover:border-blue-950"
                onClick={handleBuyer}
              />
              <img
                src={seller}
                alt="seller"
                name="seller"
                className="border rounded-lg bg-zinc-300 p-5  hover:border-blue-950"
                onClick={handleSeller}
              />
            </div>
            <div className="flex flex-row lg:m-20">
              <button type="button" className="text-blue-950">
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center border bg-blue-950 lg:mx-3 rounded-lg lg:h-6 text-white p-4"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
