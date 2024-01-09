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
  return (
    <>
      <div className="flex flex-col justify-center p-2 mx-2 lg:px-4 lg:py-0  lg:flex lg:flex-row lg:justify-between ">
        <div className="flex flex-row justify-between px-2 align-center items-center">
          <img
            onClick={handleRedirect}
            className="w-[23vw] lg:w-[13vw] lg:p-5"
            src={log}
            alt="logo"
          />
          <img
            src={man}
            className="lg:hidden md:hidden w-[8vw] h-8 mt-2"
            alt="man"
          />
        </div>
        <section className="flex flex-row justify-evenly gap-1 mt-6 w-[90vw] lg:w-[76vw] px-3 items-center lg:bg-white bg-blue-950 lg:flex-row">
          <p
            className="text-white lg:text-blue-950 font-pop "
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
          <div className="groupButtons">
            <button className="loginButton">Log in</button>
            <button className="signinButton">Sign up</button>
          </div>
        </section>
      </div>
    </>
  );
}
