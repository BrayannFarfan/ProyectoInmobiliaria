import { Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import OurTeam from "./components/OurTeam/OurTeam";
import Login from "./components/Login/Login";
// import WrapperUser from "./components/WrapperUser/WrapperUser";
// import Profile from "./components/User/Profile";
import BuyerProfile from "./components/User/BuyerProfile";
import SellerProfile from "./components/User/SellerProfile";
import SignUp from "./components/signup/SignUp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Trayectory from "./components/Trajectory/Trayectory";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="trajectory" element={<Trayectory />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="buyer" element={<BuyerProfile />} />
          <Route path="seller" element={<SellerProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
