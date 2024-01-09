import { Outlet } from "react-router-dom";
import home from "../../../images/house.png";
import Carrousel from "../Carrousel/Carrousel";
import Card from "../Card/Card";
import About from "../About/About";
import OurTeam from "../OurTeam/OurTeam";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center lg:w-full lg:gap-x-40 ">
        <Outlet />
        <section className="flex flex-row lg:flex-col  lg:items-baseline ">
          <h1 className="font-pop text-sm lg:text-5xl font-semibold  text-blue-950 lg:mt-14 ">
            Find your <br className="hidden lg:block p-4" /> property with us
          </h1>
          <p className="mt-[1rem] lg:mt-[6rem] font-pop font-extrabold hidden lg:block">
            Buy and sell properties on our platform
          </p>
          <button className="hidden lg:block mt-[0.5rem] lg:mt-[4rem] font-pop ml-20 lg:ml-0 bg-blue-950 text-white rounded-lg m-1 h-6 w-30 p-4 justify-center items-center lg:h-14 lg:w-40">
            More details
          </button>
        </section>
        <section>
          <img
            src={home}
            className="hidden lg:block h-[40vw] w-auto"
            alt="home"
          />
        </section>
      </div>
      <div className="w-[90vw] m-auto pt-6 hidden lg:block">
        <Carrousel />
      </div>
      <div className="flex justify-center text-xl lg:hidden bg-blue-950 mt-6 w-full">
        <h1 className="font-pop lg:hidden flex justify-start text-white">
          Check our properties!
        </h1>
      </div>
      <div className="flex lg:justify-center ml-14 lg:items-center p-5 lg:p-9 lg:ml-4 ">
        <Card />
      </div>
      <About />
      <OurTeam />
      <ContactUs />
    </>
  );
};
export default Home;
