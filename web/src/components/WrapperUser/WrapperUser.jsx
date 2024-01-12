import { Outlet } from "react-router-dom";
import UserHeader from "../User/UserHeader";
import Footer from "../Footer/Footer";
const WrapperUser = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default WrapperUser;
