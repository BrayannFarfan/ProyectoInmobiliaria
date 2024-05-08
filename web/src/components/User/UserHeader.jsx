import logo from "../../../images/Logo.png";
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
      </div>
    </>
  );
};

export default UserHeader;
