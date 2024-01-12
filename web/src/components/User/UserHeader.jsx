import logo from "../../../images/Logo.png";
import lupa from "../../../images/lupa.png";
import man from "../../../images/roundedman.png";
import notif from "../../../images/notifications.png";
import { useNavigate } from "react-router-dom";
const UserHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-row items-center p-2 lg:mx-2 md:mx-0 mx-0 lg:px-4 md:w-[100vw] lg:py-0  lg:flex lg:flex-row lg:justify-between font-pop">
        <img className="" src={logo} alt="logo" onClick={handleNavigate} />
        <section className="flex flex-row lg:items-center lg:mx-3 lg:my-3">
          <img src={lupa} className="lg:w-[6vw] p-1" alt="lupa" />
          <img src={notif} className="lg:w-[5vw]" alt="notif" />
          <p>My profile</p>
          <img src={man} className="lg:w-[5vw] lg:ml-3" alt="man" />
        </section>
      </div>
    </>
  );
};

export default UserHeader;
