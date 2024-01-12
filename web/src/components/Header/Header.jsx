import log from "../../../images/Logo.png";
import man from "../../../images/man.png";

import { useNavigate } from "react-router";
import "./header.css";
export default function Header() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleTeam = () => {
    navigate("/ourteam");
  };
  const handleContact = () => {
    navigate("/contactus");
  };
  const handleAdmin = () => {
    navigate("/admin");
  };
  return (
    <>
      <div className="flex flex-col justify-center p-2 lg:mx-2 md:mx-0 mx-0 lg:px-4 md:w-[100vw] lg:py-0  lg:flex lg:flex-row lg:justify-between ">
        <div className="flex flex-row lg:justify-between justify-center items-center ">
          <img
            onClick={handleRedirect}
            className="w-[23vw] md:w-[20vw] lg:w-[13vw] md:h-[80px] lg:h-[110px] lg:p-5 lg:mr-5 md:mx-auto mx-auto ml-30"
            src={log}
            alt="logo"
          />
          <img
            src={man}
            className="lg:hidden lg:w-[8vw] md:h-8 h-7 mr-3 md:mr-0 mt-4 md:mt-7"
            alt="man"
          />
        </div>
        <section className="flex flex-row justify-between md:mt-6 mt-4 items-center lg:justify-evenly lg:w-[76vw] lg:bg-white bg-blue-950 lg:flex-row">
          <p
            className="text-white lg:text-blue-950 font-pop ml-10 md:ml-40"
            onClick={handleRedirect}
          >
            Home
          </p>
          <p
            className="text-white lg:text-blue-950 font-pop  ml-4 lg:ml-0"
            onClick={handleAbout}
          >
            About
          </p>
          <p
            className="text-white lg:text-blue-950 font-pop hidden lg:block"
            onClick={handleTeam}
          >
            Trajectory
          </p>
          <p
            className="text-white lg:text-blue-950 font-pop ml-4 lg:ml-0 "
            onClick={handleContact}
          >
            Contact
          </p>
          <p
            className="text-white lg:text-pink-500 font-pop ml-4 lg:ml-0"
            onClick={handleAdmin}
          >
            AdminProfile
          </p>
          <div className="groupButtons">
            <button className="loginButton">Log in</button>
            <button className="signinButton">Sign up</button>
          </div>
        </section>
      </div>
    </>
  );
}
