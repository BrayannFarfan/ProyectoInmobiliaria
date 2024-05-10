import log from "../../../images/Logo.png";
import man from "../../../images/man.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserFromLocalStorage = () => {
      const jsonString = localStorage.getItem("user");
      const usuario = JSON.parse(jsonString);
      setUser(usuario);
      const tok = localStorage.getItem("token");
      tok ? setLogged(true) : setLogged(false);
    };
    fetchUserFromLocalStorage();
  }, []);

  const handleProfile = () => {
    if (user) {
      if (user.role_id === "A") {
        navigate(`seller/${user.user_id}`);
      } else {
        navigate(`buyer/${user.user_id}`);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center p-2 lg:mx-2 md:mx-0 mx-0 lg:px-4 md:w-[100vw] lg:py-0  lg:flex lg:flex-row lg:justify-between ">
        <div className="flex flex-row lg:justify-between justify-center items-center ">
          <Link to="/">
            <img
              className="cursor-pointer w-[23vw] md:w-[20vw] lg:w-[13vw] md:h-[80px] lg:h-[110px] lg:p-5 lg:mr-5 md:mx-auto mx-auto ml-30"
              src={log}
              alt="logo"
            />
          </Link>
          <Link to="">
            <img
              src={man}
              className="lg:hidden lg:w-[8vw] md:h-8 h-7 mr-3 md:mr-0 mt-4 md:mt-7"
              alt="man"
            />
          </Link>
        </div>
        <section className="flex flex-row justify-between md:mt-6 mt-4 items-center lg:justify-evenly lg:w-[76vw] lg:bg-white bg-blue-950 lg:flex-row">
          <Link to="/">
            <p className="text-white lg:text-blue-950 font-pop ml-10 md:ml-40">
              Home
            </p>
          </Link>
          <Link to="/about">
            <p className="text-white lg:text-blue-950 font-pop  ml-4 lg:ml-0">
              About
            </p>
          </Link>
          <Link to="/trajectory">
            <p className="text-white lg:text-blue-950 font-pop hidden lg:block">
              Trajectory
            </p>
          </Link>
          <Link to="/contactus">
            <p className="text-white lg:text-blue-950 font-pop ml-4 lg:ml-0 ">
              Contact
            </p>
          </Link>
          {logged ? (
            <>
              <div
                onClick={handleProfile}
                className="flex flex-row items-center font-pop justify-center border border-blue-950 rounded-xl shadow-md cursor-pointer"
              >
                <section className="flex flex-col lg:items-center lg:mx-1 lg:my-2 text-gray-400 text-sm">
                  <img src={man} className="h-[20px] w-auto m-1" alt="man" />
                  <p className="mx-6">{user.name}</p>
                </section>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="loginButton">
                <button type="button">Log in</button>
              </Link>
              <Link to="signup" className="signinButton">
                <button type="button">Sign up</button>
              </Link>
            </>
          )}
        </section>
      </div>
    </>
  );
}
